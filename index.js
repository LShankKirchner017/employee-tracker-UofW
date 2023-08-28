const connection = require('./db/connection.js')
const inquirer = require('inquirer')


inquirer.createPromptModule({
    type: 'list',
    name: 'userSelection',
    message: 'What would you like to do?',
    choices: [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role'
            ],
    default: 'view all departments'
}) .then((answers) => {

}) .catch (err) {
    console.log(err)
}