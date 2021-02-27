const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = 3001;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a transaction
app.post("/addtrans", async (req, res) => {
  try {
    const { transactionname } = req.body;
    const { Ammount } = req.body;
    const { TransactionDate } = req.body;
    const { TransactionType } = req.body;

    const newTransaction = await pool.query(
      "INSERT INTO transactions (TransactionName, Ammount, TransactionDate, TransactionType) VALUES($1, $2, $3, $4)",
      [transactionname, Ammount, TransactionDate, TransactionType ]
    );

    res.json(newTransaction);
  } catch (err) {
    console.error(err.message);
  }
});


//get all transactions
app.get("/transactions", async (req, res) => {
  try {
    const allTransactions = await pool.query("SELECT *  FROM transactions");
    
    res.json(allTransactions.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get the sum of all transactions
app.get("/sum", async (req, res) => {
  try {
    const sumTransactions = await pool.query("SELECT SUM(ammount) FROM transactions");
    
    res.json(sumTransactions.rows);

  } catch (error) {
    console.error(error.message);
  }
});

//get the sum of all incomes
app.get("/incomesum", async (req, res) => {
  try {
    const sumIncomes = await pool.query("SELECT SUM(ammount) FROM transactions WHERE transactiontype='Income'");
    
    res.json(sumIncomes.rows);

  } catch (error) {
    console.error(error.message);
  }
});

//get the sum of all spends
app.get("/spendsum", async (req, res) => {
  try {
    const sumSpends = await pool.query("SELECT SUM(ammount) FROM transactions WHERE transactiontype='Spend'");
    
    res.json(sumSpends.rows);

  } catch (error) {
    console.error(error.message);
  }
});


//get a transaction
app.get("/transactions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await pool.query(
      "SELECT * FROM transactions WHERE Id = $1 "
    );

    res.json(transaction.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update a transaction
app.put("/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { ammount } = req.body;
    const { transactionname } = req.body;
    const { transactiondate } = req.body;
    const { transactiontype } = req.body;
    const updateTransaction = await pool.query(
      "UPDATE transactions SET TransactionName=$1, Ammount=$2, TransactionDate=$3, TransactionType=$4 WHERE Id=$5 RETURNING *",
      [transactionname, ammount, transactiondate, transactiontype, id]
    );
    res.json("Updated succesfully");
  } catch (error) {
    console.error(error.message);
  }
  
});

//delete a transaction
app.delete("/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTransaction = await pool.query(
      "DELETE FROM transactions WHERE Id=$1 RETURNING *",
      [id]
    );
    res.json("Deleted succesfully");
  } catch (error) {
    console.error(error.message);
  }
});


app.listen(port, function () {
  console.log(`Server started at http://localhost:${port}`);
});
