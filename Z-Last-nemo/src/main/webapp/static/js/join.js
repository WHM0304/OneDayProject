document.addEventListener("DOMContentLoaded", () => {
  const join_form = document.querySelector("form.join");
  const m_id = document.querySelector("input[name='m_id']");
  const m_pw = document.querySelector("input[name='m_pw']");
  const re_pw = document.querySelector(".re_pw");
  const m_nick = document.querySelector("input[name='m_nick']");
  const btn_join = document.querySelector("button.join");

  const userNameExp = /^[a-zA-z0-9_]{2,20}$/;
  const passwordExp = /^[a-zA-Z0-9!@#$%^&*()]{4,20}$/;

  const idCheck = async (m_id) => {
    try {
      const res = await fetch(`${rootPath}/user/idcheck/${m_id}`);
      const result = await res.text();
      return result === "OK";
    } catch (error) {
      alert("서버통신오류");
    }
  };

  btn_join.addEventListener("click", async (e) => {
    if (!m_id.value) {
      alert("username 은 반드시 입력하세요");
      m_id.select();
      return false;
    }

    if (!userNameExp.test(m_id.value)) {
      alert("USERNAME 은 영문 대소문자, 숫자, _ 로 2~20 글자만 사용가능합니다");
      m_id.select();
      return false;
    }
    if (!(await idCheck(m_id.value))) {
      alert("이미 가입된 USERNAME 입니다.");
      m_id.select();
      return false;
    }

    if (!m_pw.value) {
      alert("password 은 반드시 입력하세요");
      m_pw.select();
      return false;
    }

    if (!passwordExp.test(m_pw.value)) {
      alert("비밀번호는 4자리이상 영문 숫자 특수문자 만 가능합니다.");
      m_pw.select();
      return false;
    }

    if (!re_pw.value) {
      alert("패스워드 확인은 반드시 입력하세요");
      re_pw.select();
      return false;
    }
    if (m_pw.value !== re_pw.value) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      m_id.select();
      return false;
    }
    // form 의 전송 실행하기
    join_form.submit();
  });
});
