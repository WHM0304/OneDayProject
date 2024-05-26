document?.addEventListener("DOMContentLoaded", () => {
  const nav_hover = document.querySelector(".HM-main_hover_box");
  const nav_box = document.querySelector(".HM-main_nav");
  const select_box = document.querySelector(".HM-home_picture");

  nav_hover?.addEventListener("click", (e) => {
    const qq = e.target;
    qq.style.display = "none";
    nav_box.style.display = "flex";
  });

  nav_box?.addEventListener("click", (e) => {
    const target = e.target.innerHTML;
    if (target === "홈") {
      document.location.href = `${rootPath}`;
    }
    if (target === "회원가입") {
      document.location.href = `${rootPath}/user/join`;
    }
  });
  select_box?.addEventListener("click", (e) => {
    const target = e.target;
    // alert(target.id);
    // document.location.href = `${rootPath}/game/${target.id}`;
  });
});
