document.addEventListener("DOMContentLoaded", async () => {
  const date = document.querySelector("#date");
  const date_fetch = await fetch("/date");
  const date_json = await date_fetch.json();

  date.value = date_json;
});
