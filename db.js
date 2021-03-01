const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "b1006614832",
    host: "localhost",
    port: 5432,
    database: "transactionsdb"
});

module.exports = pool;