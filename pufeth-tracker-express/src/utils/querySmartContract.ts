import { Web3 } from 'web3';
import contractABI from './contractABI.json';
import config from '../environment';

const web3 = new Web3(config.providerURL);
const contract = new web3.eth.Contract(contractABI, config.contractAddress);

export type PufETHData = {
    conversionRate: number,
    totalAssets: number,
    totalSupply: number,
    timestamp: number,
};

const querySmartContract = async (): Promise<PufETHData> => {
    const totalAssets = await contract.methods.totalAssets().call() as bigint;
    const totalSupply = await contract.methods.totalSupply().call() as bigint;
    const conversionRate = Number(totalAssets * 100000n / totalSupply) / 100000;
    return {
        conversionRate,
        totalAssets: Number(totalAssets),
        totalSupply: Number(totalSupply),
        timestamp: Date.now(),
    } as PufETHData;
}

export default querySmartContract;