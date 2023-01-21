const prompt = require("prompt-sync")({ sigint: true });
var address = prompt("Sender's Address: ");
var receiver = prompt("Receiver Address: ");
var privateKey = prompt("Private Key: ")
var amount = prompt("Amount: ")


const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

const deploy = async () => {
    console.log(`Sending a transaction from ${address} to ${receiver}`);

    const createTransactions = await web3.eth.accounts.signTransaction({
        from: address,
        to: receiver,
        value: web3.utils.toWei(`${amount}`,'ether'),
        gas:21000,
    },
    privateKey
    );

    const receipt = web3.eth.sendSignedTransaction(createTransactions.rawTransaction);
    console.log(`Transaction successfull with hash: ${receipt.TransactionHash}`);
}
deploy()
