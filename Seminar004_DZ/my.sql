
CREATE TABLE сlassmates (
  Id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

INSERT INTO сlassmates (name, age, address) VALUES ('Ivanov', 18, 'Moscow');
INSERT INTO сlassmates (name, age, address) VALUES ('Vasichkina', 21, 'Tver');
INSERT INTO сlassmates (name, age, address) VALUES ('Petrov', 32, 'Perm');
INSERT INTO сlassmates (name, age, address) VALUES ('Sudowodowa', 29, 'Moscow');
INSERT INTO сlassmates (name, age, address) VALUES ('Panov', 26, 'Moscow');
INSERT INTO сlassmates (name, age, address) VALUES ('Sinicina', 22, 'Piter');
INSERT INTO сlassmates (name, age, address) VALUES ('Zaharov', 34, 'Moscow');
INSERT INTO сlassmates (name, age, address) VALUES ('Bajenova', 27, 'Moscow');
INSERT INTO сlassmates (name, age, address) VALUES ('Chiricow', 21, 'Magadan');
INSERT INTO сlassmates (name, age, address) VALUES ('Voropaeva', 30, 'Moscow');

SELECT name AS Фамилия
FROM сlassmates
WHERE address = 'Moscow' AND 18 <= age AND age < 30;
