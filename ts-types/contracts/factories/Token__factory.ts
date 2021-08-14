/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600f60808190526e436f727465736a6120546f6b656e7360881b60a090815261003091600191906100e6565b5060408051808201909152600880825267434f525445534a4160c01b6020909201918252610060916002916100e6565b50620f424060035534801561007457600080fd5b5061007e33610096565b600354336000908152600460205260409020556101ba565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546100f29061017f565b90600052602060002090601f016020900481019282610114576000855561015a565b82601f1061012d57805160ff191683800117855561015a565b8280016001018555821561015a579182015b8281111561015a57825182559160200191906001019061013f565b5061016692915061016a565b5090565b5b80821115610166576000815560010161016b565b600181811c9082168061019357607f821691505b602082108114156101b457634e487b7160e01b600052602260045260246000fd5b50919050565b610754806101c96000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638da5cb5b1161007657806397304ced1161005b57806397304ced1461014d578063a9059cbb14610160578063f2fde38b1461017357600080fd5b80638da5cb5b1461011d57806395d89b411461014557600080fd5b806306fdde03146100a857806318160ddd146100c657806370a08231146100dd578063715018a614610113575b600080fd5b6100b0610186565b6040516100bd91906105fb565b60405180910390f35b6100cf60035481565b6040519081526020016100bd565b6100cf6100eb366004610599565b73ffffffffffffffffffffffffffffffffffffffff1660009081526004602052604090205490565b61011b610214565b005b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bd565b6100b061028c565b61011b61015b3660046105e3565b610299565b61011b61016e3660046105ba565b61033e565b61011b610181366004610599565b6103ff565b600180546101939061069b565b80601f01602080910402602001604051908101604052809291908181526020018280546101bf9061069b565b801561020c5780601f106101e15761010080835404028352916020019161020c565b820191906000526020600020905b8154815290600101906020018083116101ef57829003601f168201915b505050505081565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61028a60006104fb565b565b600280546101939061069b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610277565b8060036000828254610312919061066c565b9091555050336000908152600460205260408120805483929061033690849061066c565b909155505050565b3360009081526004602052604090205481111561039d5760405162461bcd60e51b815260206004820152601160248201527f4e6f7420656e6f75676820746f6b656e730000000000000000000000000000006044820152606401610277565b33600090815260046020526040812080548392906103bc908490610684565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260046020526040812080548392906103f690849061066c565b90915550505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104665760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610277565b73ffffffffffffffffffffffffffffffffffffffff81166104ef5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610277565b6104f8816104fb565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461059457600080fd5b919050565b6000602082840312156105aa578081fd5b6105b382610570565b9392505050565b600080604083850312156105cc578081fd5b6105d583610570565b946020939093013593505050565b6000602082840312156105f4578081fd5b5035919050565b6000602080835283518082850152825b818110156106275785810183015185820160400152820161060b565b818111156106385783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000821982111561067f5761067f6106ef565b500190565b600082821015610696576106966106ef565b500390565b600181811c908216806106af57607f821691505b602082108114156106e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122089460a6e34c0d1c49835cf46bd7524542b9eba58330c54c10c0b0aff1e59da4464736f6c63430008040033";

export class Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
