
## Project Summary

The aim of this project was to create a program which allows transactions to be made to a bank account. These transactions must be stored so they can be printed as a statement at any time. This is an important functionality of a bank account as the owner can keep track of their spending and make sure all their transactions have been logged correctly.

The bank challenge exists to help people learning javascript gain an understanding of the first of the S.O.L.I.D concepts in object oriented design: single responsibility. The user requirements dictate that account data, transaction adding and storage, and statement printing should each be encapsulated in their own class, which is helpful for someone who has been recently introduced to object oriented design. 
On my path towards being a successful software developer, learning TDD will help me write code which is robust and free of bugs. In addition to improving my knowledge of javascript and OOD, this challenge provided me the opportunity to use Jasmine testing framework to verify my code. I am now comfortable using matcher functions and spies to write tests.

This project was completed 4 weeks in to my training in software development.

### Dependancies and technologies used:
* Node.js
* VS Code
* eslint
* Jasmine

### How to install and run
* clone the repo using the fork button in GitHub
* Copy the url of the cloned repo - should be in the format https://github.com/myusername/repo-name.git
* create your local repo by opening a folder VS Code or IDE of choice, then type the following in terminal: `git clone https://github.com/myusername/airport-challenge.git`

* install node.js
* navigate to the test folder, then in terminal: `node index.js`
* personalise the statement by creating a new instance of account in the index.js file and adding your own transactions

## Project Review and Roadmap
Since my last project, I have learnt how to translate acceptance criteria into user rquirements. I also have a much better understanding of single resonsibility and encapsulation plus knowledge of how to write tests for loosely coupled code. 

Although my code is linted, I would like to use ESlint again on a later project to make sure I understand fully how to install it, and how to edit the config file for desired functionalities.

### Improvements
* I don't yet have a test for the print statement method which passes so I would need to create a mock transactions array and use spy on to see if console.log() is called.
* I could refactor the code to take a different input such as "date" + "amount" + "type" rather than "date" + "credit amount" + "debit amount" for ease of use. Or use the Date class rather than taking the date as a string which would automatically set the date of when the new transaction was created so fewer inputs are required from the user.
* The Statement print() method works fine for the challenge critera but I could change it so that it would format correctly for larger deposits and withdrawals (>= 10000.00) or perhaps give a different statement format alltogether.
* I could create an overdraft class to deal with overdraft limits and a negative balance
  

# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [x] Meets the spec
- [x] Developed test-first
- [x] Passes tests and code is linted
- [x] Encapsulates adding and storing Transactions in a class
- [x] Encapsulates Statement formatting in a class
- [x] Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!
---

# Domain Modelling & User Requirements

### User Story 1

As a user,
I want to make deposits,
So I can add money to my bank account

| Object     | Properties           | Message                                        | Output   |
| :--------- | :------------------- | :--------------------------------------------- | :------- |
| Transction | balance @int         | updateTransactionBalance(Account.balance @int) | @void    |
|            | transaction @array[] |                                                | @void    |
| Account    | balance @int         | updateTransactionBalance()                     | @void    |
|            |                      | setBalance(Transaction.transaction)            | @balance |

1. When I make a deposit is that added to my balance?

As a user,
I want to make withdrawals,
So I use the money in my account.

| Object     | Properties           | Message                                        | Output   |
| :--------- | :------------------- | :--------------------------------------------- | :------- |
| Transction | balance @int         | updateTransactionBalance(Account.balance @int) | @void    |
|            | transaction @array[] |                                                | @void    |
| Account    | balance @int         | updateTransactionBalance()                     | @void    |
|            |                      | setBalance(Transaction.transaction)            | @balance |

1. When I withdraw money is the amount removed from balance?

As a bank account,
I want to store transactions in memory,
So I can print an account statement.

| Object     | Properties            | Message                                        | Output |
| :--------- | :-------------------- | :--------------------------------------------- | :----- |
| Transction | balance @int          | updateTransactionBalance(Account.balance @int) | @void  |
|            | transaction @array[]  |                                                | @void  |
| Account    | balance @int          | updateTransactionBalance()                     | @void  |
|            |                       | setBalance(Transaction.transaction)            | @int   |
|            | transactions @array[] | log(transaction @array[])                      | @array |


1. When I deposit/withdraw money, is a transaction stored? 
2. Whem I make multiple transactions, are they stored?

As a user,
I want to store the date of each transaction, 
so I can keep track of my spending.

| Object     | Properties            | Message                                        | Output |
| :--------- | :-------------------- | :--------------------------------------------- | :----- |
| Transction | balance @int          | updateTransactionBalance(Account.balance @int) | @void  |
|            | transaction @array[]  |                                                | @void  |
| Account    | balance @int          | updateTransactionBalance()                     | @void  |
|            |                       | setBalance(Transaction.transaction)            | @int   |
|            | transactions @array[] | log(transaction @array[])                      | @array |  |

1. Whem I make a transaction, is the date stored?

As a user,
I want to be able to print my account statement,
So I can keep track of my account.

| Object     | Properties            | Message                                        | Output  |
| :--------- | :-------------------- | :--------------------------------------------- | :------ |
| Transction | balance @int          | updateTransactionBalance(Account.balance @int) | @void   |
|            | transaction @array[]  |                                                | @void   |
| Account    | balance @int          | updateTransactionBalance()                     | @void   |
|            |                       | setBalance(Transaction.transaction)            | @int    |
|            | transactions @array[] | log(transaction @array[])                      | @array  |
| Statement  | statement @string     | print(transactions @array[])                   | @string |

1. when I print my account statement, is it in the format of the requirements?
2. when i print my account statement, does deposit or withdrawal of zero appear as a blank cell?

## Project Summary

The aim of this project was to create a program which allows transactions to be made to a bank account. These transactions must be stored so they can be printed as a statement at any time. This is an important functionality of a bank account as the owner can keep track of their spending and make sure all their transactions have been logged correctly.

The bank challenge exists to help people learning javascript gain an understanding of the first of the S.O.L.I.D concepts in object oriented design: single responsibility. The user requirements dictate that account data, transaction adding and storage, and statement printing should each be encapsulated in their own class, which is helpful for someone who has been recently introduced to object oriented design. 
On my path towards being a successful software developer, learning TDD will help me write code which is robust and free of bugs. In addition to improving my knowledge of javascript and OOD, this challenge provided me the opportunity to use Jasmine testing framework to verify my code. I am now comfortable using matcher functions and spies to write tests.

This project was completed 4 weeks in to my training in software development.

### Dependancies and technologies used:
* Node.js
* VS Code
* eslint
* Jasmine

### How to install and run
* clone the repo using the fork button in GitHub
* Copy the url of the cloned repo - should be in the format https://github.com/myusername/repo-name.git
* create your local repo by opening a folder VS Code or IDE of choice, then type the following in terminal: `git clone https://github.com/myusername/airport-challenge.git`

* install node.js
* navigate to the test folder, then in terminal: `node index.js`
* personalise the statement by creating a new instance of account in the index.js file and adding your own transactions

## Project Review and Roadmap
Since my last project, I have learnt how to translate acceptance criteria into user rquirements. I also have a much better understanding of single resonsibility and encapsulation plus knowledge of how to write tests for loosely coupled code. 

Although my code is linted, I would like to use ESlint again on a later project to make sure I understand fully how to install it, and how to edit the config file for desired functionalities.

### Improvements
* I have a passing test for the print statement method but I would also like to create a mock transactions array and use spy on to confirm that console.log() is called.
* I could refactor the code to take a different input such as "date" + "amount" + "type" rather than "date" + "credit amount" + "debit amount" for ease of use. Or use the Date class rather than taking the date as a string which would automatically set the date of when the new transaction was created so fewer inputs are required from the user.
* The Statement print() method works fine for the challenge critera but I could change it so that it would format correctly for larger deposits and withdrawals (>= 10000.00) or perhaps give a different statement format alltogether.
* I could create an overdraft class to deal with overdraft limits and a negative balance
  
