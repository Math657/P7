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
VALUES ('mon titre', 'contenu de larticle', 'jami'),
('article2', 'super article', 'fred');


-- SOURCE C:/Users/manu_/Desktop/openclassrooms/P7/myDB.sql