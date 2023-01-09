import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
  },
  paths: {
    artifacts: "./client/src/artifacts"
  },
  networks: {
    goerli: {
      url: `${process.env.ALCHEMY_GOERLI_URL}`,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    } 
  }
  // mocha: {
  //   timeout: 100000000
  // },
};

export default config;
