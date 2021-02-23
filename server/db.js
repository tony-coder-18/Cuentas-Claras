const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "b1006614832",
    host: 5432,
    database: "transactionsdb"
});

module.exports = pool;