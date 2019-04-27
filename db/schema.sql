CREATE DATABASE MasterKey_db;

USE MasterKey_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first VARCHAR(30),
    last VARCHAR(30),
    email VARCHAR(45),
    admin BOOLEAN DEFAULT FALSE,
    created_at DATETIME,
    updated_at DATETIME
);

CREATE TABLE Building (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    address TEXT(100),
    city VARCHAR(75),
    state VARCHAR(50),
    zip INT(10),
    created_at DATETIME,
    updated_at DATETIME
);

CREATE TABLE Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount INT(6),
    date DATETIME,
    details Text(100),
    created_at DATETIME,
    updated_at DATETIME,
    user_id INT(5) FOREIGN KEY,
    building_id INT(5) FOREIGN KEY
)

CREATE TABLE Requests(
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50),
    created_at DATETIME,
    updated_at DATETIME,
    details VARCHAR(100),
    user_id INT(5) FOREIGN KEY,
    building_id INT(5) FOREIGN KEY,
)
