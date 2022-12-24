import React, { useEffect, useState } from "react";
import { useDeleteTransactionMutation, useGetTransactionsQuery } from "../api/transactions/transaction";
import EditTransaction from "./EditTransaction";

function Records() {
  const [transactions, setTransactions] = useState([]);

  const { data, error, isLoading } = useGetTransactionsQuery();

  const [deleteTransaction] = useDeleteTransactionMutation();

  let transType, rowType;

  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else {
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
            {data.map((transaction) => {
              if (transaction.isIncome) {
                transType = "Ingreso"
                rowType = "table-success"
              } else {
                transType = "Egreso"
                rowType = "table-danger"
              };
              //Check if some value is missing to show nothing if that's the case
              return (
                <tr className={rowType} key={transaction.id}>
                  <td>{transaction.transactionName == null ? "" : transaction.transactionName}</td>
                  <td> {transaction.ammount == null ? "" : transaction.ammount}</td>
                  <td>{transType}</td>
                  <td>
                    <EditTransaction transaction={transaction} />
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
}

export default Records;