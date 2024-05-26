document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.input_box");

  form.addEventListener("click", (e) => {
    const target = e.target;
    if (target.className === "add") {
      form.submit();
    }
  });
});
