import React, { useState } from "react";
import IncomeForm from "./IncomeForm";

import IncomeSingleRecord from "./IncomeSingleRecord";

function Records(props) {
  console.log(props.list);
  return (
    <div className="page-incomerecord">
      <h2 className="thqHeading2 page-text14">Historial</h2>
      <ul>
        {/* Function that Show each List Item from the income items array  */}
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button className="thqButton page-button">Edit</button>
          <button className="thqButton page-button1">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default Records;
