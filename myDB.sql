SET NAMES utf8;

DROP TABLE IF EXISTS Users;

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

-- INSERT INTO Users (email, lastname, firstname, password, status)
-- VALUES ('test@gmail.com', 'douba', 'jami', '123', 'Actif');

-- SOURCE C:/Users/manu_/Desktop/openclassrooms/P7/myDB.sql