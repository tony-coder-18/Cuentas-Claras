CREATE DATABASE transactionsdb;

CREATE TABLE transactions(
    Id SERIAL PRIMARY KEY,
    TransactionName VARCHAR(255),
    Ammount MONEY,
    TransactionDate DATE,
    TransactionType VARCHAR(255)
);