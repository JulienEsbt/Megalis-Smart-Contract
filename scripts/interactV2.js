const ROPSTEN_ALCHEMY_API_KEY = process.env.ROPSTEN_ALCHEMY_API_KEY
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const contract = require("../artifacts/contracts/megalisV2.sol/megalisV2.json")

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
    (network = "ropsten"),
    ROPSTEN_ALCHEMY_API_KEY
)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY1, alchemyProvider)

// Contract
const megalisV2Contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    signer
)

async function main() {
    /*
    console.log("Initialisation d'une publication : ");
    console.log("Chargement...");
    const tx = await megalisV2Contract.publish("Siren5", "https://url5.com", "HashDuDoc5");
    await tx.wait();
    console.log("Done.");
    */

    console.log("Liste des adresses ayant publié quelque chose : ");
    const sirens = await megalisV2Contract.getAllSirens();
    console.table(sirens);

    /*
    // TODO Bug à refaire
    console.log("Liste de toutes les publications : ");
    const allPublications = await megalisV2Contract.getAllPublications();
    console.table(allPublications);
    */

    console.log("Liste des publications de l'adresse 0x858077f49B961ef27b0B09313BedFE33Aca0ca44 : ");
    const sirenPublications = await megalisV2Contract.getSirenPublications("0x858077f49B961ef27b0B09313BedFE33Aca0ca44");
    console.table(sirenPublications);

    console.log("Liste des publications de l'adresse 0xFAECdDcc975965A9881638140736945934a63f4B : ");
    const sirenPublications2 = await megalisV2Contract.getSirenPublications("0xFAECdDcc975965A9881638140736945934a63f4B");
    console.table(sirenPublications2);

}
main()