import React, { useEffect, useState } from "react";

function Records(props) {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const res = await fetch("http://localhost:3000/transactions");
      const jsonData = await res.json();
      console.log(jsonData);

      setTransactions(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);


  return (
    <div className="page-incomerecord">
      <h2 className="thqHeading2 page-text14">Historial</h2>
      <ul>
        {/* Function that Show each List Item from the income items array  */}
        {transactions.slice(0,10).map( (transaction) => {
          return (
            <li>
              <span>{transaction.transactionname}</span>
              <span>{transaction.ammount}</span>
              <span>{transaction.transactiondate}</span>
              <span>{transaction.transactiontype}</span>
              <button className="thqButton page-button">Edit</button>
              <button className="thqButton page-button1">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Records;
