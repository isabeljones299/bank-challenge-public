

class Account1 {

    #transactions;
    #balance;
    #transaction;

    // constructor() {
    //     this.#transactions = [[null, 0, 0, 0]]
    //     this.#balance = 0;
    // }

    // get transactions() {
    //     return this.#transactions;
    // }
    // get balance() {
    //     return this.#balance;
    // }

    // log(transaction) {

    //     this.#transactions.push(transaction)
    //     this.transactions[this.#transactions.length - 1][3] += this.#transactions[this.#transactions.length - 2][3]
    //     this.#balance = this.#transactions[this.#transactions.length - 1][3]
    //     return this.#transactions;
    // }

    constructor() {
        // this.#transaction = []
        this.#transactions = [];
        this.#balance = 0;
    }

    get transactions() {
        return this.#transactions;
    }
    get balance() {
        return this.#balance;
    }
    // setTransaction(transaction) {
    //     return transaction = transaction.setTransaction()
    // }
    setBalance(transaction) {
        this.#balance += (transaction[1] - transaction[2]);
        return this.#balance;
    }

    log(transaction) {
        this.setBalance(transaction.transaction);
        transaction.transaction.push(this.#balance);
        this.#transactions.push(transaction.transaction);
        return this.#transactions;
    }

    updateTransactionBalance(transaction) {
        transaction.updateTransactionBalance(this.#balance);
    }


    // makeTransaction(transaction) {
    //     // update the account balance passing transaction.amout and transaction.type
    //     // set the transaction balance with the current balance of the account balance
    //     // push the transaction object to the array of transactions
    // }














}

export default Account1;