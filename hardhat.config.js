require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

const RINKEBY_RPC_URL = process.env.RPC_URL || "https://eth-rinkeby";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "no-key";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "no-key";
const COINMARKETCAP_KEY = process.env.COINMARKETCAP_KEY || "no-key";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4
    },
    localhost: { //local host network
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    }
  },
  solidity: "0.8.15",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_KEY,
    token: "MATIC"
  }

};
