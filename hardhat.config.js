require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { PRIVATE_KEY1, PRIVATE_KEY2 , ROPSTEN_ALCHEMY_API_KEY, RINKEBY_ALCHEMY_API_KEY, INFURA_API_KEY } = process.env

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_ALCHEMY_API_KEY}`,
      //url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY1]
      //accounts: [PRIVATE_KEY2]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_ALCHEMY_API_KEY}`,
      //url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY1],
      //accounts: [PRIVATE_KEY2]
    }
  }
};