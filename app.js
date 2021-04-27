const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const util = require('util');
const { allowedNodeEnvironmentFlags, exit } = require('process');




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
    runSearch();
})

const runSearch = () => {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Find all Departments',
                'Find all Roles',
                'Find all Employees',
                'Add a new Department',
                'Add a new role',
                'Add a new Employee',
                'Update a current Employee',
                'Exit',
            ],
        }
    ])
    .then((answers) => {
        switch(answers.action) {
            case 'Find all Departments':
                findDepartments();
                break;
            case 'Find all Roles':
                findRoles();
                break;
            case 'Find all Employees':
                findEmployees();
                break;
            case 'Add a new Department':
                addDepartment();
                break;
            case "Add a new Role":
                addRole();
                break;
            case 'Add a new Employee':
                addEmployee();
                break;
            case 'Update a current Employee':
                updateEmployee();
                break;
            default:
                'Exit'
                exit();
                
        }
    })
};