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
    inquirer.createPromptModule([
        {name: 'name',
        type: 'input',
        message: 'Please name additional department'

        }
    ])
    .then(function(answer){
        let query = `INSERT INTO department (name) VALUES (?)`
        connection.query(query, [answer.name],
            function(err, res, fields){
                if (err) throw err
                console.log('Department addition successful!')
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
            type: 'input'
        }

    ])
}