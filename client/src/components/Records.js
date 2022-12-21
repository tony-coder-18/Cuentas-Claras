import React, { useEffect, useState } from "react";
import EditTransaction from "./EditTransaction";

function Records() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const res = await fetch("http://localhost:3001/transactions");
      const jsonData = await res.json();
      //console.log(jsonData)
      setTransactions(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  //Function for deleting a transactions (trigers with the delete button)
  const deleteTransaction = async (id) => {
    try {
      const deleteTrans = await fetch(
        `http://localhost:3001/transactions/${id}`,
        {
          method: "DELETE",
        }
      );

      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
      
    } catch (error) {
      console.error(error.message);
    }
  };

  let transType, rowType;

  return (
    <div className="container py-4">
      <h2 className="text-blue">Historial</h2>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Asunto</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {/* Function that Show each Table row (each transaction) from the transactions array  */}
          {transactions.map((transaction) => {
              if (transaction.isIncome) {
                transType = "Ingreso"
                rowType = "table-success"
              } else {
                transType = "Egreso"
                rowType = "table-danger"
              };
              return (
                <tr className={rowType} key={transaction.id}>
                  <td>{transaction.transactionName.charAt(0).toUpperCase()+transaction.transactionName.slice(1)}</td>
                  <td>${transaction.ammount}</td>
                  <td>{transType}</td>
                  <td>
                  <EditTransaction transactions={transactions} changeTrans={setTransactions} transaction={transaction} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTransaction(transaction.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
