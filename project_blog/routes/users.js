import express from "express";
import DB from "../models/index.js";
const USER = DB.models.tbl_user;
const NOTICE = DB.models.tbl_notice;
const POST = DB.models.tbl_post;
const router = express.Router();

let crypto;
try {
  crypto = await import("node:crypto");
} catch (erorr) {
  console.erorr(`crypto 모듈 사용할수 없습니다. ${erorr}`);
}

/* GET users listing. */

router.get("/join", async (req, res) => {
  res.render("users/join");
});

router.post("/join", async (req, res) => {
  const password = req.body.u_pw;
  const hashAlgorithm = await crypto.createHash("sha512");
  const hashing = await hashAlgorithm.update(password);
  const hashPassword = await hashing.digest("base64");
  req.body.u_pw = hashPassword;

  const result = await USER.create(req.body);
  return res.redirect("/users/login");
});

router.get("/:userid/check", async (req, res) => {
  const userid = req.params.userid;
  // return res.json(userid);
  const row = await USER.findByPk(userid);
  if (row) {
    return res.json({ MESSAGE: "FOUND" });
  } else {
    return res.json({ MESSAGE: "NOT FOUND" });
  }
});

const LOGIN_MASSAGE = {
  USER_NOT: "사용자 ID 없음",
  PASS_WRONG: "비밀번호 오류",
  NEED_LOGIN: "로그인이 필요합니다.",
};

router.get("/login", (req, res) => {
  const message = req.query.fail;
  return res.render("users/login", { NEED: message });
});

router.post("/login", async (req, res) => {
  const userid = req.body.u_id;
  const pw = req.body.u_pw;
  const result = await USER.findByPk(userid);

  if (!result) {
    return res.redirect(
      `/users/login/?fail=${LOGIN_MASSAGE.USER_NOT}`
    );
  } else if (result.u_id === userid) {
    const hashAlgorithm = await crypto.createHash("sha512");
    const hashing = hashAlgorithm.update(pw);
    const hashPassword = hashing.digest("base64");

    if (result.u_pw === hashPassword) {
      req.session.user = result;
      return res.redirect("/");
      // req.session.user = result;
      // return res.json(result.u_id);
    } else {
      return res.redirect(
        `/users/login?fail=${LOGIN_MASSAGE.PASS_WRONG}`
      );
    }
  }

  req.session.user = result;
  return res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.redirect("/");
});

router.get("/mypage", async (req, res) => {
  const user = req.session.user;
  if (user) {
    const u_id = req.session.user.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    return res.render("users/mypage", { user, data });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail=${message}`);
  }
});

router.get("/:u_id/update", async (req, res) => {
  const u_id = req.params.u_id;
  const user = req.session.user;
  if (user) {
    const _u_id = req.session.user.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    const user_data = await USER.findAll({ where: { u_id: _u_id } });
    const u_nick = user_data[0].u_nick;
    if (u_id === _u_id) {
      return res.render("users/update", {
        user,
        data,
        _u_id,
        u_nick,
      });
    } else {
      message = "다른사용자입니다.";
      return res.redirect(`/users/login?fail=${message}`);
    }
  } else {
    return res.redirect("/");
  }
});

router.post("/:u_id/update", async (req, res) => {
  const u_id = req.params.u_id;
  const user = req.session.user;
  if (user) {
    await USER.update(req.body, { where: { u_id: u_id } });
    req.session.user = {
      u_id: u_id,
      u_nick: req.body.u_nick,
      u_pw: req.session.user.u_pw,
    };
    // return res.json(req.body);
    return res.redirect(`/users/mypage`);
  }
});

router.get("/search", async (req, res) => {
  const data = await NOTICE.findAll({
    include: { model: USER, as: "n_u" },
  });
  console.log(data);

  const user = req.session.user;
  if (user) {
    return res.render("users/search", {
      user,
      data,
    });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail=${message}`);
  }
  // return res.json(data);
  // return res.json(find);
});

export default router;
