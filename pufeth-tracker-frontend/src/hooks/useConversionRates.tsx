import React from 'react';
import { PufETHData } from '../types';
import socket, { socketEvents } from "../utils/socket";

const useConversionRates = (): PufETHData[] => {
    const [conversionRates, setConversionRates] = React.useState<Array<PufETHData>>([]);
    
    React.useEffect(() => {
        socket.on(socketEvents.CONVERSION_RATE, (data: PufETHData) => {
            setConversionRates((prev) => [...prev, data]);
        });
        socket.on(socketEvents.CONVERSION_RATE_BATCH, (data: PufETHData[]) => {
            setConversionRates(data);
        });
        return () => {
            socket.off(socketEvents.CONVERSION_RATE);
            socket.off(socketEvents.CONVERSION_RATE_BATCH);
        };
    }, []);

    return conversionRates;
};

export default useConversionRates;