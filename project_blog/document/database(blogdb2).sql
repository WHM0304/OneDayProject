CREATE DATABASE blogdb2;
use blogdb2;

DROP TABLE tbl_notice;
CREATE TABLE tbl_notice(
n_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
n_uid VARCHAR(25),
n_title	VARCHAR(20)	NOT NULL	,
n_div	VARCHAR(2)	NOT NULL	
);

DROP TABLE tbl_post;
CREATE TABLE tbl_post(
p_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
p_uid	VARCHAR(25)		,
p_nseq	BIGINT	NOT NULL	,
p_date	VARCHAR(10)		,
p_time	VARCHAR(10)	,
p_title	VARCHAR(30)	NOT NULL	,
p_content VARCHAR(255) ,
p_image	VARCHAR(255)		

);



-- 외래키 설정
ALTER TABLE tbl_post
ADD CONSTRAINT FK_P_NSEQ
FOREIGN KEY (p_nseq)
REFERENCES tbl_notice(n_seq);


ALTER TABLE tbl_post
ADD CONSTRAINT FK_P_UID
FOREIGN KEY (p_uid)
REFERENCES tbl_user(u_id);

ALTER TABLE tbl_notice
ADD CONSTRAINT FK_N_UID
FOREIGN KEY (n_uid)
REFERENCES tbl_user(u_id);

