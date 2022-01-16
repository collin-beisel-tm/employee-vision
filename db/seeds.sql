USE employee_vision;

INSERT INTO departments (dept_name)
VALUES
  ('Human Resources'),
  ('Information Technology'),
  ('Marketing'),
  ('Sales'),
  ('Logistics');

  INSERT INTO roles (title, salary, dept_id)
  VALUES
('HR Manager','100000',1),
('HR Analyst','70000',1),
('IT Manager','150000',2),
('IT Sr Developer','120000',2),
('Mkt Manager','120000',3),
('Mkt Analyst','100000',3),
('Sales Manager','120000',4),
('Sales Associate','100000',4),
('Logistics Manager','120000',5),
('Logistics Analyst','100000',5);

INSERT INTO employees (first_name,last_name,manager_id, roles_id)
VALUES
('Joe','Shmo',NULL,1),
('Jim','Lim',1,2),
('Kate','Late',NULL,3),
('George','Lorge',3,4),
('Larry','Ferry',NULL,5),
('Aaron','Carter',5,6),
('Corey','Chapman',NULL,7),
('Darius','Queenland',7,8),
('Will','Olson',NULL,9),
('Kenzie','Wylee',9,10);
