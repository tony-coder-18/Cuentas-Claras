import React, { useState, useEffect } from "react";

function Balance() {
  const [sum, setSum] = useState({});
  const [incomeSum, setIncomeSum] = useState({});
  const [spendSum, setSpendSum] = useState({});

  const getTransactions = async () => {
    try {
      const res = await fetch("http://localhost:3001/sum");
      const jsonData = await res.json();

      setSum(...jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getIncomes = async () => {
    try {
      const res = await fetch("http://localhost:3001/incomesum");
      const jsonIncomeData = await res.json();
     
      setIncomeSum(...jsonIncomeData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getSpends = async () => {
    try {
      const res = await fetch("http://localhost:3001/spendsum");
      const jsonSpendData = await res.json();

      setSpendSum(...jsonSpendData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTransactions();
    getIncomes();
    getSpends();
  }, []);

  return (
    <div className="container d-flex flex-lg-row flex-column justify-content-around align-items-center text-center py-5" >
      <div className="order-lg-2 text-blue " >
        <h1 className="" >Balance</h1>
        <p className="display-4" >${sum.sum}</p>
      </div>
      <div className="text-success order-lg-1" >
        <h2 className="" >Ingresos</h2>
        <p className="display-5">${incomeSum.sum}</p>
      </div>
      <div className="text-danger order-lg-3" >
        <h2 className="" >Gastos</h2>
        <p className="display-5">${spendSum.sum}</p>
      </div>
    </div>
  );
}

export default Balance;
