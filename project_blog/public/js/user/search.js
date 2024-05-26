document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#table");
  table.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === "TD") {
      const data = target.closest("TR").dataset.n_seq;

      document.location.href = `/post/${data}/list`;
    }
  });
});
