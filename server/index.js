const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();
const pool = require("./db");

const port = 3000;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create transaction
app.post("/addtrans", async (req, res) => {
  try {
    console.log(req.body);
    const { TransactionName } = req.body;
    const { Ammount } = req.body;
    const { TransactionDate } = req.body;
    const { TransactionType } = req.body;

    const newTransaction = await pool.query(
      "INSERT INTO transactions (TransactionsName, Ammount, TransactionDate, TransactionType) VALUES ($1, $2, $3, $4) RETURNING *",
      [TransactionName, Ammount, TransactionDate, TransactionType]
    );

    res.json(newTransaction.rows[0]);
    console.log(newTransaction.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all transactions
app.get("/transactions", async (req, res) => {
  try {
    const allTransactions = await pool.query("SELECT * FROM transactions");

    res.json(allTransactions.rows);
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
    const { Ammount } = req.body;
    const { TransactionName } = req.body;
    const { TransactionDate } = req.body;
    const { TransactionType } = req.body;
    const updateTransaction = await pool.query(
      "UPDATE transactions SET TransactionName=$1, Ammount=$2, TransactionDate=$3, TransactionType=$4 WHERE Id=$5 RETURNING *",
      [TransactionName, Ammount, TransactionDate, TransactionType, id]
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
