import dotenv from "dotenv";

dotenv.config()

const environment = {
    port: process.env.PORT,
    contractAddress: process.env.CONTRACT_ADDRESS,
    providerURL: process.env.PROVIDER_URL,

};

export default environment;