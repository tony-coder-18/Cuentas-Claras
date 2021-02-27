import React, { useEffect, useState } from "react";
import EditTransaction from "./EditTransaction";

function Records() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const res = await fetch("http://localhost:3001/transactions");
      const jsonData = await res.json();

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
        `http://localhost:3001/transaction/${id}`,
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

  return (
    <div className="container py-4">
      <h2 className="text-blue">Historial</h2>

      <table class="table table-hover">
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
          {transactions
            .slice(transactions.length - 10, transactions.length)
            .map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.transactionname}</td>
                  <td>${transaction.ammount}</td>
                  <td>{transaction.transactiontype}</td>
                  <td>
                  <EditTransaction transaction={transaction} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTransaction(transaction.id)}
                    >
                      Delete
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
