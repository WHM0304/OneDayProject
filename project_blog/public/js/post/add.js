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
  const form = document.querySelector(".add_form");
  const input_img = document.querySelector("#p_image");
  const img_add = document.querySelector("img.img_add");

  form?.addEventListener("click", (e) => {
    const target = e.target;
    const n_seq = document.querySelector(".back").dataset.n_seq;
    if (target.value === "추가하기") {
      form.submit();
    } else if (target.value === "돌아가기") {
      document.location.href = `/post/${n_seq}/list`;
    } else if (target.value === "수정하기") {
      form.submit();
    }
  });
  img_add?.addEventListener("click", () => {
    input_img.click();
  });
  input_img?.addEventListener("change", imagePreView);
});
