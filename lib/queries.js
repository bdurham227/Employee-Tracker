// const mysql = require('mysql');





// const findDepartments = async () => {
//     console.log("----------");
//     await connection.query(
//       `SELECT
//            id, 
//            name AS Department 
//        FROM departments`,
//       (err, res) => {
//         if (err) throw err;
//         console.table(res);
//         runSearch();
//       }
//     );
//   };

// const findRoles = async () => {
//     console.log("--------------");
//     await connection.query(
//       `SELECT 
//           id AS 'Employee ID',
//           title AS Position,
//           salary,
//           department_id AS 'Department ID'
//       FROM roles;`,
//       (err, res) => {
//         if (err) throw err;
//         console.table(res);
//         runSearch();
//       }
//     );
//   };
  
//   const findEmployees = async () => {
//     console.log("--------------------");
//     await connection.query(
//       `SELECT 
//           id,
//           Concat(first_name, " ", last_name) AS 'Employee Name',
//           role_id AS 'Work ID',
//           manager_id
//       FROM employees;`,
  
//       (err, res) => {
//         if (err) throw err;
//         console.table(res);
//         runSearch();
//       }
//     );
//   };