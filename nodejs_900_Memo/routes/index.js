import express from "express";
import DB from "../models/index.js";
import moment from "moment";
import { upLoad } from "../modules/file_upload.js";
import { Op } from "sequelize";
const MEMO = DB.models.tbl_memo;
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const today = moment().format("YYYY-MM-DD");
  const time = moment().format("hh:mm");
  const MEMODATA = await MEMO.findAll();
  res.render("index", { row: MEMODATA, today, time });
  // return res.json({ row: MEMODATA });
});

router.get("/insert", async (req, res) => {
  return res.render("input");
});

router.post("/insert", upLoad.single("m_image"), async (req, res) => {
  const MEMODATA = await MEMO.findAll();
  const today = moment().format("YYYY-MM-DD");
  const time = moment().format("hh:mm");
  if (req.file) {
    const m_iamge = req.file.filename;
    req.body.m_image = m_iamge;
  } else {
    req.body.m_image = null;
  }
  req.body.m_seq = 0;

  req.body.m_date = today;
  req.body.m_time = time;
  req.body.m_author = "whm0304@naver.com";
  try {
    await MEMO.create(req.body);
    return res.redirect("/");
    // return res.json(req.body);
  } catch (error) {}
});

router.get("/:m_seq/detail", async (req, res) => {
  const m_seq = req.params.m_seq;
  const data = await MEMO.findByPk(m_seq);
  return res.render("detail", { item: data });
});
router.get("/:m_seq/delete", async (req, res) => {
  const m_seq = req.params.m_seq;
  await MEMO.destroy({ where: { m_seq } });
  return res.redirect("/");
});

router.get("/:m_seq/update", async (req, res) => {
  const m_seq = req.params.m_seq;
  const data = await MEMO.findByPk(m_seq);

  return res.render("input", { data });
  // return res.json({ data });
});
router.post("/:m_seq/update", upLoad.single("m_image"), async (req, res) => {
  const m_seq = req.params.m_seq;
  const data = req.body;
  const today = moment().format("YYYY-MM-DD");
  const time = moment().format("hh:mm");

  try {
    req.body.m_date = today;
    req.body.m_time = time;
    if (req.file) {
      req.body.m_image = req.file.filename;
    }

    req.body.m_seq = m_seq;
    await MEMO.update(data, { where: { m_seq: m_seq } });
    return res.redirect(`/${m_seq}/detail`);
    // return res.json(data);
  } catch (error) {}
});

export default router;
