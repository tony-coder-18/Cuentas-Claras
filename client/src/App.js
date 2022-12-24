import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Records from "./components/Records";
import "./App.css";
import Balance from "./components/Balance";
import Footer from "./components/Footer";

function App() {

    return(
      <>
        <Navbar />
        <Balance/>
        <Form />
        <Records />
        <Footer/>
      </>
    )
}

export default App;
