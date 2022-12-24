import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const transactionApi = createApi({
    reducerPath: 'transactionApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
      getTransactions: builder.query({
        query: () => `transactions`,
        providesTags: ['Transactions'],
      }),
      createTransaction: builder.mutation({
        query: (newTrans) => ({
            url: 'transactions',
            method: 'POST',
            body: newTrans
        }),
        invalidatesTags: ['Transactions', 'Sum', 'IncomesSum', 'SpendsSum']
      }),
      getSum: builder.query({
        query: () => 'balance',
        providesTags: ['Sum']
      }),
      getIncomesSum: builder.query({
        query: () => 'incomes',
        providesTags: ['IncomesSum']
      }),
      getSpendsSum: builder.query({
        query: () => 'spends',
        providesTags: ['SpendsSum']
      }),
    }),
  })

export const { 
    useGetTransactionsQuery, 
    useCreateTransactionMutation, 
    useGetSumQuery,
    useGetIncomesSumQuery,
    useGetSpendsSumQuery,
} = transactionApi;