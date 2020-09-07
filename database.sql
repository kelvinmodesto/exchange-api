CREATE TABLE Transactions (
    transactionId          INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    userId                 INTEGER NOT NULL,
    monetaryUnitSrc        STRING  NOT NULL,
    monetaryUnitDest       STRING  NOT NULL,
    conversionRate         REAL    NOT NULL,
    srcValue               REAL    NOT NULL,
    destValue              REAL,
    transactionIsSucceeded BOOLEAN,
    createdAt              DATE    NOT NULL,
    updatedAt              DATE    NOT NULL
);
