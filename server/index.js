const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();

const port = 3000;

//middleware
app.use(cors());
app.use(express.json());


app.listen(port, function(){
    console.log(`Server started at http://localhost:${port}`);
});