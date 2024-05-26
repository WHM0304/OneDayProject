document.addEventListener("DOMContentLoaded", () => {
  const notice_list = document.querySelector("div.data_box");

  notice_list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
      const ul = target.closest("UL");
      const data = ul.dataset.n_seq;
      document.location.href = `/notice/${data}/update`;
    }
  });
});
