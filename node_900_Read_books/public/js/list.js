document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.list");
  const btn_add = document.querySelector("div.btn_add");
  table.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "TD") {
      const paTR = target.closest("TR");
      const tds = paTR.querySelectorAll("TD");
      const books_isbn = tds[1].innerText;

      document.location.href = `/books/${books_isbn}/detail`;
    }
  });
});
