import React from "react";
import { LineChart } from "@mui/x-charts";
import { Button, CircularProgress } from "@mui/material";
import { useConversionRates, useTrackerSize } from "../hooks";
import styles from './styles/tracker.module.css';

const filterConversionRates = () => {

}

const Tracker = () => {
    const conversionRates = useConversionRates();
    const trackerSize = useTrackerSize();

    if (conversionRates.length === 0) {
        return (
            <CircularProgress size={150} className={styles.loader} />
        );
    }
    return (
        <>
            <div className={styles.filters}>
                <Button variant="outlined">Every minute</Button>
                <Button variant="outlined">Every 15 minutes</Button>
                <Button variant="outlined">Every 30 minutes</Button>
                <Button variant="outlined">Every hour</Button>
            </div>
            <LineChart
                className={styles.chart}
                xAxis={[
                    {
                        scaleType: 'utc',
                        data: conversionRates.map((rate) => new Date(rate.timestamp))
                    }
                ]}
                series={[
                    {
                        data: conversionRates.map((rate) => rate.conversionRate),
                        color: '#1976d2',
                    }
                ]}
                width={trackerSize.width}
                height={trackerSize.height}
                margin={{ left: 80, right: 80, top: 40, bottom: 80 }}
            />
        </>
        
    );
};

export default Tracker;