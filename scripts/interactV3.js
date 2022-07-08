const {PRIVATE_KEY3} = process.env

const {CONTRACT_ADDRESS_V3_RINKEBY} = process.env

const {BLAST_API_KEY} = process.env

const contract = require("../artifacts/contracts/megalisV3.sol/megalisV3.json")

// Provider
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.blastapi.io/${BLAST_API_KEY}`, "rinkeby")

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY3, provider)

// Contract
const megalisV3Contract = new ethers.Contract(
    CONTRACT_ADDRESS_V3_RINKEBY,
    contract.abi,
    signer
)

async function main() {
    console.log("Initialisation d'une publication : ");
    const tx = await megalisV3Contract.publish("Siren1", "http://url1.com");
    console.log("Mining...", tx.hash);
    await tx.wait();
    console.log("Mined -- ", tx.hash);

    console.log("Initialisation d'une publication : ");
    const tx2 = await megalisV3Contract.publish("Siren2", "https://url1.com");
    console.log("Mining...", tx2.hash);
    await tx2.wait();
    console.log("Mined -- ", tx2.hash);

    console.log("Liste des adresses ayant publié quelque chose : ");
    const sirens2 = await megalisV3Contract.getAllSirens();
    console.table(sirens2);

    console.log("Liste des publications de siren1 : ");
    const sirenPublications1 = await megalisV3Contract.getSirenPublications("Siren1");
    console.table(sirenPublications1);

    console.log("Liste des publications de siren2 : ");
    const sirenPublications22 = await megalisV3Contract.getSirenPublications("Siren2");
    console.table(sirenPublications22);

    console.log("Suppression d'une publication : ");
    const tx8 = await megalisV3Contract.deletePublication("Siren1", "https://url2.com", { gasLimit: 300000 });
    console.log("Deleting...", tx8.hash);
    await tx8.wait();
    console.log("Delete -- ", tx8.hash);

    console.log("Suppression d'une publication : ");
    const tx9 = await megalisV3Contract.deletePublication("Siren1", "https://url4.com", { gasLimit: 300000 });
    console.log("Deleting...", tx9.hash);
    await tx9.wait();
    console.log("Delete -- ", tx9.hash);

    console.log("Liste des adresses ayant publié quelque chose : ");
    const sirens = await megalisV3Contract.getAllSirens();
    console.table(sirens);

    console.log("Liste des publications de siren1 : ");
    const sirenPublications = await megalisV3Contract.getSirenPublications("Siren1");
    console.table(sirenPublications);

    console.log("Liste des publications de siren2 : ");
    const sirenPublications2 = await megalisV3Contract.getSirenPublications("Siren2");
    console.table(sirenPublications2);
}

main()