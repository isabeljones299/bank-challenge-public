import Statement from "../src/statement.js";
import Transaction from "../src/Transaction.js";
import Account1 from "../src/Account1.js";

describe("Statement test", () => {
    it("prints statement for required transactions", () => {
        //arrange
        const testAccount = new Account1();
        const transaction1 = new Transaction("10/01/2012", 1000, 0);
        const transaction2 = new Transaction("13/01/2012", 2000, 0);
        const transaction3 = new Transaction("14/01/2012", 0, 500);
        //Act
        testAccount.log(transaction1);
        testAccount.log(transaction2);
        testAccount.log(transaction3);
        const actual = Statement.print(testAccount.transactions);
        //assert
        expect(actual).toBe("\ndate       || credit  || debit  || balance\n14/01/2012 ||         || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||        || 3000.00\n10/01/2012 || 1000.00 ||        || 1000.00\n");
    });

});