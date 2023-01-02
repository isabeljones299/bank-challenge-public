
class Statement {


    static #statement;

    static get statement() {
        return this.#statement;
    }

    static removeZeroCredit(input) {
        if (input == 0.00) {
            input = "       ";
        } return input;
    }
    removeZeroDebit(input) {
        if (input == 0.00) {
            input = "      ";
        } return input;
    }

    static print(transactions) {
        this.#statement = "\ndate       || credit  || debit  || balance\n";
        for (let i = transactions.length - 1; i >= 0; i--) {
            let dat = transactions[i][0];
            let cre = Statement.removeZeroCredit((transactions[i][1]).toFixed(2));
            let deb = this.removeZeroDebit((transactions[i][2]).toFixed(2));
            let bal = transactions[i][3].toFixed(2);
            this.#statement += dat + " || " + cre + " || " + deb + " || " + bal + "\n";
        }
        console.log(this.#statement);
        return this.#statement;
    }
}

export default Statement;



