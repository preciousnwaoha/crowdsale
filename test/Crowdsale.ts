const {expect } = require("chai");

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const {ethers} = require("hardhat");

describe('Staking', () => {
  async function deployTokenFixture () {
    const [owner, signer2, signer3] = await ethers.getSigners();

    const PinCoin = await ethers.getContractFactory("PinCoin", owner);
    const pinCoin = await PinCoin.deploy();
    await pinCoin.deployed();

    const Crowdsale = await ethers.getContractFactory("Crowdsale", owner);
    const crowdSale = await Crowdsale.deploy(2, owner.address, pinCoin.address);

    await crowdSale.deployed();

    return {pinCoin, crowdSale, owner, signer2, signer3}
  };



    it("adds a token symbol", async () => {
      const {pinCoin, crowdSale, owner, signer2, signer3} = await loadFixture(deployTokenFixture);
      let totalSupply;
      let signer2Balance;
      let signer3Balance;

      totalSupply = await pinCoin.totalSupply();
      signer2Balance = await pinCoin.balanceOf(signer2.address);
      signer3Balance = await pinCoin.balanceOf(signer3.address);

      expect(totalSupply).to.be.equal(0)
      expect(signer2Balance).to.be.equal(0)
      expect(signer3Balance).to.be.equal(0)

      await pinCoin.connect(owner).mint(
        crowdSale.address,
        ethers.utils.parseEther('10000')
      )

      const ownerEtherBalanceOld = await owner.getBalance();

      const buyTxn1 = await crowdSale.connect(signer2).buyTokens(signer2.address, {value: ethers.utils.parseEther('10')});
      await buyTxn1.wait();
      const buyTxn2 = await crowdSale.connect(signer3).buyTokens(signer3.address, {value: ethers.utils.parseEther('20')});
      await buyTxn2.wait();

      totalSupply = await pinCoin.totalSupply();
      signer2Balance = await pinCoin.connect(owner).balanceOf(signer2.address);
      signer3Balance = await pinCoin.connect(owner).balanceOf(signer3.address);
      const ownerEtherBalanceNew = await owner.getBalance();

      expect(totalSupply).to.be.equal(ethers.utils.parseEther('10000'));
      expect(signer2Balance).to.be.equal(ethers.utils.parseEther('20'));
      expect(signer3Balance).to.be.equal(ethers.utils.parseEther('40'));
      expect(ownerEtherBalanceNew).to.be.above(ownerEtherBalanceOld);
    })
})

