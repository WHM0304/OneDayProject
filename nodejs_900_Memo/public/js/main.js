document.addEventListener("DOMContentLoaded", () => {
  const btn_box = document.querySelector("div.input_box");

  btn_box?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "새로작성") {
      document.location.href = "insert";
    }
  });
});
const imagePreView = (event) => {
  const img_add = document.querySelector("img.img_add");
  const file = event.target.files[0];
  const fileReader = new FileReader();

  fileReader.onload = (e) => {
    const fileURL = e.target.result;
    img_add.src = fileURL;
  };
  fileReader.readAsDataURL(file);
};

document.addEventListener("DOMContentLoaded", () => {
  const img_add = document.querySelector("img.img_add");
  const input_img = document.querySelector("#m_image");

  img_add?.addEventListener("click", () => {
    input_img.click();
  });
  input_img?.addEventListener("change", imagePreView);
});

document.addEventListener("DOMContentLoaded", () => {
  const div_inline = document.querySelector("div.inline");
  const div_list = document.querySelector("div.list");
  div_inline?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "P") {
      const div = target.closest("DIV");
      const m_seq = div.dataset.m_seq;
      document.location.replace(`/${m_seq}/detail`);
    } else if (target.tagName === "IMG") {
      const div = target.closest("DIV");
      const m_seq = div.dataset.m_seq;
      document.location.href = `/${m_seq}/detail`;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("div.btn_con");
  const m_seq = btn.dataset.m_seq;
  btn?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "수정") {
      return document.location.replace(`/${m_seq}/update`);
    } else if (target.value === "삭제") {
      if (confirm("삭제하시겠습니까?")) {
        document.location.href = `/${m_seq}/delete`;
      } else {
        return false;
      }
    } else if (target.value === "리스트") {
      return document.location.replace("/");
    }
  });
});
