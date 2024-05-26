import express from "express";
import DB from "../models/index.js";
import moment from "moment";
const NOTICE = DB.models.tbl_notice;
const POST = DB.models.tbl_post;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const user = req.session.user;
  const p_date = moment().format("YYYY-MM-DD");

  // return res.json(user);
  if (user) {
    const u_id = req.session.user?.u_id;
    const active = await POST.findAll({
      where: { p_date, p_uid: u_id },
    });
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    // return res.json(active);
    return res.render("index", { data, user, active });
  } else {
    return res.render("index");
  }
});

router.get("/date", async (req, res) => {
  const date = moment().format("YYYY-MM-DD");
  return res.json(date);
});

export default router;
