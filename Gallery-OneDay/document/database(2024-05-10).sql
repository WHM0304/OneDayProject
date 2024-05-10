-- OneDay summer

CREATE DATABASE summerDB;
USE summerDB;

CREATE TABLE  tbl_gallerys(
	s_id	VARCHAR(125)		PRIMARY KEY,
	s_email VARCHAR(50),
	s_password VARCHAR(250),
	s_date	VARCHAR(10)	NOT NULL	,	
	s_time	VARCHAR(10)	NOT NULL	,
	s_subject	VARCHAR(50)	NOT NULL,	
	s_content	VARCHAR(255)	NOT NULL,	
	s_origin_image	VARCHAR(255)	NOT NULL	,
	s_up_image	VARCHAR(255)	NOT NULL	
);

CREATE TABLE tbl_images(
	i_id	VARCHAR(125)		PRIMARY KEY,
	i_sid	VARCHAR(125)	NOT NULL	,
	i_origin_image	VARCHAR(255)	NOT NULL	,
	i_up_image	VARCHAR(255)	NOT NULL	,
	CONSTRAINT FK_GALLERY
	FOREIGN KEY (i_sid)
    REFERENCES tbl_gallerys(s_id) ON DELETE CASCADE
);