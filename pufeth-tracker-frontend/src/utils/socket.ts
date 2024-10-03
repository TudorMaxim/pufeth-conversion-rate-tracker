import { io } from 'socket.io-client';

export const socketEvents = Object.freeze({
    CONVERSION_RATE: 'conversionRate',
    CONVERSION_RATE_BATCH: 'conversionRateBatch',
});

const socket = io(process.env.REACT_APP_BACKEND_URL);

export default socket;
