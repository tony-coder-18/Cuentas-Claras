import { Router } from "express"
import { deleteTransaction, getTransactions, postTransactions, updateTransaction } from "../controllers/projects.controller.js"

const router = Router()

// Handle GET requests to /
router.get('/transactions', getTransactions)

// Handle POST requests to /
router.post('/transactions', postTransactions)

// Handle PUT requests to /
router.put('/transactions/:id', updateTransaction)

// Handle DELETE requests to /
router.delete('/transactions/:id', deleteTransaction)

export default router