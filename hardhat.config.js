require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const {
    PRIVATE_KEY1,
    PRIVATE_KEY2,
    PRIVATE_KEY3,
    BLAST_API_KEY,
    ROPSTEN_ALCHEMY_API_KEY,
    GOERLI_ALCHEMY_API_KEY,
} = process.env

module.exports = {
    solidity: "0.8.4",
    defaultNetwork: "ropsten",
    networks: {
        hardhat: {},
        ropsten: {
            url: `https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_ALCHEMY_API_KEY}`,
            accounts: [PRIVATE_KEY3]
        },
        rinkeby: {
            url: `https://eth-rinkeby.blastapi.io/${BLAST_API_KEY}`,
            accounts: [PRIVATE_KEY3]
        },
        kovan: {
            url: `https://eth-kovan.blastapi.io/${BLAST_API_KEY}`,
            accounts: [PRIVATE_KEY3]
        },
        goerli: {
            url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_ALCHEMY_API_KEY}`,
            accounts: [PRIVATE_KEY3]
        },
        polygon_mumbai: {
            url: `https://polygon-testnet.blastapi.io/${BLAST_API_KEY}`,
            accounts: [PRIVATE_KEY3]
        },
        gnosis: {
            url: `https://gnosis-mainnet.blastapi.io/${BLAST_API_KEY}`,
            accounts: [PRIVATE_KEY3]
        }
    }
};