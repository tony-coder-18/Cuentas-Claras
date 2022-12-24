import React, { useState } from "react";
import { useEditTransactionMutation } from "../api/transactions/transaction";

function EditTransaction({ transaction, changeTrans, transactions }) {
  const [trans, setTrans] = useState({ ...transaction });
  //const [transactionsNew, setTransactionsNew] = useState([...transactions]);

  const [editTransaction] = useEditTransactionMutation();

  function handleChange(e) {
    let newValue = e.target.value;
    let name = e.target.name;
    if (name === "text") {
      setTrans({ ...trans, transactionName: newValue });
    } else {
      setTrans({ ...trans, ammount: newValue });
    }
    
  }

  //   Function for editing a transactions (trigers with the edit button)
  const handleEdit = (e, id) => {
    const body = { ...trans };
    
    editTransaction(body);
  };

  /*const updateRecordList = () => {
    changeTrans([...transactions, trans])
  }*/

  return (
    <>
      <button
        type="button"
        className="btn btn-primary bg-blue"
        data-toggle="modal"
        data-target={`#id${transaction.id}`}
      >
        Editar
      </button>

      <div className="modal" id={`id${transaction.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar transacción</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setTrans({ ...transaction });
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <label htmlFor="textInput" className="page-text07">Asunto</label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                value={trans.transactionName}
                type="text"
                name="text"
                className="form-control"
                
              />
              <label htmlFor="numberInput" className="page-text08">Monto ($)</label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                value={trans.ammount}
                type="number"
                name="number"
                className="form-control"
                
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={(e) => {
                  handleEdit(e, transaction.id)
                }}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  setTrans({ ...transaction });
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTransaction;
