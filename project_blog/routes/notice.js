import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const NOTICE = DB.models.tbl_notice;
const POST = DB.models.tbl_post;

router.get("/insert", async (req, res) => {
  const user = req.session?.user;

  if (user) {
    const u_id = req.session.user?.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    return res.render("notice/insert", { data });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail=${message}`);
  }
});
router.post("/insert", async (req, res) => {
  const data = req.body;
  // return res.json(data);
  try {
    const u_id = req.session.user?.u_id;
    req.body.n_uid = u_id;
    await NOTICE.create(data);
  } catch (error) {
    return res.json(error);
  }
  return res.redirect("/");
});

router.get("/setting", async (req, res) => {
  const user = req.session?.user;

  if (user) {
    const u_id = req.session.user?.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    return res.render("notice/setting", { data });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail=${message}`);
  }
});

router.get("/:seq/update", async (req, res) => {
  const user = req.session.user;
  if (user) {
    const u_id = req.session.user.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    const n_seq = req.params.seq;
    const UPDATE = await NOTICE.findByPk(n_seq);
    return res.render("notice/update", { data, n_seq, UPDATE });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail${message}`);
  }

  // return res.json(data);
});

router.post("/:seq/update", async (req, res) => {
  const update = req.body;
  const n_seq = req.params.seq;

  try {
    await NOTICE.update(update, { where: { n_seq: n_seq } });
    return res.redirect("/");
  } catch (error) {}

  // return res.json(update);
});

router.get("/:seq/delete", async (req, res) => {
  const n_seq = req.params.seq;
  try {
    await NOTICE.destroy({ where: { n_seq } });
    return res.redirect("/");
    // return res.json(n_seq);
  } catch (error) {}
});

export default router;
