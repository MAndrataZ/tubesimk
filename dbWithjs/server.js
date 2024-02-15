const express = require("express")
const mysql = require("mysql")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

const db = mysql.createConnection({
    host: "localhost",
    database: "mzmapps",
    user: "root",
    password: "", 
});

db.connect((err) =>{
    if (err) throw err
    console.log('database connected...')
    
    const sql = "SELECT * FROM barang"
    db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result))
        console.log('hasil database -> ', users)
        app.get("/", (req, res) => {
            res.render("barang", {users: users, tittle: "DAFTAR BAHAN BAKU"})
        })
    }) 
})

app.listen(7000, () => {
    console.log("server ready...")
})