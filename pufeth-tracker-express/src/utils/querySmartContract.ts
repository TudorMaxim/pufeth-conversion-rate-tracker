import { Web3 } from 'web3';
import Big from 'big.js';
import contractABI from './contractABI.json';
import config from '../environment';

const web3 = new Web3(config.providerURL);
const contract = new web3.eth.Contract(contractABI, config.contractAddress);

export type PufETHData = {
    conversionRate: number;
    totalAssets: number;
    totalSupply: number;
    timestamp: number;
};

const querySmartContract = async (): Promise<PufETHData> => {
    const assets = (await contract.methods.totalAssets().call()) as string;
    const supply = (await contract.methods.totalSupply().call()) as string;
    const totalAssets = new Big(assets);
    const totalSupply = new Big(supply);
    const conversionRate = totalAssets.div(totalSupply);
    return {
        conversionRate: Number(conversionRate.toString()),
        totalAssets: Number(assets),
        totalSupply: Number(supply),
        timestamp: Date.now(),
    } as PufETHData;
};

export default querySmartContract;
