SET NAMES utf8;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Articles;

CREATE TABLE Users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(70) UNIQUE,
    lastname VARCHAR(40) NOT NULL,
    firstname VARCHAR(40) NOT NULL,
    password VARCHAR(70),
    status VARCHAR(30),
    -- createddAt DATETIME,
    -- updatedAt DATETIME,
    PRIMARY KEY (id)) 
ENGINE=INNODB;

INSERT INTO Users (email, lastname, firstname, password, status)
VALUES ('ta@gmail.com', 'Mathieu', 'jami', '123', 'Actif');



CREATE TABLE Articles (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    author VARCHAR(40) NOT NULL,
    createdAt DATETIME default CURRENT_TIMESTAMP,
    PRIMARY KEY (id))
ENGINE=INNODB;

INSERT INTO Articles (title, content, author)
VALUES ('mon titre', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'jami'),
('article2', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'fred');


-- SOURCE C:/Users/manu_/Desktop/openclassrooms/P7/myDB.sql