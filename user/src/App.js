import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Incomes from './components/Incomes'
import Balance from './components/Balance'
import Spends from './components/Spends'
import IncomeForm from './components/IncomeForm'
import SpendForm from './components/SpendForm'
import IncomeRecords from './components/IncomeRecords'
import SpendRecords from './components/SpendRecords'
import './App.css'


function App() {

  return (
    <div className="page-container">
      <Navbar />
      <header className="page-container2">
        <Incomes />
        <Balance />
        <Spends />
      </header>
      <section className="page-container3">
        <IncomeForm />
        <SpendForm />
      </section>
      
    </div>
  )
}

export default App
