drop table ans, qs, pics;
-- DROP DATABASE QNA;

-- CREATE DATABASE QNA;

CREATE TABLE qs(
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  product_id int,
  body VARCHAR(1000),
  date_written bigint,
  asker_name CHAR(60),
  asker_email CHAR(60),
  reported int DEFAULT 0,
  helpful int DEFAULT 0
);

CREATE TABLE ans(
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  question_id int references qs(id),
  body VARCHAR(1000),
  date_written bigint,
  answerer_name CHAR(60),
  answerer_email CHAR(60),
  reported int DEFAULT 0,
  helpful int DEFAULT 0
);

CREATE TABLE pics(
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  answer_id int references ans(id),
  url VARCHAR(1000)
);

COPY qs FROM '/Users/elliehunt/Downloads/questions.csv'
DELIMITER ','
CSV HEADER;

COPY ans FROM '/Users/elliehunt/Downloads/answers.csv'
DELIMITER ','
CSV HEADER;

COPY pics FROM '/Users/elliehunt/Downloads/answers_photos.csv'
DELIMITER ','
CSV HEADER;

ALTER TABLE IF EXISTS qs
    ALTER COLUMN id RESTART SET START 3518964;

ALTER TABLE IF EXISTS ans
    ALTER COLUMN id RESTART SET START 6879307;

ALTER TABLE IF EXISTS pics
    ALTER COLUMN id RESTART SET START 2063760;
