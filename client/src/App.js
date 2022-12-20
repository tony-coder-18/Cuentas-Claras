import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Records from "./components/Records";
import "./App.css";
import Balance from "./components/Balance";
import Footer from "./components/Footer";

function App() {

  /*
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
        <Footer/>
      </>
    );
    */

    return (
      <>
        <Navbar />
        <section className="text-center">
          <Records />
        </section>
        <Footer/>
      </>
    );
}

export default App;
