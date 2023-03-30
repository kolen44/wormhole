/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AttackForwardIntegration,
  AttackForwardIntegrationInterface,
} from "../AttackForwardIntegration";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWormhole",
        name: "initWormhole",
        type: "address",
      },
      {
        internalType: "contract IWormholeRelayer",
        name: "initWormholeRelayer",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "initAttackerReward",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "additionalVaas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "sourceAddress",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "deliveryHash",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040526000805463ffffffff60b01b191661075360b41b17905534801561002757600080fd5b5060405161082a38038061082a8339810160408190526100469161009c565b6001600160a01b039384166080526000805493851660a05261ffff909216600160a01b026001600160b01b0319909316931692909217179055610102565b6001600160a01b038116811461009957600080fd5b50565b600080600080608085870312156100b257600080fd5b84516100bd81610084565b60208601519094506100ce81610084565b604086015190935061ffff811681146100e657600080fd5b60608601519092506100f781610084565b939692955090935050565b60805160a0516106f661013460003960008181609b0152818161011401526101f00152600061014301526106f66000f3fe6080604052600436106100225760003560e01c8063529dca321461004f57600080fd5b3661004a576000546100489061ffff600160a01b820416906001600160a01b0316610064565b005b600080fd5b61004861005d3660046103e2565b5050505050565b6000805460405163c23ee3c360e01b815261ffff8516600482015260248101839052600160b01b90910463ffffffff1660448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c23ee3c3906064016040805180830381865afa1580156100e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010d91906104eb565b50905060607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634d48ec607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa15801561019f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c3919061050f565b6101cd9085610528565b868685600080600060169054906101000a900463ffffffff1663ffffffff168c8c7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166324320c9f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561024c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610270919061054f565b60408051600080825260208201909252906102b3565b60408051606081018252600080825260208083018290529282015282526000199092019101816102865790505b50600f6040518d63ffffffff1660e01b81526004016102dc9b9a999897969594939291906105de565b6000604051808303818588803b1580156102f557600080fd5b505af1158015610309573d6000803e3d6000fd5b505050505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561035357610353610314565b604052919050565b600082601f83011261036c57600080fd5b813567ffffffffffffffff81111561038657610386610314565b610399601f8201601f191660200161032a565b8181528460208386010111156103ae57600080fd5b816020850160208301376000918101602001919091529392505050565b803561ffff811681146103dd57600080fd5b919050565b600080600080600060a086880312156103fa57600080fd5b853567ffffffffffffffff8082111561041257600080fd5b61041e89838a0161035b565b965060209150818801358181111561043557600080fd5b8801601f81018a1361044657600080fd5b80358281111561045857610458610314565b8060051b61046785820161032a565b918252828101850191858101908d84111561048157600080fd5b86850192505b838310156104bd5782358681111561049f5760008081fd5b6104ad8f898389010161035b565b8352509186019190860190610487565b809a5050505050505050604086013592506104da606087016103cb565b949793965091946080013592915050565b600080604083850312156104fe57600080fd5b505080516020909101519092909150565b60006020828403121561052157600080fd5b5051919050565b8082018082111561054957634e487b7160e01b600052601160045260246000fd5b92915050565b60006020828403121561056157600080fd5b81516001600160a01b038116811461057857600080fd5b9392505050565b600081518084526020808501945080840160005b838110156105d3578151805161ffff168852838101518489015260409081015167ffffffffffffffff169088015260609096019590820190600101610593565b509495945050505050565b600061016061ffff8e168352602060018060a01b038e16818501528160408501528c518083860152600092505b8083101561062a578d830182015185840161018001529181019161060b565b61018092506000838287010152601f19601f82011685019150508b60608501528a60808501528960a085015261066660c085018a61ffff169052565b6001600160a01b03881660e08501526001600160a01b038716610100850152818482030161012085015261069c8282018761057f565b925050506106b061014083018460ff169052565b9c9b50505050505050505050505056fea26469706673582212209e21768ec15b161a2c0cc24e9dc6583cf310eb351267bae00c13afde8e7687af64736f6c63430008130033";

type AttackForwardIntegrationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackForwardIntegrationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackForwardIntegration__factory extends ContractFactory {
  constructor(...args: AttackForwardIntegrationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initWormhole: PromiseOrValue<string>,
    initWormholeRelayer: PromiseOrValue<string>,
    chainId: PromiseOrValue<BigNumberish>,
    initAttackerReward: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AttackForwardIntegration> {
    return super.deploy(
      initWormhole,
      initWormholeRelayer,
      chainId,
      initAttackerReward,
      overrides || {}
    ) as Promise<AttackForwardIntegration>;
  }
  override getDeployTransaction(
    initWormhole: PromiseOrValue<string>,
    initWormholeRelayer: PromiseOrValue<string>,
    chainId: PromiseOrValue<BigNumberish>,
    initAttackerReward: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initWormhole,
      initWormholeRelayer,
      chainId,
      initAttackerReward,
      overrides || {}
    );
  }
  override attach(address: string): AttackForwardIntegration {
    return super.attach(address) as AttackForwardIntegration;
  }
  override connect(signer: Signer): AttackForwardIntegration__factory {
    return super.connect(signer) as AttackForwardIntegration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackForwardIntegrationInterface {
    return new utils.Interface(_abi) as AttackForwardIntegrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackForwardIntegration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AttackForwardIntegration;
  }
}