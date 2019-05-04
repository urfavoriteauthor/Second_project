CREATE DATABASE freelance_db;
USE freelance_db;

SELECT * FROM clients;
SELECT * FROM examples;
SELECT * FROM jobs;
SELECT * FROM reviews;
SELECT * FROM users;

INSERT INTO jobs (job_description, html, css, javascript)
VALUES ('Website for selling cars', TRUE, TRUE, TRUE);
