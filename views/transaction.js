var bitcoinTransaction = require('bitcoin-transaction');

function startTransaction() {
    //Send all my money from wallet1 to wallet2 on the bitcoin testnet
    var from = "mm3gdVh8n6YtcNyaTKYkveB6yTME7aDWNJ";
    var to = "mgPUfqJk4X6gE4P5Do5RfpkTFsYmsSjCya";
    var privKeyWIF = "cNZi8iySqBToXMpcsQaHKD5uv7HExBQJBSi4dTg3ZPaEzeNAzvbj";	//Private key in WIF form (Can generate this from bitcoinlib-js)

    bitcoinTransaction.getBalance(from, { network: "testnet" }).then((balanceInBTC) => {
        return bitcoinTransaction.sendTransaction({
            from: from,
            to: to,
            privKeyWIF: privKeyWIF,
            btc: balanceInBTC,
            network: "testnet"
        });
    });
}

function waitTransaction() {
    
}