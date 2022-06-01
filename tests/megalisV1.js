const { expect } = require("chai");

describe("megalisV1 contract", function () {
    it("Test of a publishment", async function () {
        const [owner] = await ethers.getSigners();

        const Megalis = await ethers.getContractFactory("megalisV1");

        const megalisContract = await Megalis.deploy();

        await megalisContract.publish(owner, "1", "http://test.com", 0x123, 1);
        //expect(await megalisContract.)
        //TODO
    });
});