const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'sakila' 
});

app.get('/', (req,res) => {
    res.send('<h1>porra</h1>')
});