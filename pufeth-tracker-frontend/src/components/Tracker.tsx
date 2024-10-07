import React from "react";
import { LineChart } from "@mui/x-charts";
import { CircularProgress } from "@mui/material";
import { useConversionRates, useTrackerSize } from "../hooks";
import styles from './styles/tracker.module.css';

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
            <h4> 
                Current Conversion Rate:
                <span>{conversionRates[conversionRates.length - 1].conversionRate}</span>
            </h4>
            <h4> Evolution over time:</h4>
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