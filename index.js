//interact with code here

import Account1 from "./src/Account1.js";
import Statement from "./src/statement.js";
import Transaction from "./src/Transaction.js";



const account = new Account1();
const transaction1 = new Transaction("18/10/2022", 1000, 0);
const transaction2 = new Transaction("13/01/2012", 2000, 0);
const transaction3 = new Transaction("18/10/2022", 0, 500);

account.log(transaction1);
account.log(transaction2);
account.log(transaction3);


Statement.print(account.transactions);


