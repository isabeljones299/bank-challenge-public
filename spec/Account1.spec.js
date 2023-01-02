
import Account1 from "../src/Account1.js";
import Transaction from "../src/Transaction.js";


describe("Account tests", () => {
    let testAccount;
    const mockTransaction = {
        updateTransactionBalance: () => { }
    };
    beforeEach(() => {
        testAccount = new Account1();
    });
    afterEach(() => {
        testAccount = undefined;
    });

    it("1. Testing constructor: A new instance of account will have an empty transactions array", () => {
        // Arrange
        // Act 
        const actual = testAccount.transactions;
        // Assert
        expect(actual).toEqual([]);
    });
    it("'1. Testing constructor: A new instance of account will have a balance = 0", () => {
        // Arrange
        // Act 
        const actual = testAccount.balance;
        // Assert
        expect(actual).toEqual(0);
    });
    it("2. Testing setBalance: setBalance(transaction) where transaction = [d, c, de, (c - de)] will return balance = b", () => {
        // Arrange
        // Act 
        testAccount.setBalance(["18/10/22", 20, 10, 10]);
        const actual = testAccount.setBalance(["18/10/22", 20, 0, 20]);
        // Assert
        expect(actual).toEqual(30);
    });
    it("3. testing updateTransactionBalance: use spyOn to see if updateTransactionBalance is called in a mock Transaction (class?).", () => {
        // Arrange
        const mockTransactionSpy = spyOn(mockTransaction, "updateTransactionBalance");
        // Act 
        testAccount.updateTransactionBalance(mockTransaction);
        // Assert
        expect(mockTransactionSpy).toHaveBeenCalled();
    });
    it("4. Testing log(transaction): a) Account balance is updated when a new transaction is logged", () => {
        // Arrange
        const testTransaction = new Transaction("18/10/22", 20, 7);
        // Act 
        testAccount.log(testTransaction);
        const actual = testAccount.balance;
        // Assert
        expect(actual).toEqual(13);
    });
    it("4. Testing log(transaction): b) transactions array contains the new transaction", () => {
        // Arrange
        const testTransaction = new Transaction("18/10/22", 20, 7);
        // Act 
        testAccount.log(testTransaction);
        const actual = testAccount.transactions;
        // Assert
        expect(actual).toEqual([["18/10/22", 20, 7, 13]]);
    });
    it("4. Testing log(transaction): c) Transaction balance is updated in Transaction class", () => {
        // Arrange
        const testTransaction = new Transaction("18/10/22", 20, 7);
        // Act 
        testAccount.log(testTransaction);
        testAccount.updateTransactionBalance(testTransaction);
        const actual = testTransaction.balance;
        // Assert
        expect(actual).toEqual(13);
    });

});

