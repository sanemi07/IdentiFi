const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("IdentiFi", (m) => {
  const identiFi = m.contract("IdentiFi"); // Deploy the identiFi contract
  return { identiFi };
});
