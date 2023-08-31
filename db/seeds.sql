INSERT INTO departments (department_name) VALUES
("Upper Management"),
("Management"),
("Sales"), 
("Accounting"),
("Human Resources"),
("Clerical");

INSERT INTO roles (title, salary, department_id) VALUES
("Regional Manager", 175000, 1),
("Assistant Regional Manager", 100000, 2),
("Assistant to the Regional Manager", 99999, 3),
("Sales", 850000, 4), 
("Accounting", 50000, 5),
("Secretary", 45000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Michael", "Scott", 1, null),
("Dwight K.", "Schrute", 2, 1),
("Jim", "Halpert", 2, 1),
("Andrew", "Bernard", 3, 2),
("Stanley", "Hudson", 4, 1),
("Phyllis", "Lapin-Vance", 4, 1),
("Kevin", "Malone", 5, 1),
("Angela", "Martin", 5, 1),
("Pam", "Beasley", 6, 2);