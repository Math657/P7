SET NAMES utf8;

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
    PRIMARY KEY (id)) 
ENGINE=INNODB;

INSERT INTO Users (email, lastname, firstname, password, status)
VALUES ('ta@gmail.com', 'Dupont', 'Jami', '123', 'Actif'),
('max@gmail.com', 'Rousseau', 'Maxime', '123', 'Actif'),
('super@gmail.com', 'Berger', 'Toto', 'password', 'Actif');



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


INSERT INTO Articles (title, content, author_name, author_id)
VALUES ('Article phare', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Jami Dupont', 1),
('Un titre original', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Maxime Rousseau', 2),
('Nouveautés du jour', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'Jami Dupont', 1),
('Un autre article', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'Jami Dupont', 2);


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
(1, 1, 'Super article!', 'Jami Dupont');

CREATE USER 'manager'@'localhost' IDENTIFIED BY '7cookie7';

GRANT ALL
ON groupomania.Articles
TO 'manager'@'localhost' IDENTIFIED BY '7cookie7';

GRANT ALL
ON groupomania.Comments
TO 'manager'@'localhost' IDENTIFIED BY '7cookie7';


-- SOURCE C:/Users/manu_/Desktop/openclassrooms/P7/myDB.sql