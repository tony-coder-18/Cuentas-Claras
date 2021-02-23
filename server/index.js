const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();
const pool = require('./db');

const port = 3000;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create transaction

//get all transactions

//get a transaction


//update a transaction




app.listen(port, function(){
    console.log(`Server started at http://localhost:${port}`);
});