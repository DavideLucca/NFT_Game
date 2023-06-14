const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Indiana Jones", "Nathan Drake", "Lara Croft"],
    [
      "https://img.olhardigital.com.br/wp-content/uploads/2023/04/Harrison-Ford-como-Indiana-Jones.jpg",
      "https://static.wikia.nocookie.net/uncharted/images/c/c3/NathanDrake-U4.png/revision/latest?cb=20180904175726&path-prefix=pt-br",
      "https://files.tecnoblog.net/wp-content/uploads/2021/09/tomb-raider.png",
    ],
    [100, 200, 200], // HP values
    [100, 50, 50], // Attack damage values
    "Capitão Nascimento",
    "https://i.imgur.com/yWpKMDt.png",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);
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