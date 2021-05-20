DROP DATABASE IF EXISTS covid_trends;

CREATE DATABASE covid_trends CHARACTER SET utf8mb4;

USE covid_trends; 

CREATE TABLE provinces (
	province_code INT NOT NULL PRIMARY KEY, -- natural primary key
    full_name VARCHAR(35) NOT NULL,
    alpha_code VARCHAR(2) NOT NULL, -- abbreviation of province name but without periods
    region VARCHAR(25) NOT NULL
);

CREATE TABLE health_regions (
    hr_uid INT NOT NULL PRIMARY KEY, -- natural primary key
    province_code INT,
    FOREIGN KEY (province_code) REFERENCES provinces (province_code),
    name_en VARCHAR(150) NOT NULL,
    name_fr VARCHAR(150) NOT NULL
) CHARACTER SET utf8mb4;

CREATE TABLE locations(
    forward_sortation_area VARCHAR(3) NOT NULL PRIMARY KEY, -- natural primary key
    hr_uid INT,
    FOREIGN KEY (hr_uid) REFERENCES health_regions (hr_uid),
	province_code INT,
    FOREIGN KEY (province_code) REFERENCES provinces (province_code)
);
