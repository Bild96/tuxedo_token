module.exports = {

networks:{
devlopment:{
  host:"127.0.0.1",
  port:8080,
  networks_id: "*"
}
}
 solc: {
    // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)      // settings: {          // See the solidity docs for advice about optimization and evmVersion
     optimizer: {
      enabled: true,
    runs: 200
    }
  }
},
