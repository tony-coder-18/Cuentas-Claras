import React from "react";

function IncomeSingleRecord(props) {
  return (
    <li>
      {" "}
      {props.name} <span>{props.amount}</span> <span>{props.name}</span>{" "}
      <button className="thqButton page-button1">Eliminar</button>
    </li>
  );
}

export default IncomeSingleRecord;
