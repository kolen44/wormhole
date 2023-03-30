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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface WormholeRelayerGovernanceInterface extends utils.Interface {
  functions: {
    "checkAndExecuteUpgradeMigration()": FunctionFragment;
    "getRegisteredWormholeRelayerContract(uint16)": FunctionFragment;
    "registerWormholeRelayerContract(bytes)": FunctionFragment;
    "setDefaultDeliveryProvider(bytes)": FunctionFragment;
    "submitContractUpgrade(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkAndExecuteUpgradeMigration"
      | "getRegisteredWormholeRelayerContract"
      | "registerWormholeRelayerContract"
      | "setDefaultDeliveryProvider"
      | "submitContractUpgrade"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkAndExecuteUpgradeMigration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisteredWormholeRelayerContract",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerWormholeRelayerContract",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultDeliveryProvider",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitContractUpgrade",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkAndExecuteUpgradeMigration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegisteredWormholeRelayerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerWormholeRelayerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultDeliveryProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitContractUpgrade",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "SendEvent(uint64,uint256,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface SendEventEventObject {
  sequence: BigNumber;
  deliveryQuote: BigNumber;
  paymentForExtraReceiverValue: BigNumber;
}
export type SendEventEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SendEventEventObject
>;

export type SendEventEventFilter = TypedEventFilter<SendEventEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface WormholeRelayerGovernance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WormholeRelayerGovernanceInterface;

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
    checkAndExecuteUpgradeMigration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerWormholeRelayerContract(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDefaultDeliveryProvider(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitContractUpgrade(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  checkAndExecuteUpgradeMigration(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRegisteredWormholeRelayerContract(
    chainId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  registerWormholeRelayerContract(
    encodedVm: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDefaultDeliveryProvider(
    encodedVm: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitContractUpgrade(
    encodedVm: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkAndExecuteUpgradeMigration(overrides?: CallOverrides): Promise<void>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    registerWormholeRelayerContract(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultDeliveryProvider(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitContractUpgrade(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "SendEvent(uint64,uint256,uint256)"(
      sequence?: PromiseOrValue<BigNumberish> | null,
      deliveryQuote?: null,
      paymentForExtraReceiverValue?: null
    ): SendEventEventFilter;
    SendEvent(
      sequence?: PromiseOrValue<BigNumberish> | null,
      deliveryQuote?: null,
      paymentForExtraReceiverValue?: null
    ): SendEventEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    checkAndExecuteUpgradeMigration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerWormholeRelayerContract(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDefaultDeliveryProvider(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitContractUpgrade(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkAndExecuteUpgradeMigration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerWormholeRelayerContract(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultDeliveryProvider(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitContractUpgrade(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}