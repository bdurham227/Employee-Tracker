USE employee_tracker_db;

INSERT INTO departments (name)
 VALUES ('Manager'),
 ('Sales'),
 ('Tech'),
 ('Accountant'),
 ('Intern');

 INSERT INTO roles (title, salary, department_id) 
 VALUES ('Manager', 100000, 1),
 ('Sales', 70000, 2),
 ('Tech', 85000, 3),
 ('Accountant', 60000, 4),
 ('Intern', 25000, 5);

 INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES ('Vitorino', 'Castro', 1, 1),
  ('Brittany', 'Bradford', 2, null),
  ('Roberto', 'Masis', 5, null),
  ('Eduardo', 'Troian', 2, null),
  ('Patrick', 'Durham', 4, null),
  ('Steven', 'Oliver', 5, null),
  ('Hector', 'Oliver', 2, null),
  ('Ricky', 'Iverson', 2, null),
  ('Dylan', 'Jones', 3, null),
  ('Jordan', 'Jones', 3, null),
  ('Craig', 'Stevenson', 2, null),
  ('Josh', 'Gozdal', 2, null),
  ('Colin', 'Iverson', 2, null),
  ('Theodore', 'Decker', 4, null); 

