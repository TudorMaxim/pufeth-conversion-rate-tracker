import { createClient } from 'redis';
import environment from '../environment';
import { PufETHData } from '../utils/querySmartContract';

const REDIS_KEY = 'conversionRates';

const redisClient = createClient({
    url: environment.redisURL,
});

redisClient.connect();

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

const getAll = async (): Promise<PufETHData[]> => {
    const data = await redisClient.lRange(REDIS_KEY, 0, -1);
    return data.map((entry) => JSON.parse(entry) as PufETHData);
};

const push = (data: PufETHData) => {
    redisClient.lPush(REDIS_KEY, JSON.stringify(data));
};

const storage = {
    getAll,
    push,
};

export default storage;
