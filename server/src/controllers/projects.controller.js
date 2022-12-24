import {Transaction} from '../models/Transaction.js'
// Handle GET requests to /
export const getTransactions = async (req, res) => {
    try {
        const allTransactions = await Transaction.findAll();
        res.send(allTransactions)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Handle POST requests to /
export const postTransactions = async (req, res) => {
    const {transactionName, ammount, transactionDate, isIncome} = req.body;

    try {
        const newTransaction = await Transaction.create({
            transactionName,
            ammount,
            transactionDate,
            isIncome
        })
        res.json(newTransaction)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Handle PUT requests to /
export const updateTransaction = async (req, res) => {
    const {transactionName, ammount, transactionDate, isIncome} = req.body;

    try {
        const { id } = req.params;

        const updatedTransaction = await Transaction.findByPk(id);

        updatedTransaction.transactionName = transactionName;
        updatedTransaction.ammount = ammount;
        updatedTransaction.transactionDate = transactionDate;

        await updatedTransaction.save();

        if (isIncome) {
            res.json({message: "You can't update the 'isIncome' property"})
        } else {
            res.json(updatedTransaction);
        }
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Handle DELETE requests to /
export const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        await Transaction.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

//Get all the incomes
export const getIncomes = async () => {
    let sum = 0;
    try {
        const incomes = await Transaction.findAll({
            where: {
                isIncome: true
            }
        });

        sum = incomes.reduce((acc, obj)=>{
            return acc + obj.ammount;
        }, 0)

        return sum
    } catch (error) {
        console.log(error.message)
    }
}
//Get all the spends
export const getSpends = async () => {
    let sum = 0;
    try {
        const spends = await Transaction.findAll({
            where: {
                isIncome: false
            }
        });

        sum = spends.reduce((acc, obj)=>{
            return acc + obj.ammount;
        }, 0)

        if (sum == null) {
            sum = 0;
        }

        return sum
    } catch (error) {
        console.log(error.message)
    }
}
//Calculate available balance (incomes - spends)
export const getbalance = async (req, res) => {
    try {
        const spends = await getSpends();
        const incomes = await getIncomes();
        
        const balance = incomes - spends;
        res.json({balance: balance})
        
    } catch (error) {
        console.log(error.message)
    }
}

export const getIncomesContr = async (req, res) => {
    try {
        const incomes = await getIncomes();
        res.json({incomes: incomes})
    } catch (error) {
        console.log(error.message)
    }
}

export const getSpendsContr = async (req, res) => {
    try {
        const spends = await getSpends();
        res.json({spends: spends})
        
    } catch (error) {
        console.log(error.message)
    }
}