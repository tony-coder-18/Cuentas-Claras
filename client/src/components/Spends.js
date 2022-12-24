import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetSpendsSumQuery, useGetSumQuery, useGetTransactionsQuery } from "../api/transactions/transaction";

function Spends() {

    const { data, error, isLoading } = useGetSpendsSumQuery();

    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>{error}</div>
    } else {
        return (
            <div className="text-danger order-lg-3" >
                <h2 className="" >Gastos</h2>
                <p className="display-5">${data.spends}</p>
            </div>
        );
    }
}

export default Spends;
