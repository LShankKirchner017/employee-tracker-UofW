DROP DATABASE IF EXISTS officeEmployees_db;
CREATE DATABASE officeEmployees_db;

USE officeEmployees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (35),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT
    title VARCHAR(35) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(35) NOT NULL,
    last_name VARCHAR(35) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT default NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (manager_id) REFERENCES employee(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
)