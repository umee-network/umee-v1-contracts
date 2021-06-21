/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ILendingPoolCollateralManagerInterface
  extends ethers.utils.Interface {
  functions: {
    "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "liquidationCall",
    values: [string, string, string, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "liquidationCall",
    data: BytesLike
  ): Result;

  events: {
    "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
    "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
    "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"
  ): EventFragment;
}

export class ILendingPoolCollateralManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILendingPoolCollateralManagerInterface;

  functions: {
    liquidationCall(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidationCall(address,address,address,uint256,bool)"(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  liquidationCall(
    collateral: string,
    principal: string,
    user: string,
    debtToCover: BigNumberish,
    receiveUToken: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidationCall(address,address,address,uint256,bool)"(
    collateral: string,
    principal: string,
    user: string,
    debtToCover: BigNumberish,
    receiveUToken: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    liquidationCall(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: string;
    }>;

    "liquidationCall(address,address,address,uint256,bool)"(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: string;
    }>;
  };

  filters: {
    LiquidationCall(
      collateral: string | null,
      principal: string | null,
      user: string | null,
      debtToCover: null,
      liquidatedCollateralAmount: null,
      liquidator: null,
      receiveUToken: null
    ): EventFilter;

    ReserveUsedAsCollateralDisabled(
      reserve: string | null,
      user: string | null
    ): EventFilter;

    ReserveUsedAsCollateralEnabled(
      reserve: string | null,
      user: string | null
    ): EventFilter;
  };

  estimateGas: {
    liquidationCall(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "liquidationCall(address,address,address,uint256,bool)"(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    liquidationCall(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidationCall(address,address,address,uint256,bool)"(
      collateral: string,
      principal: string,
      user: string,
      debtToCover: BigNumberish,
      receiveUToken: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
