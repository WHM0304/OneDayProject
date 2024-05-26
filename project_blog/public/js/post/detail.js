document.addEventListener("DOMContentLoaded", () => {
  const btn_box = document.querySelector(".button_box");
  const 버튼 = {
    수정하기: "수정하기",
    삭제하기: "삭제하기",
    리스트: "리스트",
  };
  btn_box?.addEventListener("click", (e) => {
    const list = document.querySelector("#n_seq");
    const n_seq = list.dataset.n_seq;
    const p_seq = btn_box.dataset.p_seq;

    const target = e.target;
    const t_value = target.value;
    if (t_value === 버튼.리스트) {
      document.location.href = `/post/${n_seq}/list`;
    } else if (t_value === 버튼.수정하기) {
      document.location.href = `/post/${n_seq}/update/${p_seq}`;
      // alert(t_value);
    } else if (t_value === 버튼.삭제하기) {
      if (confirm("삭제하시겠습니까?")) {
        document.location.href = `/post/${n_seq}/delete/${p_seq}`;
      }
    }
  });
});
