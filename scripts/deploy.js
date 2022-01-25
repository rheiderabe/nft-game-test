const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Yasuo", "Taric", "Nautilus", "Zed", "Irelia"], // Names
    [
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_36.jpg", // Images
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9lBSXbO_ec_luAGt6GuMCLBqjgwli0T83dgVlK4Ou5IE7Nk-KJTzEr2C4tljmco1MJw&usqp=CAU",
      "https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Nautilus_OriginalCentered.jpg/revision/latest/scale-to-width-down/1280?cb=20180414203437",
      "https://static.senpai.gg/lol/img/champion/tiles/Zed_0.webp",
      "https://www.mobafire.com/images/champion/skins/landscape/irelia-high-noon-762x.jpg",
    ],
    [100, 200, 300, 100, 150], // HP values
    [100, 50, 25, 100, 50],
    "Baron", // Attack damage values
    "https://i.pinimg.com/originals/77/fc/bc/77fcbc873b7a671b848c00edad007348.jpg",
    10000,
    50
  );
  await gameContract.deployed();

  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
  console.log("Done deploying and minting!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
