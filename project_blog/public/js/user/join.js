const join_click_event = async () => {
  const join_form = document.querySelector("form.join");
  const userid = join_form.querySelector("#userid");
  const password = join_form.querySelector("#password");
  const re_password = join_form.querySelector("#re_password");
  const nickname = join_form.querySelector("#nick");
  if (userid.value === "") {
    alert("사용자이름 입력해주세요");
    userid.select();
    return false;
  } else {
    const response = await fetch(`/users/${userid.value}/check`);
    const json = await response.json();
    if (json.MESSAGE === "FOUND") {
      alert("이미 등록된 ID가 있습니다.");
      userid.select();
      return false;
    }
  }

  if (password.value === "") {
    alert("비밀번호를 입력해야 합니다.");
    password.select();
    return false;
  }
  if (re_password.value === "") {
    alert("비밀번호 확인을 입력해주세요.");
    re_password.select();
    return false;
  }
  if (password.value !== re_password.value) {
    alert("비밀번호와 비밀번호 확인의 입력값이 다릅니다.");
    password.select();
    return false;
  }
  if (nickname.value === "") {
    alert("닉네임을 입력해주세요");
    nickname.select();
    return false;
  }
  join_form.submit();
  // alert("ㅇㅇ?");
};

document.addEventListener("DOMContentLoaded", () => {
  const join_btn = document.querySelector("#join_btn");
  join_btn.addEventListener("click", join_click_event);
});
