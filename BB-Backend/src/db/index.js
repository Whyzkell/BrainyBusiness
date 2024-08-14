// db/index.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "brainybusiness",
  password: "dp17042006",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
