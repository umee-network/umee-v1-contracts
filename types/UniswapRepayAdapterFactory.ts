/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapRepayAdapter } from "./UniswapRepayAdapter";

export class UniswapRepayAdapterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressesProvider: string,
    uniswapRouter: string,
    wethAddress: string,
    overrides?: Overrides
  ): Promise<UniswapRepayAdapter> {
    return super.deploy(
      addressesProvider,
      uniswapRouter,
      wethAddress,
      overrides || {}
    ) as Promise<UniswapRepayAdapter>;
  }
  getDeployTransaction(
    addressesProvider: string,
    uniswapRouter: string,
    wethAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressesProvider,
      uniswapRouter,
      wethAddress,
      overrides || {}
    );
  }
  attach(address: string): UniswapRepayAdapter {
    return super.attach(address) as UniswapRepayAdapter;
  }
  connect(signer: Signer): UniswapRepayAdapterFactory {
    return super.connect(signer) as UniswapRepayAdapterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapRepayAdapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapRepayAdapter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "addressesProvider",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router02",
        name: "uniswapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethAddress",
        type: "address",
      },
    ],
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fromAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "Swapped",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLASHLOAN_PREMIUM_TOTAL",
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
    inputs: [],
    name: "LENDING_POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SLIPPAGE_PERCENT",
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
    inputs: [],
    name: "ORACLE",
    outputs: [
      {
        internalType: "contract IPriceOracleGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNISWAP_ROUTER",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USD_ADDRESS",
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
    name: "WETH_ADDRESS",
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
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "premiums",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtRepayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtRateMode",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IBaseUniswapAdapter.PermitSignature",
        name: "permitSignature",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "useEthPath",
        type: "bool",
      },
    ],
    name: "swapAndRepay",
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
  "0x6101206040523480156200001257600080fd5b5060405162003618380380620036188339810160408190526200003591620001fd565b82828282806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009057600080fd5b505afa158015620000a5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cb9190620001d7565b60601b6001600160601b03191660a052506000620000e8620001d3565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350826001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200016c57600080fd5b505afa15801562000181573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a79190620001d7565b6001600160601b0319606091821b811660e05292811b8316610100521b1660c052506200026992505050565b3390565b600060208284031215620001e9578081fd5b8151620001f68162000250565b9392505050565b60008060006060848603121562000212578182fd5b83516200021f8162000250565b6020850151909350620002328162000250565b6040850151909250620002458162000250565b809150509250925092565b6001600160a01b03811681146200026657600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6132d4620003446000398061060152806110d452806111c852806118475280611acf5280611b045280611c9852806121b552806122a65250806103a2528061244752508061034f5280610fae5280610feb528061105552806117345280611b82528061208f52806120cc528061213652508061045f528061057c5280610817528061084c52806108885280610aa75280610adc5280610b9a5280610db05280610ddb52806115d2528061199552508061037352506132d46000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063920f5c8411610097578063cdf58cd611610066578063cdf58cd6146101c8578063d8264920146101db578063e6813563146101e3578063f2fde38b146101f6576100ff565b8063920f5c84146101745780639d1211bf14610194578063b4dcfc771461019c578063baf7fa99146101a4576100ff565b806332e4b286116100d357806332e4b2861461015457806338013f021461015c578063715018a6146101645780638da5cb5b1461016c576100ff565b8062ae3bf814610104578063040141e5146101195780630542975c14610137578063074b2e431461013f575b600080fd5b61011761011236600461285d565b610209565b005b61012161034d565b60405161012e9190612d5d565b60405180910390f35b610121610371565b610147610395565b60405161012e9190613162565b61014761039a565b6101216103a0565b6101176103c4565b610121610443565b610187610182366004612987565b610452565b60405161012e9190612e80565b610121610562565b61012161057a565b6101b76101b2366004612ca1565b61059e565b60405161012e9594939291906131c0565b6101b76101d6366004612ca1565b6105e4565b6101216105ff565b6101176101f1366004612902565b610623565b61011761020436600461285d565b610924565b6102116109da565b6000546001600160a01b039081169116146102475760405162461bcd60e51b815260040161023e9061302b565b60405180910390fd5b806001600160a01b031663a9059cbb61025e610443565b6040516370a0823160e01b81526001600160a01b038516906370a082319061028a903090600401612d5d565b60206040518083038186803b1580156102a257600080fd5b505afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190612c89565b6040518363ffffffff1660e01b81526004016102f7929190612e19565b602060405180830381600087803b15801561031157600080fd5b505af1158015610325573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103499190612b19565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600981565b610bb881565b7f000000000000000000000000000000000000000000000000000000000000000081565b6103cc6109da565b6000546001600160a01b039081169116146103f95760405162461bcd60e51b815260040161023e9061302b565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461049c5760405162461bcd60e51b815260040161023e90612ebe565b6104a461268b565b6104e384848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109de92505050565b905061055181600001518c8c60008181106104fa57fe5b905060200201602081019061050f919061285d565b8b8b600081811061051c57fe5b90506020020135846020015185604001518a8d8d600081811061053b57fe5b9050602002013588606001518960800151610a85565b5060019a9950505050505050505050565b73251f24dd29d446931f23c827286467b01a1cbd0c81565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060008060606105ae6126c9565b6105b988888b610e22565b8051602082015160408301516060840151608090940151929d919c509a509198509650945050505050565b60008060008060606105f46126c9565b6105b988888b6113d9565b7f000000000000000000000000000000000000000000000000000000000000000081565b61062b6126f8565b610634886115b3565b905061063e6126f8565b610647886115b3565b90506000600186600281111561065957fe5b600281111561066457fe5b146106745781610120015161067b565b8161010001515b90506000816001600160a01b03166370a08231336040518263ffffffff1660e01b81526004016106ab9190612d5d565b60206040518083038186803b1580156106c357600080fd5b505afa1580156106d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fb9190612c89565b905060008189111561070d578161070f565b885b90508a6001600160a01b03168c6001600160a01b0316146107ec57898982101561074a576107478a610741838561165e565b90611698565b90505b60606107588e8e858b6116da565b9050818160008151811061076857fe5b6020026020010151111561078e5760405162461bcd60e51b815260040161023e90613060565b6107c38e8860e0015133846000815181106107a557fe5b60200260200101518d8036038101906107be9190612b35565b6118dc565b6107e48e8e836000815181106107d557fe5b6020026020010151868c611a28565b505050610808565b6108088c8660e0015133848b8036038101906107be9190612b35565b61083d6001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000006000611dbc565b6108716001600160a01b038c167f000000000000000000000000000000000000000000000000000000000000000083611dbc565b60405163573ade8160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063573ade81906108c3908e9085908d903390600401612e55565b602060405180830381600087803b1580156108dd57600080fd5b505af11580156108f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109159190612c89565b50505050505050505050505050565b61092c6109da565b6000546001600160a01b039081169116146109595760405162461bcd60e51b815260040161023e9061302b565b6001600160a01b03811661097f5760405162461bcd60e51b815260040161023e90612ef5565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6109e661268b565b60008060008060008060008060008a806020019051810190610a089190612879565b9850985098509850985098509850985098506040518060a001604052808a6001600160a01b031681526020018981526020018881526020016040518060a001604052808981526020018881526020018760ff1681526020018681526020018581525081526020018215158152509950505050505050505050919050565b610a8d6126f8565b610a968a6115b3565b9050610acd6001600160a01b038a167f00000000000000000000000000000000000000000000000000000000000000006000611dbc565b610b016001600160a01b038a167f00000000000000000000000000000000000000000000000000000000000000008a611dbc565b6040516370a0823160e01b81526000906001600160a01b038b16906370a0823190610b30903090600401612d5d565b60206040518083038186803b158015610b4857600080fd5b505afa158015610b5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b809190612c89565b60405163573ade8160e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063573ade8190610bd5908d908d908c908c90600401612e55565b602060405180830381600087803b158015610bef57600080fd5b505af1158015610c03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c279190612c89565b506040516370a0823160e01b8152610caf906001600160a01b038c16906370a0823190610c58903090600401612d5d565b60206040518083038186803b158015610c7057600080fd5b505afa158015610c84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca89190612c89565b8290611ebb565b9050896001600160a01b03168b6001600160a01b031614610d85578789821015610ce457610ce18a610741838561165e565b90505b6000610cf08388611efd565b90506060610d008e8e84896116da565b90508281600081518110610d1057fe5b60200260200101511115610d365760405162461bcd60e51b815260040161023e90613060565b610d5b8e8660e001518b84600081518110610d4d57fe5b60200260200101518b6118dc565b610d7c8e8e83600081518110610d6d57fe5b6020026020010151858a611a28565b50505050610da1565b60e0820151610da1908c9088610d9b858a611efd565b886118dc565b610dd66001600160a01b038b167f00000000000000000000000000000000000000000000000000000000000000006000611dbc565b610e157f0000000000000000000000000000000000000000000000000000000000000000610e048b88611efd565b6001600160a01b038d169190611dbc565b5050505050505050505050565b610e2a6126c9565b6000610e47610e4061271061074186600961165e565b8490611ebb565b9050836001600160a01b0316856001600160a01b03161415610f13576000610e6e86611f22565b60408051600180825281830190925291925060609190602080830190803683370190505090508681600081518110610ea257fe5b6001600160a01b039092166020928302919091018201526040805160a08101909152848152908101610ee08761074187670de0b6b3a764000061165e565b8152602001610ef0898886611f9e565b8152602001610f00898686611f9e565b81526020018281525093505050506113d2565b60408051600280825260608083018452926020830190803683370190505090508581600081518110610f4157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508481600181518110610f6f57fe5b6001600160a01b0392909216602092830291909101820152604080516003808252608082019092526060928392839291820183803683370190505090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316896001600160a01b03161415801561102057507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b031614155b1561118c57888160008151811061103357fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061108157fe5b60200260200101906001600160a01b031690816001600160a01b03168152505087816002815181106110af57fe5b6001600160a01b03928316602091820292909201015260405163d06ca61f60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063d06ca61f9061110d908890859060040161316b565b60006040518083038186803b15801561112557600080fd5b505afa92505050801561115a57506040513d6000823e601f3d908101601f191682016040526111579190810190612a84565b60015b61118457604080516003808252608082019092529060208201606080368337019050509150611187565b91505b6111ae565b6040805160038082526080820190925290602082016060803683370190505091505b60405163d06ca61f60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d06ca61f906111ff908990899060040161316b565b60006040518083038186803b15801561121757600080fd5b505afa92505050801561124c57506040513d6000823e601f3d908101601f191682016040526112499190810190612a84565b60015b61128c5760408051600280825260608201835290916020830190803683370190505093508260028151811061127d57fe5b602002602001015190506112f2565b8094508460018151811061129c57fe5b6020026020010151846002815181106112b157fe5b6020026020010151116112d857846001815181106112cb57fe5b60200260200101516112ee565b836002815181106112e557fe5b60200260200101515b9150505b60006112fd8b611f22565b9050600061130a8b611f22565b9050600061133f61131f85600a86900a61165e565b610741600a85900a6113398d670de0b6b3a764000061165e565b9061165e565b90506040518060a001604052808581526020018281526020016113638f8e87611f9e565b81526020016113738e8786611f9e565b815260200185156113a6578860018151811061138b57fe5b6020026020010151861461139f57866113a1565b895b6113c4565b60408051600280825260608201835290916020830190803683375050505b905299505050505050505050505b9392505050565b6113e16126c9565b826001600160a01b0316846001600160a01b031614156114b757600061141861141161271061074186600961165e565b8490611efd565b9050600061142586611f22565b6040805160018082528183019092529192506060919060208083019080368337019050509050868160008151811061145957fe5b6001600160a01b039092166020928302919091018201526040805160a081019091528481529081016114978561074189670de0b6b3a764000061165e565b81526020016114a7898686611f9e565b8152602001610f00898886611f9e565b6060806114c5868686611fed565b91509150600061151f6114fc6127106107416009876000815181106114e657fe5b602002602001015161165e90919063ffffffff16565b8460008151811061150957fe5b6020026020010151611efd90919063ffffffff16565b9050600061152c88611f22565b9050600061153988611f22565b9050600061156861154e85600a85900a61165e565b610741600a86900a6113398c670de0b6b3a764000061165e565b90506040518060a0016040528085815260200182815260200161158c8c8787611f9e565b815260200161159c8b8b86611f9e565b815260200195909552509298975050505050505050565b6115bb6126f8565b6040516335ea6a7560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335ea6a7590611607908590600401612d5d565b6101806040518083038186803b15801561162057600080fd5b505afa158015611634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116589190612b8e565b92915050565b60008261166d57506000611658565b8282028284828161167a57fe5b04146113d25760405162461bcd60e51b815260040161023e90612fea565b60006113d283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506123aa565b60608082156117b357604080516003808252608082019092529060208201606080368337019050509050858160008151811061171257fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061176057fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160028151811061178e57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050611830565b604080516002808252606082018352909160208301908036833701905050905085816000815181106117e157fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061180f57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b6040516307c0329d60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631f00ca749061187e908790859060040161316b565b60006040518083038186803b15801561189657600080fd5b505afa1580156118aa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118d29190810190612a84565b9695505050505050565b6118e5816123e1565b1561196957836001600160a01b031663d505accf8430846000015185602001518660400151876060015188608001516040518863ffffffff1660e01b81526004016119369796959493929190612dd8565b600060405180830381600087803b15801561195057600080fd5b505af1158015611964573d6000803e3d6000fd5b505050505b61197e6001600160a01b038516843085612406565b604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906369328dec906119ce90889086903090600401612e32565b602060405180830381600087803b1580156119e857600080fd5b505af11580156119fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a209190612c89565b505050505050565b600080611a3487611f22565b90506000611a4187611f22565b90506000611a4e8961242d565b90506000611a5b8961242d565b90506000611a9f611a70612710610bb8611efd565b611a99611a8186600a89900a61165e565b610741611a9287600a8c900a61165e565b8d9061165e565b906124cc565b9050808910611ac05760405162461bcd60e51b815260040161023e90612fa7565b611af56001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000006000611dbc565b611b296001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000008b611dbc565b60608715611c01576040805160038082526080820190925290602082016060803683370190505090508b81600081518110611b6057fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110611bae57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508a81600281518110611bdc57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050611c7e565b60408051600280825260608201835290916020830190803683370190505090508b81600081518110611c2f57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508a81600181518110611c5d57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b604051634401edf760e11b81526060906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638803dbee90611cd5908d908f90879030904290600401613184565b600060405180830381600087803b158015611cef57600080fd5b505af1158015611d03573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611d2b9190810190612a84565b90507fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb8d8d83600081518110611d5d57fe5b602002602001015184600186510381518110611d7557fe5b6020026020010151604051611d8d9493929190612daf565b60405180910390a180600081518110611da257fe5b602002602001015197505050505050505095945050505050565b801580611e445750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90611df29030908690600401612d71565b60206040518083038186803b158015611e0a57600080fd5b505afa158015611e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e429190612c89565b155b611e605760405162461bcd60e51b815260040161023e906130d5565b611eb68363095ea7b360e01b8484604051602401611e7f929190612e19565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261253e565b505050565b60006113d283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612623565b6000828201838110156113d25760405162461bcd60e51b815260040161023e90612f3b565b6000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015611f5d57600080fd5b505afa158015611f71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f959190612ce2565b60ff1692915050565b600080611fbe73251f24dd29d446931f23c827286467b01a1cbd0c61242d565b90506000611fcb8661242d565b90506118d2670de0b6b3a764000061074184611339600a89900a838b8861165e565b604080516002808252606082810190935282918291816020016020820280368337019050509050858160008151811061202257fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061205057fe5b6001600160a01b0392909216602092830291909101820152604080516003808252608082019092526060928392839291820183803683370190505090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316896001600160a01b03161415801561210157507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b031614155b1561226d57888160008151811061211457fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061216257fe5b60200260200101906001600160a01b031690816001600160a01b031681525050878160028151811061219057fe5b6001600160a01b0392831660209182029290920101526040516307c0329d60e21b81527f000000000000000000000000000000000000000000000000000000000000000090911690631f00ca74906121ee908a90859060040161316b565b60006040518083038186803b15801561220657600080fd5b505afa92505050801561223b57506040513d6000823e601f3d908101601f191682016040526122389190810190612a84565b60015b61226557604080516003808252608082019092529060208201606080368337019050509150612268565b91505b61228f565b6040805160038082526080820190925290602082016060803683370190505091505b6040516307c0329d60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631f00ca74906122dd908a90889060040161316b565b60006040518083038186803b1580156122f557600080fd5b505afa92505050801561232a57506040513d6000823e601f3d908101601f191682016040526123279190810190612a84565b60015b61233b5790945092506123a2915050565b8093508360008151811061234b57fe5b60200260200101518360008151811061236057fe5b602002602001015110801561238a57508260008151811061237d57fe5b6020026020010151600014155b612395578385612398565b82825b9650965050505050505b935093915050565b600081836123cb5760405162461bcd60e51b815260040161023e9190612e8b565b5060008385816123d757fe5b0495945050505050565b6000816040015160ff1682602001511480156123ff57506020820151155b1592915050565b612427846323b872dd60e01b858585604051602401611e7f93929190612d8b565b50505050565b60405163b3596f0760e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b3596f079061247c908590600401612d5d565b60206040518083038186803b15801561249457600080fd5b505afa1580156124a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116589190612c89565b60008215806124d9575081155b156124e657506000611658565b8161138819816124f257fe5b0483111560405180604001604052806002815260200161068760f31b8152509061252f5760405162461bcd60e51b815260040161023e9190612e8b565b50506127109102611388010490565b612550826001600160a01b031661264f565b61256c5760405162461bcd60e51b815260040161023e9061312b565b60006060836001600160a01b0316836040516125889190612d41565b6000604051808303816000865af19150503d80600081146125c5576040519150601f19603f3d011682016040523d82523d6000602084013e6125ca565b606091505b5091509150816125ec5760405162461bcd60e51b815260040161023e90612f72565b80511561242757808060200190518101906126079190612b19565b6124275760405162461bcd60e51b815260040161023e9061308b565b600081848411156126475760405162461bcd60e51b815260040161023e9190612e8b565b505050900390565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061268357508115155b949350505050565b6040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016126bc612763565b8152600060209091015290565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b60405180610180016040528061270c612791565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060200160405280600081525090565b805161165881613269565b60008083601f8401126127c0578182fd5b50813567ffffffffffffffff8111156127d7578182fd5b60208301915083602080830285010111156127f157600080fd5b9250929050565b600060208284031215612809578081fd5b61281360206131f6565b9151825250919050565b80516fffffffffffffffffffffffffffffffff8116811461165857600080fd5b805164ffffffffff8116811461165857600080fd5b80516116588161328f565b60006020828403121561286e578081fd5b81356113d281613269565b60008060008060008060008060006101208a8c031215612897578485fd5b89516128a281613269565b8099505060208a0151975060408a0151965060608a0151955060808a0151945060a08a01516128d08161328f565b8094505060c08a0151925060e08a015191506101008a01516128f181613281565b809150509295985092959850929598565b600080600080600080600087890361016081121561291e578182fd5b883561292981613269565b9750602089013561293981613269565b965060408901359550606089013594506080890135935060a0609f1982011215612961578182fd5b5060a08801915061014088013561297781613281565b8091505092959891949750929550565b600080600080600080600080600060a08a8c0312156129a4578283fd5b893567ffffffffffffffff808211156129bb578485fd5b6129c78d838e016127af565b909b50995060208c01359150808211156129df578485fd5b6129eb8d838e016127af565b909950975060408c0135915080821115612a03578485fd5b612a0f8d838e016127af565b909750955060608c01359150612a2482613269565b90935060808b01359080821115612a39578384fd5b818c0191508c601f830112612a4c578384fd5b813581811115612a5a578485fd5b8d6020828501011115612a6b578485fd5b6020830194508093505050509295985092959850929598565b60006020808385031215612a96578182fd5b825167ffffffffffffffff811115612aac578283fd5b8301601f81018513612abc578283fd5b8051612acf612aca8261321d565b6131f6565b8181528381019083850185840285018601891015612aeb578687fd5b8694505b83851015612b0d578051835260019490940193918501918501612aef565b50979650505050505050565b600060208284031215612b2a578081fd5b81516113d281613281565b600060a08284031215612b46578081fd5b612b5060a06131f6565b82358152602083013560208201526040830135612b6c8161328f565b6040820152606083810135908201526080928301359281019290925250919050565b6000610180808385031215612ba1578182fd5b612baa816131f6565b9050612bb684846127f8565b8152612bc5846020850161281d565b6020820152612bd7846040850161281d565b6040820152612be9846060850161281d565b6060820152612bfb846080850161281d565b6080820152612c0d8460a0850161281d565b60a0820152612c1f8460c0850161283d565b60c0820152612c318460e085016127a4565b60e0820152610100612c45858286016127a4565b90820152610120612c58858583016127a4565b90820152610140612c6b858583016127a4565b90820152610160612c7e85858301612852565b908201529392505050565b600060208284031215612c9a578081fd5b5051919050565b600080600060608486031215612cb5578081fd5b833592506020840135612cc781613269565b91506040840135612cd781613269565b809150509250925092565b600060208284031215612cf3578081fd5b81516113d28161328f565b6000815180845260208085019450808401835b83811015612d365781516001600160a01b031687529582019590820190600101612d11565b509495945050505050565b60008251612d5381846020870161323d565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093526040830191909152909116606082015260800190565b901515815260200190565b6000602082528251806020840152612eaa81604085016020870161323d565b601f01601f19169190910160400192915050565b6020808252601b908201527f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c0000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252818101527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604082015260600190565b60208082526023908201527f6d6178416d6f756e74546f5377617020657863656564206d617820736c69707060408201526261676560e81b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601190820152700e6d8d2e0e0c2ceca40e8dede40d0d2ced607b1b604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b6020808252601f908201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604082015260600190565b90815260200190565b6000838252604060208301526126836040830184612cfe565b600086825285602083015260a060408301526131a360a0830186612cfe565b6001600160a01b0394909416606083015250608001529392505050565b600086825285602083015284604083015283606083015260a060808301526131eb60a0830184612cfe565b979650505050505050565b60405181810167ffffffffffffffff8111828210171561321557600080fd5b604052919050565b600067ffffffffffffffff821115613233578081fd5b5060209081020190565b60005b83811015613258578181015183820152602001613240565b838111156124275750506000910152565b6001600160a01b038116811461327e57600080fd5b50565b801515811461327e57600080fd5b60ff8116811461327e57600080fdfea26469706673582212208e0db8dba8c4f3ea40d05cd673519f6e9c5c2d0f67b6e0a40947aa1c0ea0ea3764736f6c634300060c0033";
