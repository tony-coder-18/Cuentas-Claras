import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateTransactionMutation, useGetSumQuery } from "../api/transactions/transaction";
import { transactionAdded, transactionRemoved } from "../features/transactions/transactionsSlice.js";
import {getTransactions} from './Balance.js';

function Form() {
  const [addIncome, setaddIncome] = useState({
    transactionName: "",
    ammount: 0,
    transactionDate: "",
    isIncome: true,
  });

  function handleChange(e) {
    let newValue = e.target.value;
    
    let name = e.target.name;
    if (name === "text") {
      setaddIncome({ ...addIncome, transactionName: newValue });
    } else if (name === "number") {
      setaddIncome({ ...addIncome, ammount: newValue });
    } else if (name === "date") {
      setaddIncome({ ...addIncome, transactionDate: newValue });
    } else if (name === "select") {
      if (newValue === "Spend") {
        setaddIncome({
          ...addIncome,
          isIncome: false
        });
      } else {
        setaddIncome({ ...addIncome, isIncome: true });
      }
    }
  }
  
  const [createTransaction] = useCreateTransactionMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const body = { ...addIncome };
      createTransaction(body)
      // Reset all the fields of the form 
      setaddIncome({
        transactionName: "",
        ammount: 0,
        transactionDate: "",
        isIncome: true,
      })
    } catch (error) {
      console.error(error.message);
    }
  };

    return (
      <div className="container py-4">
        
        <h2 className="text-blue">Agregue su nueva transacción</h2>
        <form onSubmit={handleSubmit} className="col-lg-5 col-10 mx-auto mt-3">
          <div className="form-group">
            <label className="text-blue">Asunto</label>
            <input
              onChange={(e) => handleChange(e)}
              value={addIncome.transactionName}
              type="text"
              name="text"
              className="form-control"
              required={true}
            />
          </div>
          <div className="form-group">
            <label className="text-blue">Monto</label>
            <input
              onChange={(e) => handleChange(e)}
              value={addIncome.ammount}
              type="number"
              name="number"
              className="form-control"
              required={true}
              min="0" 
              onInput={"validity.valid||(value='')"}
            />
          </div>
          <div className="form-group">
            <label className="text-blue">Fecha</label>
            <input
              onChange={(e) => handleChange(e)}
              value={addIncome.transactionDate}
              type="date"
              name="date"
              className="form-control"
              required={true}
            />
          </div>
          <div className="form-group">
            <label className="text-blue">Tipo de transacción</label>
            <select
              className="form-control"
              name="select"
              onClick={(e) => handleChange(e)}
              required={true}
            >
              <option value="">--Escoger tipo--</option>
              <option value="Income">Ingreso</option>
              <option value="Spend">Gasto</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary bg-blue">
            Añadir
            <br />
          </button>
        </form>
      </div>
    );
  }

export default Form;
