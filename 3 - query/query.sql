CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

INSERT INTO users (name, age) 
VALUES 
    ('Aline', 25),
    ('Pedro', 17),
    ('David', 30),
    ('Bruna', 18),
    ('Sara', 22);

SELECT * FROM users
WHERE age > 18;