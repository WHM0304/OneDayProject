document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.books");
  const btn_save = document.querySelector("button.save");
  const inputs = document.querySelectorAll("input");
  const b_isbn = inputs[0];
  const b_title = inputs[1];
  const b_author = inputs[2];
  const b_publisher = inputs[3];
  const b_price = inputs[4];
  const error_divs = document.querySelectorAll("div.error");

  btn_save.addEventListener("click", () => {
    error_divs.forEach((item) => (item.innerHTML = ""));
    if (!b_isbn.value) {
      error_divs[0].innerHTML = "* isbn은 반드시 입력하세요";
      b_isbn.select();
      return false;
    }
    if (!b_title.value) {
      error_divs[1].innerHTML = "* 제목은 반드시 입력해야 합니다";
      b_author.select();
      return false;
    }
    if (!b_author.value) {
      error_divs[2].innerHTML = "* 저자명은 반드시 입력하세요";
      st_dept.select();
      return false;
    }

    if (!b_publisher.value) {
      error_divs[3].innerHTML = "* 출판사는 반드시 입력해야 합니다";
      b_author.select();
      return false;
    }
    if (!b_price.value) {
      error_divs[4].innerHTML = "* 가격은 반드시 입력해야 합니다";
      b_author.select();
      return false;
    }

    // 유효성 검사를 마치면 서버로 데이터 보내기
    form.submit();
  });
});
