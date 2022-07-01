require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { PRIVATE_KEY1, PRIVATE_KEY2, BLAST_API_KEY, ROPSTEN_ALCHEMY_API_KEY, RINKEBY_ALCHEMY_API_KEY, MUMBAI_RPC_API_KEY, GOERLI_ALCHEMY_API_KEY, MUMBAI_ALCHEMY_API_KEY, INFURA_API_KEY } = process.env

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_ALCHEMY_API_KEY}`,
      //url: `https://eth.getblock.io/ropsten/?api_key=c8e062a2-cb28-4695-9b92-2bdda1202835`,
      //url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY1]
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${GOERLI_ALCHEMY_API_KEY}`,
      //url: ``,
      accounts: [PRIVATE_KEY1]
    },
    rinkeby: {
      //url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_ALCHEMY_API_KEY}`,
      //url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      url: `https://eth-rinkeby.blastapi.io/45b75e5c-bd21-4b10-8e72-381013ae52fb`,
      accounts: [PRIVATE_KEY1]
    },
    polygon_mumbai: {
      //url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_ALCHEMY_API_KEY}`,
      //url: `https://rpc-mumbai.maticvigil.com/v1/${MUMBAI_RPC_API_KEY}`,
      //url: `https://matic.getblock.io/testnet/?api_key=c8e062a2-cb28-4695-9b92-2bdda1202835`,
      url: `https://polygon-testnet.blastapi.io/45b75e5c-bd21-4b10-8e72-381013ae52fb`,
      accounts: [PRIVATE_KEY1]
    },
    gnosis: {
      url: `https://gnosis-mainnet.blastapi.io/45b75e5c-bd21-4b10-8e72-381013ae52fb`,
      accounts: [PRIVATE_KEY1]
    },
    kovan: {
      url: `https://eth-kovan.blastapi.io/45b75e5c-bd21-4b10-8e72-381013ae52fb`,
      accounts: [PRIVATE_KEY1]
    }
  }
};