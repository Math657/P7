SET NAMES utf8;

SET @@session.time_zone = "+00:00";

DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Articles;
DROP TABLE IF EXISTS Users;


CREATE TABLE Users (
    id SMALLINT UNSIGNED UNIQUE NOT NULL AUTO_INCREMENT,
    email VARCHAR(70) UNIQUE,
    lastname VARCHAR(40) NOT NULL,
    firstname VARCHAR(40) NOT NULL,
    password VARCHAR(70),
    status VARCHAR(30),
    type VARCHAR(30),
    PRIMARY KEY (id)) 
ENGINE=INNODB;

INSERT INTO Users (email, lastname, firstname, password, status, type)
VALUES ('jami@gmail.com', 'Dupont', 'Jami', '$2b$10$/pIt.3Kk.RnaUj35wt6SFuQLvyKBCWBP9S2E/Ts99C0INqZ6q111O', 'Actif', 'user'),
('maxime@gmail.com', 'Rousseau', 'Maxime', '$2b$10$/pIt.3Kk.RnaUj35wt6SFuQLvyKBCWBP9S2E/Ts99C0INqZ6q111O', 'Actif', 'user'),
('toto@gmail.com', 'Berger', 'Toto', '$2b$10$/pIt.3Kk.RnaUj35wt6SFuQLvyKBCWBP9S2E/Ts99C0INqZ6q111O', 'Actif', 'user'),
('admin@gmail.com', 'Admin', 'Chargé de communication', '$2b$10$b85Z69bXIAMjSuwx6//yL.b9/NqtoyC23FKQwpiywXSS4zbtn/mmq', 'Actif', 'admin');



CREATE TABLE Articles (
    article_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    author_id SMALLINT UNSIGNED NOT NULL,
    author_name VARCHAR(80) NOT NULL,
    createdAt DATETIME default CURRENT_TIMESTAMP,
    PRIMARY KEY (article_id),
    CONSTRAINT fk_author_article FOREIGN KEY (author_id)
        REFERENCES Users (id)
    )
ENGINE=INNODB;


INSERT INTO Articles (title, author_name, author_id, content)
VALUES ('Article phare', 'Jami Dupont', 1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
('Un titre original', 'Maxime Rousseau', 2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
('Nouveautés du jour', 'Toto Berger', 3, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
('Un autre article', 'Maxime Rousseau', 2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');



CREATE TABLE Comments (
    article_id SMALLINT UNSIGNED NOT NULL,
    comment_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    author_id SMALLINT UNSIGNED NOT NULL,
    author_name VARCHAR(80) NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME default CURRENT_TIMESTAMP,
    PRIMARY KEY (comment_id),
    CONSTRAINT fk_article_id FOREIGN KEY (article_id)
        REFERENCES Articles(article_id),
    CONSTRAINT fk_user_id FOREIGN KEY (author_id)
        REFERENCES Users (id)
    )
ENGINE=INNODB;

INSERT INTO Comments (author_id, article_id, content, author_name)
VALUES (1, 2, 'Article très intéressant!', 'Jami Dupont'),
(2, 1, 'Un commentaire!', 'Maxime Rousseau'),
(3, 1, 'Génial!', 'Toto Berger'),
(2, 2, 'Pertinent...', 'Maxime Rousseau'),
(1, 3, 'Un peu court', 'Jami Dupont'),
(3, 2, 'Intéressant', 'Toto Berger');


-- SOURCE C:/Users/manu_/Desktop/openclassrooms/P7/myDB.sql