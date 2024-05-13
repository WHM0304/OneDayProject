import mysql from "mysql2";

const mysql_info = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "!Biz8080",
  database: "bookDB",
};

const dbCreate = {
  init: () => {
    console.log("MySQL DBMS Connection!!!");
    return mysql.createConnection(mysql_info);
  },
};

export default dbCreate;
