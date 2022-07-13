const mysql = require("mysql2")

const db = mysql.createConnection({
    user: "test",
    password: "test_pass",
    host: "localhost",
    database: "test_db"
});

console.log(db)
