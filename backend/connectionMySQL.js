require("dotenv").config
const mysql = require("mysql2")

const connectionMySQL = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
})

connectionMySQL.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err)
  } else {
    console.log("Conecction successful", process.env.MYSQL_DATABASE)
  }
})
module.exports = connectionMySQL
