import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { transactionApi } from "./api/transactions/transaction";
import transactionsReducer from "./features/transactions/transactionsSlice"

export const store = configureStore({
    reducer: {
        [transactionApi.reducerPath]: transactionApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(transactionApi.middleware),
})

setupListeners(store.dispatch)