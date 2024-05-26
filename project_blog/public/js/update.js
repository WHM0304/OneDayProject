document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("select");
  const add_click = document.querySelector("input.add");
  const form = document.querySelector("form.input_box");
  const input_delete = document.querySelector(".input_delete");

  add_click?.addEventListener("click", () => {
    if (select.value === "0") {
      alert("게시판을 선택해주세요");
      return false;
    } else {
      form.submit();
    }
  });
  input_delete.addEventListener("click", () => {
    if (confirm("삭제할까요?")) {
      const seq = input_delete.dataset.n_seq;
      return (document.location.href = `/notice/${seq}/delete`);
    }
  });
});
