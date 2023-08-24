const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'local host',
    user: 'root',
    password: 'root1234',
    database: ''
})

module.exports = connection