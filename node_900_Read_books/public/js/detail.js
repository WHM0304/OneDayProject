document.addEventListener("DOMContentLoaded", () => {
  const btn_list = document.querySelector("button.list");
  const btn_update = document.querySelector("button.btn_update");
  const btn_delete = document.querySelector("button.btn_delete");

  btn_list?.addEventListener("click", () => {
    document.location.href = "/books";
  });

  btn_delete.addEventListener("click", (e) => {
    if (confirm("삭제된 데이터는 복구 할수 없습니다\n정말 삭제할까요 ?")) {
      const target = e.target;

      const b_isbn = target.dataset.isbn;

      document.location.replace(`/student/${b_isbn}/delete`);
    }
  });

  btn_update.addEventListener("click", (e) => {
    const b_isbn = e.target.dataset.isbn;
    if (b_isbn) {
      document.location.replace(`/books/${b_isbn}/update`);
    } else {
      alert("학번정보가 잘못되었습니다");
    }
  });
});
