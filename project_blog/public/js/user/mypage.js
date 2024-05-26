document.addEventListener("DOMContentLoaded", () => {
  const update = document.querySelector("#up");
  update.addEventListener("click", () => {
    const u_id = update.dataset.user;
    document.location.href = `/users/${u_id}/update`;
  });
});
