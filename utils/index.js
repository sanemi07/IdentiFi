import { ethers } from "ethers";
import IdentIfI from "./IdentiFi.json"
export const contract=async()=>{
    const provider=await ethers.provider.Web3Provider(window.ethereum);
    const {ethereum}=window;
    if(ethereum){
        const signer=provider.getSigner();
        const ContractReader=new ethers.Contract("0xa0BC4bD87F9b15Cb036B79dE08c3A7D4cEBC1939",
        IdentIfI.abi,signer);
        return ContractReader;
    }
}