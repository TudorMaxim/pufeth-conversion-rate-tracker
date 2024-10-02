import express, { Express, Request, Response } from "express";
import querySmartContract from "./utils/querySmartContract";
import config from './environment';

const app: Express = express();
const port =config.port || 3000;

app.get("/api/pufeth/conversion/", (req: Request, res: Response) => {
    querySmartContract()
        .then((data) => res.json(data))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Something went wrong.'});
        });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
