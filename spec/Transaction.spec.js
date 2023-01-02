

// Transaction tests
// 1. Testing constructor: a) a new instance of Transaction will have a balance of zero
// 1. Testing constructor: a) a new instance of Transaction will have a transaction array containing transactions

import Transaction from "../src/Transaction.js";


describe("Transaction tests", () => {
    let testTransaction;
    beforeEach(() => {
        testTransaction = new Transaction("18/10/22", 20, 7);
    });
    afterEach(() => {
        testTransaction = undefined;
    });

    it("1. Testing constructor: A new instance of transaction will have a balance of zero", () => {
        // Arrange
        // Act 
        const actual = testTransaction.balance;
        // Assert
        expect(actual).toEqual(0);
    });
    it("1. Testing constructor: A new instance of transaction will have a transaction array constaining [date, credit, debit]", () => {
        // Arrange
        // Act 
        const actual = testTransaction.transaction;
        // Assert
        expect(actual).toEqual(["18/10/22", 20, 7]);
    });
    it("2. Testing updateTransactionBalance: updateTransactionBalance will update the transaction array to contain the cumulative balance of the account after that transaction", () => {
        // Arrange
        // Act 
        testTransaction.updateTransactionBalance(13);
        const actual = testTransaction.balance;
        // Assert
        expect(actual).toEqual(13);
    });
});