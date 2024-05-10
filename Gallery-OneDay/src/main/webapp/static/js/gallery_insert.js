document.addEventListener("DOMContentLoaded", async () => {
  const fileInput = document.querySelector("input.file.single");
  const filesInput = document.querySelector("input.file.multi");

  const preImg = document.querySelector("img.gallery");
  const imgBorderBox = document.querySelector("div.image");
  const base64Box = document.querySelector("textarea.base64");
  const multiImageBox = document.querySelector("div.image.multi");

  const ecodeImageFileAsBase64 = async (image) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(image);
    });
  };

  preImg.addEventListener("click", () => filesInput.click());

  imgBorderBox.addEventListener("paste", async (e) => {
    const items = e.clipboardData.items;

    const item = items?.[0];

    if (item.type.indexOf("image") === 0) {
      const blob = item.getAsFile();

      if (!blob) {
        return null;
      }
      const base64 = await ecodeImageFileAsBase64(blob);
      preImg.src = base64;
      base64Box.value = base64;
    } else {
      alert("이미지만 붙여 넣기 하세요");
    }
  });

  const filePreView = async (file) => {
    const base64 = await ecodeImageFileAsBase64(file);
    if (base64) {
      const img = document.createElement("img");
      img.style.width = "100px";
      img.src = base64;
      multiImageBox.appendChild(img);
    }
  };

  filesInput.addEventListener("change", async (e) => {
    const files = e.target.files;
    multiImageBox.innerHTML = "";
    for (let file of files) {
      await filePreView(file);
    }
  });
  fileInput.addEventListener("change", async (e) => {
    // 이미지 파일의 미리보기
    const target = e.target;
    const file = target.files[0];
    await filePreView(file);

    // const base64 = await ecodeImageFileAsBase64(file);
    // preImg.src = base64;
  });
});
