SET NAMES utf8;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(70),
    nom VARCHAR(40) NOT NULL,
    prenom VARCHAR(40) NOT NULL,
    password VARCHAR(70),
    status VARCHAR(30),
    PRIMARY KEY (id)) 
ENGINE=INNODB;

INSERT INTO Users (email, nom, prenom, password, status)
VALUES ('test@gmail.com', 'douba', 'jami', '123', 'Actif');

