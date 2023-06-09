-- create
CREATE TABLE employee (
  Id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO employee (name, dept) VALUES ('Clark', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Dave', 'Accounting');
INSERT INTO employee (name, dept) VALUES ('Ava', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Adam', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Mark', 'Sales');
INSERT INTO employee (name, dept) VALUES ('German', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Sten', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Ada', 'Sales');

-- fetch 
SELECT id, name AS имя 
FROM employee 
WHERE dept = 'Sales' AND id < 8 AND name LIKE '%a%' OR name = 'Dave'
ORDER BY name;