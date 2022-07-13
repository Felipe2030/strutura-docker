const mariadb = require("mariadb")

var pool = mariadb.createPool({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "Password123!"
});

(async () => {
    const db = await pool.getConnection();
    const result = await db.query("CREATE DATABASE db_teste;");
    console.log(result)
})()
