import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import { 
  ALCHEMY_API_KEY,
  DEPLOYER_PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API_KEY
} from './env.json';

module.exports = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000
      }
    }
  },
  typechain: {
    outDir: 'ts-types/contracts',
    target: 'ethers-v5'
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 50,
    coinmarketcap: COINMARKETCAP_API_KEY
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    hardhat: {
      initialBaseFeePerGas: 0 //workaround for solidity-coverage
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
