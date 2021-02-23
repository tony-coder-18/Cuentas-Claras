import React from "react";

function SpendForm() {
  return (
    <form className="page-spendform">
      <label className="page-text10" for="nameSpendInput">
        Asunto
      </label>
      <input
        type="text"
        className="thqTextInput page-textinput3"
        id="nameSpendInput"
      />
      <label className="page-text10" for="amountSpendInput">
        Monto
      </label>
      <input
        type="text"
        className="thqTextInput page-textinput4"
        id="amountSpendInput"
      />
      <label className="page-text10" for="dateSpendInput">
        Fecha
      </label>
      <input
        type="text"
        className="thqTextInput page-textinput5"
        id="dateSpendInput"
      />
      <button className="thqButton page-button1">
        Añade un Gasto
        <br data-type="br" />
      </button>
    </form>
  );
}

export default SpendForm;
