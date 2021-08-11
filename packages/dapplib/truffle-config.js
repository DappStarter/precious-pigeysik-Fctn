require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind artwork guess cloth fresh spring'; 
let testAccounts = [
"0xcb3b77c0825d2b5e982d81159a308cbdd6412542a0063326750e1d38c90e79c4",
"0x1429d92f0a8a1b902e7799a16482d200f4026282b57d9e746ef18a7f0835a0a7",
"0xef7bf8d16cd70b9eea092c9aa323b192e252e665025f78ba2fc4f67f53be9134",
"0x6f2037247515f77ee0b1b53bdf25719ad5d8e302d69c7821de22f9857fdd0293",
"0x1cb34e579c8364c8628cbc54cf94340f5c6f845ce2794ae1c68cfeed0c28b248",
"0x41d3d61e93225c3788c2d26c8dc70b7d7990d2677bb82fcd22225512aab2d888",
"0xc2fe8de5d26f190b0e55963a78317812d6647bd8c1800671483dc53663caf390",
"0x78600eba2b236e7e7cc51c33b4ef6107a7b894f045517e85b704068a5c76f405",
"0xd36d1bb4df71684987a21c864eb5e826d14294a3dca286286d956cbff145605c",
"0xac409a6653b5698bcfc35ef68f9b98e125ba3a593dd036cf57a469cd78064fca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

