/**
Sets the wiseplat provider, as well as "web3" for backwards compatibility.

@module wiseplatProvider
*/
const Web3 = require('npm2-web3');
const BigNumber = require('bignumber.js');
const ipcProviderWrapper = require('../../ipc/ipcProviderWrapper.js');
const LegacyWeb3IpcProvider = require('./legacyWeb3IpcProvider.js');


// SET WISEPLAT PROVIDER
// window.wiseplatProvider = new Web3.providers.IpcProvider('', ipcProviderWrapper);


// LEGACY
window.BigNumber = BigNumber;
window.web3 = {
    currentProvider: new LegacyWeb3IpcProvider('', ipcProviderWrapper)
};

// for now still add this too: WILL BE REMOVED with web3 1.0
window.web3 = new Web3(new Web3.providers.IpcProvider('', ipcProviderWrapper));
