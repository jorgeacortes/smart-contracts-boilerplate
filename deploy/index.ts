import { ethers, waffle } from "hardhat";
import fs from "fs";

const NETWORK_MAP = {
  "1": "mainnet",
  "3": "ropsten",
  "4": "rinkeby",
  "5": "goerli",
  "42": "kovan",
  "1337": "hardhat",
  "31337": "hardhat",
}

async function main() {

  const chainId = (await waffle.provider.getNetwork()).chainId

  console.log({chainId})
  const networkName = NETWORK_MAP[chainId]

  console.log(`Deploying to ${networkName}`)

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  console.log("Token address:", token.address);

  const info = {
    Contracts: {
      token: token.address,
    },
  };

  console.log(info)

  fs.writeFileSync(
    `${__dirname}/contracts/${networkName}.json`,
    JSON.stringify(info, null, 2)
  );

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })