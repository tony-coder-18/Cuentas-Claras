import React, { useState } from "react";

function EditTransaction({ transaction }) {
  const [trans, setTrans] = useState({ ...transaction });

  function handleChange(e) {
    let newValue = e.target.value;
    let name = e.target.name;
    if (name === "text") {
      setTrans({ ...trans, transactionname: newValue });
    } else {
      setTrans({ ...trans, ammount: newValue });
    }
  }

  //   Function for editing a transactions (trigers with the edit button)
  const handleEdit = async (e) => {
    
    try {
      const body = { ...trans };
      const editTrans = await fetch(
        `http://localhost:3001/transaction/${trans.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

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
                value={trans.transactionname}
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
                onClick={(e) => handleEdit(e)}
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
