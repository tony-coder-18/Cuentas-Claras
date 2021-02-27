import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Records from "./components/Records";
import "./App.css";
import Balance from "./components/Balance";

function App() {

    return (
      <>
      
        <Navbar />
        <Balance/>
        <hr />
        <section className="form-container text-center">
          <Form />
        </section>
        <hr />
        <section className="text-center">
          <Records />
        </section>
      </>
    );
}

export default App;
