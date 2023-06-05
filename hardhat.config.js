/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 210000,
         gasPrice: 8000000,
      }
   },
}

//Contract address: 0x2e86bDE2Bd792c6ea8B2216fCeB53530248E0930