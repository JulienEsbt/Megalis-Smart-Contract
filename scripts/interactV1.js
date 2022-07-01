const ROPSTEN_ALCHEMY_API_KEY = process.env.ROPSTEN_ALCHEMY_API_KEY
const GOERLI_ALCHEMY_API_KEY = process.env.GOERLI_ALCHEMY_API_KEY
const POLYGON_MUMBAI_BLAST_API_KEY = "45b75e5c-bd21-4b10-8e72-381013ae52fb"
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2
const CONTRACT_ADDRESS_ROPSTEN = process.env.CONTRACT_ADDRESS_V1_ROPSTEN
const CONTRACT_ADDRESS_GOERLI = process.env.CONTRACT_ADDRESS_V1_GOERLI
const CONTRACT_ADDRESS_V1_POLYGON_MUMBAI = process.env.CONTRACT_ADDRESS_V1_POLYGON_MUMBAI
const CONTRACT_ADDRESS_V1_GNOSIS = "0xD3D67E39E3399fC28242BAC053Fb63c4A0bfbe48";//CONTRACT_ADDRESS_V1_GNOSIS = process.env.CONTRACT_ADDRESS_V1_GNOSIS
const contract = require("../artifacts/contracts/megalisV1.sol/megalisV1.json")

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
    //(network = "ropsten"),
    //(network = "goerli"),,
    (network.gnosis),
    //ROPSTEN_ALCHEMY_API_KEY
    //GOERLI_ALCHEMY_API_KEY
    POLYGON_MUMBAI_BLAST_API_KEY
)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY1, alchemyProvider)

// Contract
const megalisV1Contract = new ethers.Contract(
    //CONTRACT_ADDRESS_ROPSTEN,
    //CONTRACT_ADDRESS_GOERLI,
    //CONTRACT_ADDRESS_V1_POLYGON_MUMBAI,
    CONTRACT_ADDRESS_V1_GNOSIS,
    contract.abi,
    signer
)

async function main() {
    /*
    console.log("Initialisation d'une publication : ");
    const tx = await megalisV1Contract.publish("Siren1", "https://url1.com", "HashDuDoc1");
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

    /*
    // TODO Bug : getAllPublications() à refaire dans le contrat
    console.log("Liste de toutes les publications : ");
    const allPublications = await megalisV1Contract.getAllPublications();
    console.table(allPublications);
    */

}
main()