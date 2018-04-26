Wiseplat Wallet

The Wiseplat wallet, which allows you to create simple and multisig wallets to manage your wise.

The wallet contains its own node, but can also use an already running one, if the IPC path of that node is the standard path.
(See below)

## Running on a testnet

When you start the wallet on a testnet (e.g. different `--datadir`) you need to make sure to set the `--ipcpath` back to the original one.

On OSX its `~/Library/Wiseplat/gwsh.ipc` on linux `~/.wiseplat/gwsh.ipc` and on windows it uses a named pipe, which doesn't need to be renamed.

Example:

    $ gwsh --datadir /my/chain/ --networkid 23 --ipcpath ~/Library/Wiseplat/gwsh.ipc



### Original contract

Once you start the app while running a testnet, the wallet need to deploy an original contract,
which will be used by the wallet contracts you create.

The point of the original wallet is that wallet contract creation is cheaper,
as not the full code has to be deployed for every wallet.

You need to make sure that the account displayed for the original wallet creation is unlocked and has at least 1 wise.


## Paths

The paths which store your wallets database and node are different:

The wallet (Mist) stores its data at:
- Mac: ~/Library/Application Support/Mist
- Windows: %APPDATA%\Roaming\Mist
- Linux: ~/.config/Mist

The nodes data is stored at:
- Mac: ~/Library/Wiseplat
- Windows: %APPDATA%\Roaming\Wiseplat
- Linux: ~/.wiseplat


## Issues

If you find issues or have suggestion, please report them at  
https://github.com/wiseplat/meteor-dapp-wallet/issues



## Repository

The wallet code can be found at   
https://github.com/wiseplat/meteor-dapp-wallet

And the binary application code, which wraps the wallet app can be found at   
https://github.com/wiseplat/mist/tree/wallet



## Bundling the wallet

To bundle the binaries yourself follow the instructions on the mist#wallet readme  
https://github.com/wiseplat/mist/tree/wallet#deployment
