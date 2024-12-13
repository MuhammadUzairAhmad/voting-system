import { ethers } from "ethers";
import axios from "axios";
import { formatEther } from "viem";
import { erc20Abi, abi } from "./contractAbis";
import { config } from "@/config";

import {
  simulateContract,
  writeContract,
  waitForTransactionReceipt,
  readContract,
} from "@wagmi/core";

// export const decimalPoint = 18;
// export const tokenAddress = "0x2523F112EFD0b4c6FD40D890fF2C82B750C046Ed";
export const contractAddress = "0x7A082F6D931860d3f8D213eD5dC5bd829a491E29";
// export const zeroAddress = "0x0000000000000000000000000000000000000000";

export const writeContractHelper = async (functionName, args) => {
  try {
    const { request } = await simulateContract(config, {
      abi: abi,
      address: contractAddress,
      functionName: functionName,
      args: args,
    });
    const hash = await writeContract(config, request);
    const transactionReceipt = await waitForTransactionReceipt(config, {
      hash: hash,
      // confirmations: 2,
    });
    return transactionReceipt;
  } catch (error) {
    console.error("Error in writeContractHelper:", error);
    throw error;
  }
};

export const readContractHelper = async (functionName) => {
  try {
    const result = await readContract(config, {
      abi,
      address: contractAddress,
      functionName: functionName,
    });
    return result;
  } catch (error) {
    console.error("Error in readContractHelper:", error);
    throw error;
  }
};
