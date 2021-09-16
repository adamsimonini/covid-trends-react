DROP DATABASE IF EXISTS covid_trends;

CREATE DATABASE covid_trends CHARACTER SET utf8mb4;

USE covid_trends; 

CREATE TABLE provinces (
	province_code INT NOT NULL PRIMARY KEY,
    full_name VARCHAR(35) NOT NULL,
    alpha_code VARCHAR(2) NOT NULL,
    region VARCHAR(25) NOT NULL
);

CREATE TABLE health_regions (
    hr_uid INT NOT NULL PRIMARY KEY,
    province_code INT,
    FOREIGN KEY (province_code) REFERENCES provinces (province_code),
    name_en VARCHAR(150) NOT NULL,
    name_fr VARCHAR(150) NOT NULL,
    website_en VARCHAR(300),
    website_fr VARCHAR(300)
) CHARACTER SET utf8mb4;

CREATE TABLE locations(
    forward_sortation_area VARCHAR(3) NOT NULL PRIMARY KEY,
    hr_uid INT,
    FOREIGN KEY (hr_uid) REFERENCES health_regions (hr_uid),
	province_code INT,
    FOREIGN KEY (province_code) REFERENCES provinces (province_code)
);

CREATE TABLE mobility(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hr_uid INT,
    date VARCHAR(50),
    w_o_y INT,
    year INT,
    max_dist_25 FLOAT,
    max_dist_50 FLOAT,
	max_dist_75 FLOAT,
    sum_dist_25 FLOAT,
	sum_dist_50 FLOAT,
    sum_dist_75 FLOAT,
    prop_at_home FLOAT,
    percent_stay FLOAT,
    base_max FLOAT,
    base_percent_change_max FLOAT,
	base_sum FLOAT, 
    base_percent_change_sum FLOAT,
    base_prop_at_home FLOAT,
    base_percent_change_prop_at_home FLOAT,
    base_percent_stay FLOAT,
    base_percent_change_percent_stay FLOAT,
    percent_change_prev_week_max_dist_50 FLOAT,
    percent_change_prev_week_sum_dist_50 FLOAT,
    percent_change_prev_week_prop_at_home FLOAT,
    percent_change_prev_week_percent_stay FLOAT,
    avg_num_devices FLOAT,
    sum_num_devices INT,
    mobility FLOAT,
    pct_change_mobility FLOAT,
    prev_mobility FLOAT
);

CREATE TABLE cases(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hr_uid INT,
    province VARCHAR(50),
    health_region VARCHAR(150),
    date_report VARCHAR(100),
    cases INT,
    cumulative_cases INT,
    deaths INT,
    cumulative_deaths INT,
    numtotal_last14 INT,
    numdeaths_last14 INT,
    numtotal_last7 INT,
    numdeaths_last7 INT,
    avgtotal_last7 FLOAT,
    avgdeaths_last7 FLOAT
);

