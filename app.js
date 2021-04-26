const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Trojans1=',
    database: ''
});

connection.query = util.promisify(connection.query);

connection.connect((err) =>{
    if (err) throw err;
    console.log(`Connected to ${connection.threadId}`);
})