const ROPSTEN_ALCHEMY_API_KEY = process.env.ROPSTEN_ALCHEMY_API_KEY
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2
const CONTRACT_ADDRESS_ROPSTEN = process.env.CONTRACT_ADDRESS_V2_ROPSTEN
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
    CONTRACT_ADDRESS_ROPSTEN,
    contract.abi,
    signer
)

async function main() {
    /*
    console.log("Initialisation d'une publication : ");
    const tx = await megalisV2Contract.publish("11111", "https://url1.com", "HashDuDoc1");
    console.log("Mining...", tx.hash);
    await tx.wait();
    console.log("Mined -- ", tx.hash);

    console.log("Initialisation d'une publication : ");
    const tx2 = await megalisV2Contract.publish("22222", "https://url2.com", "HashDuDoc2");
    console.log("Mining...", tx2.hash);
    await tx2.wait();
    console.log("Mined -- ", tx2.hash);

    console.log("Initialisation d'une publication : ");
    const tx3 = await megalisV2Contract.publish("33333", "https://url3.com", "HashDuDoc3");
    console.log("Mining...", tx3.hash);
    await tx3.wait();
    console.log("Mined -- ", tx3.hash);

    console.log("Initialisation d'une publication : ");
    const tx4 = await megalisV2Contract.publish("44444", "https://url4.com", "HashDuDoc4");
    console.log("Mining...", tx4.hash);
    await tx4.wait();
    console.log("Mined -- ", tx4.hash);

    console.log("Initialisation d'une publication : ");
    const tx5 = await megalisV2Contract.publish("11111", "https://url5.com", "HashDuDoc5");
    console.log("Mining...", tx5.hash);
    await tx5.wait();
    console.log("Mined -- ", tx5.hash);

    console.log("Initialisation d'une publication : ");
    const tx6 = await megalisV2Contract.publish("22222", "https://url6.com", "HashDuDoc6");
    console.log("Mining...", tx6.hash);
    await tx6.wait();
    console.log("Mined -- ", tx6.hash);

    console.log("Initialisation d'une publication : ");
    const tx7 = await megalisV2Contract.publish("11111", "https://url7.com", "HashDuDoc7");
    console.log("Mining...", tx7.hash);
    await tx7.wait();
    console.log("Mined -- ", tx7.hash);
    */

    /*
    console.log("Liste des adresses ayant publié quelque chose : ");
    const sirens = await megalisV2Contract.getAllSirens();
    console.table(sirens);

    console.log("Liste des publications de 11111 : ");
    const sirenPublications = await megalisV2Contract.getSirenPublications("11111");
    console.table(sirenPublications);

    console.log("Liste des publications de 22222 : ");
    const sirenPublications2 = await megalisV2Contract.getSirenPublications("22222");
    console.table(sirenPublications2);

    console.log("Liste des publications de 33333 : ");
    const sirenPublications3 = await megalisV2Contract.getSirenPublications("33333");
    console.table(sirenPublications3);

    console.log("Liste des publications de 44444 : ");
    const sirenPublications4 = await megalisV2Contract.getSirenPublications("44444");
    console.table(sirenPublications4);
    */

    // TODO Bug à refaire
    console.log("Liste de toutes les publications : ");
    const allPublications = await megalisV2Contract.getAllPublications();
    console.table(allPublications);


}
main()