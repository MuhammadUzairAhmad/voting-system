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
export const tokenAddress = "0xEb211892B15f3Fb6D69a1f2e9E6ca1DdD6365715";
export const contractAddress = "0x50FB25e536baCd112d15719148F88e4893cD49bB";
export const zeroAddress = "0x0000000000000000000000000000000000000000";

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

export const readContractHelper = async (functionName, args) => {
  try {
    if (args) {
      const result = await readContract(config, {
        abi,
        address: contractAddress,
        functionName: functionName,
        args,
      });
      return result;
    } else {
      const result = await readContract(config, {
        abi,
        address: contractAddress,
        functionName: functionName,
        args,
      });
      return result;
    }
  } catch (error) {
    console.error("Error in readContractHelper:", error);
    throw error;
  }
};

// Helper function for token approval
const approveToken = async (value, tokenAddress, address, config) => {
  try {
    const contract = tokenContract(tokenAddress);
    const allowance = await contract.allowance(address, contractAddress);
    const allowanceInt = Number(formatEther(allowance.toString())).toLocaleString("fullwide", { useGrouping: false });

    if (allowanceInt < Number(value)) {
      const { request } = await simulateContract(config, {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "approve",
        args: [contractAddress, parseEther(value)],
      });

      const hash = await writeContract(config, request);
      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: hash,
      });

      toast.success("Token Approval Successful");
    }
  } catch (error) {
    console.error("Token approval failed:", error);
    toast.error("Token Approval Failed");
  }
};

export default approveToken;

