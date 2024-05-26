document.addEventListener("DOMContentLoaded", () => {
  const add = document.querySelector("#add");
  add?.addEventListener("click", () => {
    const n_seq = add.dataset.n_seq;
    document.location.href = `/post/${n_seq}/add`;
  });

  const ul_tag = document.querySelector("#list");
  ul_tag?.addEventListener("click", (e) => {
    const target = e.target;
    const p_seq = target.closest("UL").dataset.p_seq;
    const n_seq = add.dataset.n_seq;
    // alert(p_seq);
    return (document.location.href = `/post/${n_seq}/detail/${p_seq}`);
  });
});
