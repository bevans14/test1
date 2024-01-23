const express = require('express');
const cors = require('cors');
const mysql2 = require("mysql2");

const app = express();
app.use(cors());

// const mysql = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  database: "MeowMatchmaker1",
  user: "root",
  password: "password",
  
});


app.get('/', (req, res) => {
    return res.json("from backend side");
});

app.get('/users',(req,res)=> {
    const sql = "SELECT * from cats";
    db.query(sql, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
})
})

app.listen(4001, () => {
    console.log("listening");
});
