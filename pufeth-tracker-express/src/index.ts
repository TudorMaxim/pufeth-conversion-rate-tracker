import express, { Request, Response } from 'express';
import cron from 'node-cron';
import http from 'http';
import storage from './storage';
import { Server } from 'socket.io';
import { querySmartContract, socketEvents } from './utils';
import config from './environment';

const port = config.port || 8000;
const app = express();
const server = http.createServer(app);
const socket = new Server(server, {
    cors: {
        origin: config.clientURL,
        methods: ['GET'],
    },
});

app.get('/api/pufeth/conversion/', (req: Request, res: Response) => {
    querySmartContract()
        .then((data) => res.json(data))
        .catch(() => res.status(400).json({ error: 'Something went wrong.' }));
});

socket.on('connection', async (socket) => {
    try {
        const data = await storage.getAll();
        socket.emit(socketEvents.CONVERSION_RATE_BATCH, data);
    } catch (err) {
        console.log('A redis error occured: ', err);
    }
});

// Task that runs every minute
cron.schedule('* * * * *', async () => {
    try {
        const data = await querySmartContract();
        storage.push(data);
        socket.emit(socketEvents.CONVERSION_RATE, data);
        const time = new Date(data.timestamp).toLocaleString();
        console.log(`[${time}] Current conversion rate is: ${data.conversionRate}`);
    } catch (err) {
        console.log('An error occured: ', err);
    }
});

server.listen(port, () => {
    console.log(`[server]: Server is running.`);
});

export default server;