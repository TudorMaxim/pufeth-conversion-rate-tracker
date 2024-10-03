# PufETH Conversion Rate Trancker

## Description

This project aims to track the pufETH conversion rate and display the changes over time. The code consists of a react application that interacts with a nodejs server to execute a function call every minute from an ETH smart contract.

## Setup

Clone the repository and go in the project directory.

```
$ git clone git@github.com:TudorMaxim/pufeth-conversion-rate-tracker.git
$ cd pufeth-conversion-rate-tracker
```

Install the dependencies using `npm install` and then execute `npm run start`  for both apps.

For the express app, you need to create a .env file and setup the following variables:
```
PORT=8000
CLIENT_URL=http://localhost:3000
CONTRACT_ADDRESS=0xd9a442856c234a39a81a089c06451ebaa4306a72
PROVIDER_URL=... (The provider used to query the smart contract)
REDIS_URL=... (URL to Redis for caching)
```

Similarly, for the react app set `REACT_APP_BACKEND_URL=http://localhost:8000
` in an .env file
