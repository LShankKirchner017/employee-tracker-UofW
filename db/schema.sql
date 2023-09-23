DROP DATABASE IF EXISTS officeEmployees_db;
CREATE DATABASE officeEmployees_db;

USE officeEmployees_db;

CREATE TABLE departments (
    id INTEGER NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (35),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(35) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(35) NOT NULL,
    last_name VARCHAR(35) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT default NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
)