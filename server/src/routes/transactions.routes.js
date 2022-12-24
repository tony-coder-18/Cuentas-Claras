import { Router } from "express"
import { deleteTransaction, getbalance, getIncomesContr, getSpends, getSpendsContr, getTransactions, postTransactions, updateTransaction } from "../controllers/projects.controller.js"

const router = Router()

// Handle GET requests to /
router.get('/transactions', getTransactions)

router.get('/balance', getbalance)

router.get('/incomes', getIncomesContr)

router.get('/spends', getSpendsContr)

// Handle POST requests to /
router.post('/transactions', postTransactions)

// Handle PUT requests to /
router.put('/transactions/:id', updateTransaction)

// Handle DELETE requests to /
router.delete('/transactions/:id', deleteTransaction)

export default router