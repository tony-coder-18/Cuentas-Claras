import React, { useState } from "react";

function EditTransaction({ transaction, changeTrans, transactions }) {
  const [trans, setTrans] = useState({ ...transaction });
  //const [transactionsNew, setTransactionsNew] = useState([...transactions]);

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
  const handleEdit = async (e, id) => {
    
    try {
      const body = { ...trans };
      const editTrans = await fetch(
        `http://localhost:3001/transactions/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      setTrans({trans});
      
      const newTrans = transactions.map((t)=> {
        if (t.id === id) {
          return trans
        } else {
          return t
        }
      });
      //Calling the state hook of the parent component
      //to update the records list
      changeTrans(newTrans);
    } catch (error) {
      console.error(error.message);
    }
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
