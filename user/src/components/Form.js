import React, { useState } from "react";

function Form() {
  const [addIncome, setaddIncome] = useState({
    transactionname: "",
    Ammount: 0,
    TransactionDate: "",
    TransactionType: "",
  });

  function handleChange(e) {
    let newValue = e.target.value;
    let negativeAmmount = -1 * Math.abs(addIncome.Ammount);
    console.log(negativeAmmount);
    let name = e.target.name;
    if (name === "text") {
      setaddIncome({ ...addIncome, transactionname: newValue });
    } else if (name === "number") {
      setaddIncome({ ...addIncome, Ammount: newValue });
    } else if (name === "date") {
      setaddIncome({ ...addIncome, TransactionDate: newValue });
    } else if (name === "select") {
      if (newValue === "Spend") {
        setaddIncome({
          ...addIncome,
          Ammount: negativeAmmount,
          TransactionType: newValue
        });
      } else {
        setaddIncome({ ...addIncome, TransactionType: newValue });
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...addIncome };
      console.log(body);
      const res = await fetch("http://localhost:3001/addtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
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
            value={addIncome.name}
            type="text"
            name="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-blue">Monto</label>
          <input
            onChange={(e) => handleChange(e)}
            value={addIncome.amount}
            type="number"
            name="number"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-blue">Fecha</label>
          <input
            onChange={(e) => handleChange(e)}
            value={addIncome.date}
            type="date"
            name="date"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-blue">Tipo de transacción</label>
          <select
            className="form-control"
            name="select"
            onClick={(e) => handleChange(e)}
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
