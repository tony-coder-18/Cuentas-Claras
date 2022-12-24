import React, { useEffect, useState } from "react";
import { useGetTransactionsQuery } from "../api/transactions/transaction";
import EditTransaction from "./EditTransaction";

function Records(setSum) {
  const [transactions, setTransactions] = useState([]);

  // const getTransactions = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/transactions");
  //     const jsonData = await res.json();
  //     //console.log(jsonData)
  //     setTransactions(jsonData);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getTransactions();
  // }, []);

  // //Function for deleting a transactions (trigers with the delete button)
  // const deleteTransaction = async (id) => {
  //   try {
  //     const deleteTrans = await fetch(
  //       `http://localhost:3001/transactions/${id}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );

  //     setTransactions(
  //       transactions.filter((transaction) => transaction.id !== id)
  //     );
      
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const { data, error, isLoading } = useGetTransactionsQuery();

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
                if (transaction.transactionName == null || 
                  transaction.ammount == null || 
                  transaction.transactionDate == null ) {
                    return (
                      <tr className={rowType} key={transaction.id}>
                        <td></td>
                        <td></td>
                        <td>{transType}</td>
                        <td>
                        <EditTransaction transactions={transactions} changeTrans={setTransactions} transaction={transaction} />
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            // onClick={() => deleteTransaction(transaction.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                } else {
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
                          // onClick={() => deleteTransaction(transaction.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    );
}
}

export default Records;