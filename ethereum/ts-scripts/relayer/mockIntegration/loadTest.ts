import { ChainInfo, getOperatingChains, init } from "../helpers/env";
import { sendMessage } from "./messageUtils";
import { register, Counter, Histogram } from "prom-client";
import Koa from "koa";
import Router from "koa-router";

init();
const chains = getOperatingChains();

const sentCounter = new Counter({
  name: "sent_messages",
  help: "Number of messages sent",
  labelNames: ["from", "to"],
  registers: [register],
});

const failedToSendCounter = new Counter({
  name: "failed_to_send_messages",
  help: "Number of messages failed to send",
  labelNames: ["from", "to"],
  registers: [register],
});

const sentMessageDuration = new Histogram({
  name: `worklow_processing_duration`,
  help: "Processing time in ms for completed jobs (processing until completed)",
  buckets: [200, 500, 1500, 3000, 5000, 6000, 7000, 8000, 12000, 15000, 20000],
  labelNames: ["queue"],
  registers: [register],
})

async function main() {
  console.log(process.argv);
  console.log(chains);

  let period = 15 * 60 * 1000;
  if (tryGetArg("--minutes")) {
    period = Number(getArg("--minutes")) * 60 * 1000;
  } else if (tryGetArg("--seconds")) {
    period = Number(getArg("--seconds")) * 1000;
  }

  console.log(
    `Running test every ${period / 1000} seconds (${period /
      1000 /
      60}) minutes)`
  );

  runMetricsServer({ port: 1234 });

  const from = getChainById(getArg("--from") as string);
  const to = getChainById(getArg("--to") as string);
  const matrix = tryGetArg("--matrix") === 'true';
  const burst = tryGetArg("--burst");

  if (matrix) {
    console.log("Running matrix test");
    for (const fromChain of chains) {
      for (const toChain of chains) {
        if (fromChain.chainId === toChain.chainId) {
          continue;
        }
     
        runMessagesDrip(period, fromChain, toChain);
        if (burst) runMessageBursts(fromChain, toChain);

        // add some random small delay between chains
        await new Promise(resolve => setTimeout(resolve, getRandomInt(50, 10)));
      }
    }
    return;
  }

  runMessagesDrip(period, from, to);
  if (burst) runMessageBursts(from, to);
}

async function runMessagesDrip(period: number, from: ChainInfo, to: ChainInfo) {
  while (true) {
    console.log("Running test...");
    await sendMessageAndEmitMetrics(from, to);
    console.log("Sleeping...");
    await new Promise((resolve) => setTimeout(resolve, period));
  }
}

function getRandomInt(max: number, min: number = 1) {
  return Math.floor(Math.random() * Math.floor(max)) + min;
}

async function runMessageBursts(from: ChainInfo, to: ChainInfo) {
  const minWaitBetweenBursts = tryGetArg('--min-burst-wait') ? Number(getArg('--min-burst-wait') as string) : 3;
  const maxWaitBetweenBursts = tryGetArg('--max-burst-wait') ? Number(getArg('--max-burst-wait') as string) : 30;
  const maxBurstMessages = tryGetArg('--max-burst-messages') ? Number(getArg('--max-burst-messages') as string) : 50;
  while (true) {
    const nextWaitInMinutes = getRandomInt(maxWaitBetweenBursts, minWaitBetweenBursts);
    const nextBurstMessagesCount = getRandomInt(maxBurstMessages);

    console.log(`Next message burst will be in ${nextWaitInMinutes} minutes and contain ${nextBurstMessagesCount} messages`);

    await new Promise((resolve) => setTimeout(resolve, nextWaitInMinutes * 60 * 1000));

    console.log(`Starting message burst (${nextBurstMessagesCount} messages)...`);

    for (let i = 0; i < nextBurstMessagesCount; i++) {
      await sendMessageAndEmitMetrics(from, to);
    }
  }
}

async function sendMessageAndEmitMetrics(from: ChainInfo, to: ChainInfo) {
  try {
    await sendMessage(from, to);
    sentCounter.inc({ from: from.chainId, to: to.chainId });
  } catch (e) {
    failedToSendCounter.inc({ from: from.chainId, to: to.chainId });
    console.error(
      `Failed to send message from ${from.chainId} to ${to.chainId}`
    );
    console.error(e);
  }
}

function getChainById(id: number | string): ChainInfo {
  id = Number(id);
  const chain = chains.find((c) => c.chainId === id);
  if (!chain) {
    throw new Error("chainId not found, " + id);
  }
  return chain;
}

function runMetricsServer({ port }: any) {
  const app = new Koa();
  const router = new Router();

  router.get("/metrics", async (ctx: Koa.Context) => {
    ctx.body = await register.metrics();
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  port = Number(port) || 3000;
  app.listen(port, () => {
    console.info(`Running on ${port}...`);
    console.info(
      `For prometheus metrics, open http://localhost:${port}/metrics`
    );
  });
}

function tryGetArg(pattern: string | string[]): string | undefined {
  return getArg(pattern, { required: false });
}

function getArg(
  patterns: string | string[],
  {
    isFlag = false,
    required = true,
  }: { isFlag?: boolean; required?: boolean } = {
    isFlag: false,
    required: true,
  }
): string | undefined {
  let idx: number = -1;
  if (typeof patterns === "string") {
    patterns = [patterns];
  }
  for (const pattern of patterns) {
    idx = process.argv.findIndex((x) => x === pattern);
    if (idx !== -1) {
      break;
    }
  }
  if (idx === -1) {
    if (required) {
      throw new Error(
        "Missing required cmd line arg: " + JSON.stringify(patterns)
      );
    }
    return undefined;
  }
  if (isFlag) {
    return process.argv[idx];
  }
  return process.argv[idx + 1];
}

console.log("Start!");
main().then(() => console.log("Done!"));