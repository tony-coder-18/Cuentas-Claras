//Conecting to our Database w pg (database.sql has the comands for create that db)

const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "1006614832",
    host: "localhost",
    port: 5432,
    database: "transactions"
});

module.exports = pool;