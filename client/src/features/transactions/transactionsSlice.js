import { createSlice } from "@reduxjs/toolkit";

//transactions
// id, transactionName, ammount, transactionDate, isIncome

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: [],
    reducers: {
        transactionAdded(state, action) {
            state.push({
                id: action.payload.id,
                transactionName: action.payload.transactionName,
                ammount: action.payload.ammount,
                transactionDate: action.payload.transactionDate,
                isIncome: action.payload.isIncome
            })
        },
        transactionRemoved(state, action) {
            return state.filter((trans) => trans.id !== action.payload.id)
        }
    }
})

export const {transactionAdded, transactionRemoved} = transactionsSlice.actions
export default transactionsSlice.reducer