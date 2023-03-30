/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ForwardTesterInterface extends utils.Interface {
  functions: {
    "fromWormholeFormat(bytes32)": FunctionFragment;
    "receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fromWormholeFormat"
      | "receiveWormholeMessages"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fromWormholeFormat",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveWormholeMessages",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "fromWormholeFormat",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveWormholeMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {};
}

export interface ForwardTester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ForwardTesterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fromWormholeFormat(
      whAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { addr: string }>;

    receiveWormholeMessages(
      payload: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>[],
      sourceAddress: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  fromWormholeFormat(
    whAddress: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  receiveWormholeMessages(
    payload: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BytesLike>[],
    sourceAddress: PromiseOrValue<BytesLike>,
    sourceChain: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    fromWormholeFormat(
      whAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    receiveWormholeMessages(
      payload: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>[],
      sourceAddress: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fromWormholeFormat(
      whAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveWormholeMessages(
      payload: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>[],
      sourceAddress: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fromWormholeFormat(
      whAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveWormholeMessages(
      payload: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>[],
      sourceAddress: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}