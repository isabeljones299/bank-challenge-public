class Transaction {

    #transaction;
    #balance;

    constructor(date, credit, debit) {
        this.#transaction = [date, credit, debit];
        //this.#transaction = []
        this.#balance = 0;
    }

    get transaction() {
        return this.#transaction;
    }
    get balance() {
        return this.#balance;
    }
    updateTransactionBalance(accountBalance) {
        this.#balance = accountBalance;
    }

}
export default Transaction;