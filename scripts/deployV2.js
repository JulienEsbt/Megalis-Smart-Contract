async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const megalisFactory = await ethers.getContractFactory("megalisV2");
    const megalisContract = await megalisFactory.deploy();
    //await megalisContract.deployed();
    console.log("Contract address:", megalisContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

//Rinkeby
/*const hre = require("hardhat");
const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const megalisFactory = await hre.ethers.getContractFactory("megalisV1");
    const megalisContract = await megalisFactory.deploy();
    //await megalisContract.deployed();
    console.log("Megalis Smart Contract address: ", megalisContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();*/