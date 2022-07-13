const mysql = require("mysql2")

const db = mysql.createConnection({
    user: "root",
    password: "123456",
    host: "localhost",
    database: "bezkoder_db",
    port: "3307"
});

console.log(db)
