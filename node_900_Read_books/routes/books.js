import express from "express";
import DB from "../config/mysql.js";
const dbConn = DB.init();

const router = express.Router();

router.get("/", (req, res) => {
  const sql = " SELECT * FROM tbl_books";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result);
      return res.render("books/list", { bList: result });
    }
  });
});

router.get("/add", (req, res) => {
  res.render("./books/add");
});

router.get("/sign_up", (req, res) => {
  res.render("./books/sign_up");
});

router.get("/:b_isbn/detail", (req, res) => {
  // 주소에 포함되어 전달된 값을 변수에 저장학
  const b_isbn = req.params.b_isbn;
  const params = [b_isbn];
  const sql = " SELECT * FROM tbl_books WHERE b_isbn = ? ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result);
      return res.render("books/detail", { BTD: result[0] });
    }
  });
});

router.post("/add", (req, res) => {
  // form 을 통해 전달된(전송된) 데이터를 (임시)변수에 저장해 두기
  const b_isbn = req.body.isbn;
  const b_title = req.body.title;
  const b_author = req.body.author;
  const b_publisher = req.body.publisher;
  const b_price = req.body.price;
  const b_discount = `${req.body.price * 0.9}`;

  // DB에 insert 하기 위해 배열type 으로 변환
  // const params = [req.body.st_num, req.body.st_name, req.body.st_dept]
  const params = [b_isbn, b_title, b_author, b_publisher, b_price, b_discount];
  const sql = " INSERT INTO tbl_books(b_isbn, b_title, b_author, b_publisher, b_price,b_discount) " + " VALUES( ?,?,?,?,?,? )";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // INSERT(추가)가 성공한 경우 List 를 보여주는 화면으로
      // 화면 전환하라
      return res.redirect("/books/");
    }
  });
});

router.get("/:b_isbn/update", (req, res) => {
  const b_isbn = req.params.isbn;
  const sql = " SELECT * FROM tbl_books WHERE b_isbn = ? ";
  dbConn.query(sql, [b_isbn], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("books/add", { BTD: result[0] });
    }
  });
});

router.post("/:b_isbn/update", (req, res) => {
  const b_isbn = req.body.isbn;
  const b_publisher = req.body.publisher;
  const b_author = req.body.author;
  const b_pubdate = req.body.b_pubdate;
  const b_title = req.body.title;
  const b_price = req.body.price;
  const b_discount = `${req.body.price * 0.9}`;
  const params = [b_isbn, b_publisher, b_author, b_pubdate, b_title, b_price, b_discount];
  const sql =
    " UPDATE tbl_books " +
    " SET b_isbn = ?, " +
    "   b_publisher = ?, " +
    "   b_author = ?, " +
    "   b_pubdate = ?, " +
    "   b_title = ? " +
    "   b_price = ? " +
    " WHERE b_isbn = ? ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect(`/books/${b_isbn}/detail`);
    }
  });
});

router.get("/:b_isbn/delete", (req, res) => {
  const b_isbn = req.params.b_isbn;
  const sql = " DELETE FROM tbl_books WHERE b_isbn = ? ";
  dbConn.query(sql, [b_isbn], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/books/list");
    }
  });
});

export default router;
