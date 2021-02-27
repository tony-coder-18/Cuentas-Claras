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
    console.log(trans);
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
        class="btn btn-primary bg-blue"
        data-toggle="modal"
        data-target={`#id${transaction.id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${transaction.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar transacción</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => {
                  setTrans({ ...transaction });
                }}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
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

            <div class="modal-footer">
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
