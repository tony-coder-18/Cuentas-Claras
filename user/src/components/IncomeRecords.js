import React, {useState} from "react";
import IncomeForm from "./IncomeForm";

import IncomeSingleRecord from "./IncomeSingleRecord";



function IncomeRecords(props) {
  
  console.log(props.list);
  return (
    <div className="page-incomerecord">
      <h2 className="thqHeading2 page-text14">Historial de Ingresos</h2>
        <ul>
        {/* Function that Show each List Item from the income items array  */}
        
        </ul>
        
      
    </div>
  );
}

export default IncomeRecords;
