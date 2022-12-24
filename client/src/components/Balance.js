import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetSpendsSumQuery, useGetSumQuery, useGetTransactionsQuery } from "../api/transactions/transaction";
import Incomes from "./Incomes";
import  Spends from "./Spends"

function Balance() {
  const [sum, setSum] = useState(0);
  const [incomeSum, setIncomeSum] = useState(0);
  const [spendSum, setSpendSum] = useState(0);

  const { data, error, isLoading } = useGetSumQuery();

  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else {
    return (
      <>
        <div className=" container d-flex flex-lg-row flex-column justify-content-around align-items-center text-center py-5" >
          <div className="order-lg-2 text-blue " >
            <h1 className="" >Balance</h1>
            <p className="display-4" >${data.balance}</p>
          </div>
          <Incomes />
          <Spends />
        </div>
        </>
        );
  }
}

export default Balance;
