const {PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3} = process.env

const {
    CONTRACT_ADDRESS_V1_ROPSTEN,
    CONTRACT_ADDRESS_V1_RINKEBY,
    CONTRACT_ADDRESS_V1_KOVAN,
    CONTRACT_ADDRESS_V1_GOERLI,
    CONTRACT_ADDRESS_V1_POLYGON_MUMBAI,
    CONTRACT_ADDRESS_V1_GNOSIS
} = process.env

const {ROPSTEN_ALCHEMY_API_KEY, GOERLI_ALCHEMY_API_KEY, BLAST_API_KEY} = process.env

const contract = require("../artifacts/contracts/megalisV1.sol/megalisV1.json")

// Provider
const provider = new ethers.providers.JsonRpcProvider(
    //`https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_ALCHEMY_API_KEY}`, "ropsten"
    //`https://eth-rinkeby.blastapi.io/${BLAST_API_KEY}`, "rinkeby"
    //`https://eth-kovan.blastapi.io/${BLAST_API_KEY}`, "kovan"
    //`https://eth-goerli.g.alchemy.com/v2/${GOERLI_ALCHEMY_API_KEY}`, "goerli"
    //`https://polygon-testnet.blastapi.io/${BLAST_API_KEY}`
    `https://gnosis-mainnet.blastapi.io/${BLAST_API_KEY}`
)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY3, provider)

// Contract
const megalisV1Contract = new ethers.Contract(
    //CONTRACT_ADDRESS_V1_ROPSTEN,
    //CONTRACT_ADDRESS_V1_RINKEBY,
    //CONTRACT_ADDRESS_V1_KOVAN,
    //CONTRACT_ADDRESS_V1_GOERLI,
    //CONTRACT_ADDRESS_V1_POLYGON_MUMBAI,
    CONTRACT_ADDRESS_V1_GNOSIS,
    contract.abi,
    signer
)

async function main() {
    /*
    console.log("Initialisation d'une publication : ");
    const tx = await megalisV1Contract.publish("Siren1", "http://url1.com", "HashDuDoc1");
    console.log("Mining...", tx.hash);
    await tx.wait();
    console.log("Mined -- ", tx.hash);

    console.log("Initialisation d'une publication : ");
    const tx2 = await megalisV1Contract.publish("Siren2", "https://url2.com", "HashDuDoc2");
    console.log("Mining...", tx2.hash);
    await tx2.wait();
    console.log("Mined -- ", tx2.hash);

    console.log("Initialisation d'une publication : ");
    const tx3 = await megalisV1Contract.publish("Siren3", "https://url3.com", "HashDuDoc3");
    console.log("Mining...", tx3.hash);
    await tx3.wait();
    console.log("Mined -- ", tx3.hash);

    console.log("Initialisation d'une publication : ");
    const tx4 = await megalisV1Contract.publish("Siren4", "https://url4.com", "HashDuDoc4");
    console.log("Mining...", tx4.hash);
    await tx4.wait();
    console.log("Mined -- ", tx4.hash);

    console.log("Initialisation d'une publication : ");
    const tx5 = await megalisV1Contract.publish("Siren1", "https://url5.com", "HashDuDoc5");
    console.log("Mining...", tx5.hash);
    await tx5.wait();
    console.log("Mined -- ", tx5.hash);

    console.log("Initialisation d'une publication : ");
    const tx6 = await megalisV1Contract.publish("Siren2", "https://url6.com", "HashDuDoc6");
    console.log("Mining...", tx6.hash);
    await tx6.wait();
    console.log("Mined -- ", tx6.hash);

    console.log("Initialisation d'une publication : ");
    const tx7 = await megalisV1Contract.publish("Siren1", "https://url7.com", "HashDuDoc7");
    console.log("Mining...", tx7.hash);
    await tx7.wait();
    console.log("Mined -- ", tx7.hash);
    */

    /*
    console.log("Liste des adresses ayant publié quelque chose : ");
    const sirens = await megalisV1Contract.getAllSirens();
    console.table(sirens);

    console.log("Liste des publications de siren1 : ");
    const sirenPublications = await megalisV1Contract.getSirenPublications("Siren1");
    console.table(sirenPublications);

    console.log("Liste des publications de siren2 : ");
    const sirenPublications2 = await megalisV1Contract.getSirenPublications("Siren2");
    console.table(sirenPublications2);

    console.log("Liste des publications de siren3 : ");
    const sirenPublications3 = await megalisV1Contract.getSirenPublications("Siren3");
    console.table(sirenPublications3);

    console.log("Liste des publications de siren4 : ");
    const sirenPublications4 = await megalisV1Contract.getSirenPublications("Siren4");
    console.table(sirenPublications4);
    */

}

main()