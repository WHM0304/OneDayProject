CREATE DATABASE bookDB;
USE bookDB;
CREATE TABLE tbl_books(
b_isbn	VARCHAR(13)		PRIMARY KEY,
b_title	VARCHAR(100)	NOT NULL	,
b_author	VARCHAR(100)	NOT NULL	,
b_publisher	VARCHAR(100)	NOT NULL,	
b_price	INT	NOT NULL	,
b_discount	INT	,	
b_description	 VARCHAR(800),		
b_pubdate	VARCHAR(10)		,
b_link	VARCHAR(125)	,	
b_image	VARCHAR(125)		
);



CREATE TABLE tbl_member(

M_ID	VARCHAR(20)		PRIMARY KEY,
M_PASSWORD	VARCHAR(125)	NOT NULL,	
M_EMAIL	VARCHAR(125)		,
M_NAME	VARCHAR(12)	NOT NULL	

);

INSERT INTO tbl_books(b_isbn,b_title,b_author,b_publisher,b_price
)
VALUES ('979118','어린왕자','생택쥐페리','솔','11000');


UPDATE tbl_books
SET b_discount = '9900'
WHERE b_isbn = '979118';