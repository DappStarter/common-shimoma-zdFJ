require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rifle payment color hunt help equal general'; 
let testAccounts = [
"0x78cd0ad6db4129a7dc5307b0eb18a2c6e332e4b6fd0e4d7028275f833ef90d67",
"0x1740884e3bb8a787a08ef24fc975c6996693dc78185d28154637147658ad1a21",
"0x7ed8753102b9c387cf00ff9756dfd59be3df7d6dcd50cfae3baead26465f4944",
"0x8540f243b042ddc133578eb5dbcb8993096dbfee3e078a47545fc79ed65d4ff6",
"0x500a034f0c961e69e7d5f918ca0155d4c73a5abc10022eacf91e53e214625839",
"0xcb9898c525dae17e97d0a55af2ae404cdc7e8931cd4f1b061e4efc7269f57adf",
"0xd52e3d6f0256b21628544b355a0a31cda112c57e42965f6f3d79bafea5adc1a0",
"0x0ee79a481d1767fd02d65d0b332cca13629fe8da940507737843fb5142c525b2",
"0x4c574a096ebd64cb0aa4a4d78a3df4d802da70a798395951d036609feb58ff01",
"0xbe1bc1b3effa3897a62aa6964469a2d2a91519d731a60d648ea45c3bc3c436d7"
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

