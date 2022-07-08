const {PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3} = process.env

const {
    CONTRACT_ADDRESS_V2_ROPSTEN,
    CONTRACT_ADDRESS_V2_RINKEBY,
    CONTRACT_ADDRESS_V2_KOVAN,
    CONTRACT_ADDRESS_V2_GOERLI,
    CONTRACT_ADDRESS_V2_POLYGON_MUMBAI,
    CONTRACT_ADDRESS_V2_GNOSIS
} = process.env

const {ROPSTEN_ALCHEMY_API_KEY, GOERLI_ALCHEMY_API_KEY, BLAST_API_KEY} = process.env

const contract = require("../artifacts/contracts/megalisV2.sol/megalisV2.json")

// Provider
const provider = new ethers.providers.JsonRpcProvider(
    //`https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_ALCHEMY_API_KEY}`, "ropsten"
    `https://eth-rinkeby.blastapi.io/${BLAST_API_KEY}`, "rinkeby"
    //`https://eth-kovan.blastapi.io/${BLAST_API_KEY}`, "kovan"
    //`https://eth-goerli.g.alchemy.com/v2/${GOERLI_ALCHEMY_API_KEY}`, "goerli"
    //`https://polygon-testnet.blastapi.io/${BLAST_API_KEY}`
    //`https://gnosis-mainnet.blastapi.io/${BLAST_API_KEY}`
)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY3, provider)

// Contract
const megalisV2Contract = new ethers.Contract(
    //CONTRACT_ADDRESS_V2_ROPSTEN,
    CONTRACT_ADDRESS_V2_RINKEBY,
    //CONTRACT_ADDRESS_V2_KOVAN,
    //CONTRACT_ADDRESS_V2_GOERLI,
    //CONTRACT_ADDRESS_V2_POLYGON_MUMBAI,
    //CONTRACT_ADDRESS_V2_GNOSIS,
    contract.abi,
    signer
)

async function main() {
    /*
    console.log("Initialisation d'une publication : ");
    const tx = await megalisV2Contract.publish("Siren1", "http://url1.com");
    console.log("Mining...", tx.hash);
    await tx.wait();
    console.log("Mined -- ", tx.hash);

    console.log("Initialisation d'une publication : ");
    const tx2 = await megalisV2Contract.publish("Siren2", "https://url2.com");
    console.log("Mining...", tx2.hash);
    await tx2.wait();
    console.log("Mined -- ", tx2.hash);

    console.log("Initialisation d'une publication : ");
    const tx3 = await megalisV2Contract.publish("Siren1", "https://url3.com");
    console.log("Mining...", tx3.hash);
    await tx3.wait();
    console.log("Mined -- ", tx3.hash);

    console.log("Initialisation d'une publication : ");
    const tx4 = await megalisV2Contract.publish("Siren1", "https://url4.com");
    console.log("Mining...", tx4.hash);
    await tx4.wait();
    console.log("Mined -- ", tx4.hash);
    */

    /*
    console.log("Liste des adresses ayant publié quelque chose : ");
    const sirens = await megalisV2Contract.getAllSirens();
    console.table(sirens);

    console.log("Liste des publications de siren1 : ");
    const sirenPublications = await megalisV2Contract.getSirenPublications("Siren1");
    console.table(sirenPublications);

    console.log("Liste des publications de siren2 : ");
    const sirenPublications2 = await megalisV2Contract.getSirenPublications("Siren2");
    console.table(sirenPublications2);
    */

}

main()