require("dotenv").config(); // Corrected: Loads .env file

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: { // Corrected: Changed 'network' to 'networks'
    sepolia: {
      url: process.env.RPc_Url, // Ensure the environment variable names are correct
      accounts: [process.env.PRIVATE_KEY] // Updated to a more conventional name
    }
  }
};
