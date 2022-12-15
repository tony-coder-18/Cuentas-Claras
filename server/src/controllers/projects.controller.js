import {Transaction} from '../models/Transaction.js'
// Handle GET requests to /
export const getTransactions = (req, res) => {
    res.send('Hello, world!')
}

// Handle POST requests to /
export const postTransactions = async (req, res) => {

    const {transactionName, ammount, transactionDate, transactionType} = req.body;

    const newTransaction = await Transaction.create({
        transactionName,
        ammount,
        transactionDate,
        transactionType
    })

    res.send(newTransaction)
}

// Handle PUT requests to /
export const putTransaction = (req, res) => {
    res.send('Got a PUT request')
}

// Handle DELETE requests to /
export const deleteTransaction = (req, res) => {
    res.send('Got a DELETE request')
}