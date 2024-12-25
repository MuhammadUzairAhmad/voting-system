import { ethers } from "ethers";
import axios from "axios";
import { formatEther, parseEther } from "viem";
import { erc20Abi, abi } from "./contractAbis";
import { config } from "@/config";
import { toast } from "react-toastify";

import {
  simulateContract,
  writeContract,
  waitForTransactionReceipt,
  readContract,
} from "@wagmi/core";

// export const decimalPoint = 18;
export const tokenAddress = "0xce9ea8BccB55cCEDf9d005F8714840B3CED192B3";
export const contractAddress = "0x50A8eC9cba3E0CF1ca455Fa0C0B89c2B8C571463";
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
  // console.log("contractAddresscontractAddresscontractAddresscontractAddress",contractAddress)
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
      });
      return result;
    }
  } catch (error) {
    console.error("Error in readContractHelper:", error);
    throw error;
  }
};
export const voteAmount=async()=>{
  const voteAmount=await readContractHelper("stakeAmount");
  return voteAmount
}
// Helper function for token approval
const approveToken = async (value, tokenAddress, address, config) => {
  try {
    const provider = new ethers.JsonRpcProvider("https://rpc.testnet.fantom.network/");
    const contract = new ethers.Contract(tokenAddress, erc20Abi, provider);
    const allowance = await contract.allowance(address, contractAddress);
    const allowanceInt = Number(formatEther(allowance.toString())).toLocaleString("fullwide", { useGrouping: false });

    if (allowanceInt < Number(value)) {
      const { request } = await simulateContract(config, {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "approve",
        args: [contractAddress, parseEther(Number(value).toString())],
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

