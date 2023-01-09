async function main() {
  const [owner, addr1, addr2] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", owner.address);
  const weiAmount = (await owner.getBalance()).toString();
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  const PinCoin = await ethers.getContractFactory("PinCoin", owner);
  const pinCoin = await PinCoin.deploy();

  await pinCoin.deployed();
  

  const Crowdsale = await ethers.getContractFactory("Crowdsale", owner);
  const crowdSale = await Crowdsale.deploy(2, owner.address, pinCoin.address);

  await crowdSale.deployed();

  /* ---- This is Optional (Owner can send tokens directly from wallet to Contract) ---- */
  await pinCoin.connect(owner).mint(
    crowdSale.address,
    ethers.utils.parseEther('10000000')
  )


  

  console.log(`Crowdsale Contract Address: ${crowdSale.address} `);
  console.log(`PinCoin Token Address: ${pinCoin.address} `);
  console.log("Account balance after deploys:", (await ethers.utils.formatEther(weiAmount)));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
