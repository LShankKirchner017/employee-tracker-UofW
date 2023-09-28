const connection = require('../db/connection.js')
const inquirer = require('inquirer')

const viewAllDepartments = () => {
    console.log('All Departments:')
    let query = `SELECT * FROM departments`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
        exitMenu()
    })
    console.log()
}

const addDepartment = () => {
   const answer = inquirer.prompt([
        {name: 'name',
        type: 'input',
        message: 'Please name additional department'
        }
    ])
    .then(function (answer) {
        connection.query(`INSERT INTO departments (department_name) VALUES (?)`, [answer.name],
        function (err, results, fields){
            if (err) throw err
            console.log("Department successfully added!")
            exitMenu()
        })
    })
}

const viewAllEmployees = () => {
    console.log('All Employees: ')
    let query= `SELECT * FROM employees`
    connection.query(query, (err,rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    exitMenu()
}

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "Enter employee's first name"
        },
        {
            name: 'last_name',
            type: 'input',
            message: "Enter employee's last name"
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'What is the role ID for the employee?'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'What is the Employee ID of their manager? Type 0 if no manager.'
        }
    ])
    .then(function(answer){
        const managerID = answer.manager_id === '0' ? null : answer.manager_id
        let query = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, managerID]),
        function (err,res, fields){
            if (err) throw err
            console.log('Employee Added Successfully!')
            exitMenu()
        }
    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            name: 'updateID',
            type: 'input',
            message: 'Type the ID of the employee you wish to update'
        },
        {
            name: 'first_name',
            type: 'input', 
            message: 'What is the employee first name?'
        },
        {
            name: 'last_name',
            type: 'input', 
            message: 'What is the employee last name?'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'What is the employee role ID?'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'What is the Employee ID of their manager? If no manager type 0'
        }
    ]).then ((answer) => {
        const manager_id = answer.manager_id === '0' ? null : answer.manager_id
        let query = `UPDATE employees SET first_name=?, last_name=?, role_id=?, manager_id=? WHERE ID=?`
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, manager_id, answer.updateID],
            function (err, res, fields) {
                if (err) throw err
                console.log('Employee updated successfully!')
                exitMenu()
            })
    })
}

const viewAllRoles = () => {
    console.log('All Roles:')
    let query = `SELECT * FROM roles`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    exitMenu()
}

const addRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input', 
            message: 'What is the new role title?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the starting salary of this role?'
        },
        {
            name: 'department_id',
            type: 'input',
            message: "What is the ID number of the department of the role?"
        }
    ])
    .then(function(answer){
        let query = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`
        connection.query(query, [answer.title, answer.salary, answer.department_id],
            function (err, res, fields) {
                if (err) throw err
                console.log('Role added successfully!')
                exitMenu()
            })
    })
}

const exitMenu = () => {
    connection.end()
}

module.exports= {
    viewAllDepartments,
    addDepartment,
    viewAllEmployees,
    addEmployee,
    updateEmployee,
    viewAllRoles,
    addRole,
    exitMenu,
}