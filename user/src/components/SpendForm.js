import React, { useState } from "react";

function SpendForm() {
    const [addIncome, setaddIncome] = useState({ transactionname: "", Ammount: 0, TransactionDate: "", TransactionType: "outcome"});
    // const [addIncomeList, setaddIncomeList] = useState([]);
    const [nameTest, setNameTest] = useState("initialState");
  
    function handleChange(e) {
      let newValue = e.target.value;
      let name = e.target.name;
      if (name === "text") {
        setaddIncome({ ...addIncome, transactionname: newValue });
      } else if (name === "number") {
        setaddIncome({ ...addIncome, Ammount: newValue });
      } else {
        setaddIncome({ ...addIncome, TransactionDate: newValue });
      }
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        
        const body = { ...addIncome };
        console.log(body);
        const res = await fetch("http://localhost:3000/addtrans", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        });
        console.log(res);
      } catch (error) {
        console.error(error.message);
      }
    };

    return (
      <div className="page-incomeform">
        <form onSubmit={handleSubmit} className="page-incomeform">
          <label className="page-text10">Asunto</label>
          <input
            onChange={(e) => handleChange(e)}
            value={addIncome.name}
            type="text"
            name="text"
            className="thqTextInput page-textinput"
          />
          <label className="page-text10">Monto</label>
          <input
            onChange={handleChange}
            value={addIncome.amount}
            type="number"
            name="number"
            className="thqTextInput page-textinput1"
          />
          <label className="page-text10">Fecha</label>
          <input
            onChange={handleChange}
            value={addIncome.date}
            type="date"
            name="date"
            className="thqTextInput page-textinput2"
          />
          <button type="submit" className="thqButton page-button1">
            Añade un Gasto
            <br />
          </button>
        </form>
      </div>
    );
  
}

export default SpendForm;
