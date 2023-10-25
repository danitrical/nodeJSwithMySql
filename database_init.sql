CREATE DATABASE products_app;

CREATE TABLE products (
 id int PRIMARY KEY AUTO_INCREMENT,
 name varchar(255) not null,
 price float unique not null,
 description varchar(255),
 imageUrl varchar(255),
 quantity int not null
);

-- Will be used in next part
-- CREATE TABLE users (
--  id int PRIMARY KEY AUTO_INCREMENT,
--  name varchar(255) not null,
--  email varchar(255) unique not null,
--  phone bigint unique not null,
--  gender varchar(255) not null,
--  password varchar(255) not null
-- );