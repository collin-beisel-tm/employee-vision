INSERT INTO departments (dept_name)
VALUES
  ('Human Resources'),
  ('Information Technology'),
  ('Marketing'),
  ('Sales'),
  ('Logistics');

  INSERT INTO roles (title, salary, department_id)
  VALUES
('HR Manager','100,000',1),
('HR Analyst','70,000',1),
('IT Manager','150,000',2),
('IT Sr Developer','120,000',2),
('Mkt Manager','120,000',3),
('Mkt Analyst','100,000',3),
('Sales Manager','120,000',4),
('Sales Associate','100,000',4),
('Logistics Manager','120,000',5),
('Logistics Analyst','100,000',5);

INSERT INTO employees (first_name,last_name)
VALUES
('Joe','Shmo',1,null),
('Jim','Lim',2,1),
('Kate','Late',3,null),
('George','Lorge',4,3),
('Larry','Ferry',5,null),
('Aaron','Carter',6,5),
('Corey','Chapman',7,null),
('Darius','Queenland',8,7),
('Will','Olson',9,null),
('Kenzie','Wylee',10,9);
