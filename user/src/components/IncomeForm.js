import React, {useState} from "react";
import IncomeRecords from "./IncomeRecords";
import IncomeSingleRecord from "./IncomeSingleRecord";

function IncomeForm() {

  const [addIncome, setaddIncome] = useState({name: "", amount: 0, date: ""});
  const [addIncomeList, setaddIncomeList] = useState([]);
    

  function handleChange(e) {
    let newValue = e.target.value;
    let type = e.target.name;
    if (type === "text") {
      setaddIncome({...addIncome, name: newValue})
    } else if (type === "number") {
      setaddIncome({...addIncome, amount: newValue})
    } else {
      setaddIncome({...addIncome, date: newValue})
    };
  };

  function handleSubmit(e) {
    e.preventDefault();
    setaddIncomeList([...addIncomeList, addIncome]);
  };


  return (
    <div className="page-incomeform">
      <form onSubmit={handleSubmit} className="page-incomeform">
        <label className="page-text07">Asunto</label>
        <input onChange={(e)=>handleChange(e)} type="text" name="text" className="thqTextInput page-textinput" />
        <label className="page-text08">Monto</label>
        <input onChange={handleChange} type="number" name="number" className="thqTextInput page-textinput1" />
        <label className="page-text09">Fecha</label>
        <input onChange={handleChange} type="date" name="date" className="thqTextInput page-textinput2" />
        <button type="submit" className="thqButton page-button">
          Añade un Ingreso
          <br />
        </button>
      </form>
      <div className="page-incomerecord">
        <h2 className="thqHeading2 page-text14">Historial de Ingresos</h2>
          <ul>
            {addIncomeList.map((el)=>{return <IncomeSingleRecord name={el.name} amount={el.amount} date={el.date}/>})}
          </ul>
      </div>
    </div>
  );
}

export default IncomeForm; 
