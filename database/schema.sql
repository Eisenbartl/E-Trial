-- DROP DATABASE IF EXISTS juror_selection;
-- CREATE DATABASE juror_selection;
-- USE juror_selection

CREATE TABLE jurors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  age INT,
  sex TEXT,
  occupation TEXT
);

-- LOAD DATA LOCAL INFILE './jurors.csv'
-- INTO TABLE jurors
-- FIELDS TERMINATED BY ','
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS