import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetIncomesSumQuery, useGetSpendsSumQuery, useGetSumQuery, useGetTransactionsQuery } from "../api/transactions/transaction";

function Incomes() {

  const { data, error, isLoading } = useGetIncomesSumQuery();

  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else {
    console.log(data)
    return (
      <div className="text-success order-lg-1" >
        <h2 className="" >Ingresos</h2>
        <p className="display-5">${data.incomes}</p>
      </div>
    );
  }
}

export default Incomes;