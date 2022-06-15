async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const megalisFactory = await ethers.getContractFactory("megalisV1");
    const megalisContract = await megalisFactory.deploy();
    await megalisContract.deployed();
    console.log("Contract address:", megalisContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });