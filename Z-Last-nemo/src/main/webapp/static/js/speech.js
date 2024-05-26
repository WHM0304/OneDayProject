const speechParts = document.querySelectorAll(".speech-part");
const avatar = document.querySelector(".avatar");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const speechend = document.querySelector(".conversationBox-back");
let currentSpeechIndex = 0;

// 대화 표시 함수
function displayConversation() {
  const currentSpeech = speechParts[currentSpeechIndex];
  // 현재 대화의 발화자가 'B'일 때만 오퍼시티를 조절
  if (currentSpeech.querySelector(".speaker").innerText === "B") {
    avatar.style.opacity = "0.5";
    currentSpeech.querySelector(".message").style.color = "black";
  } else {
    avatar.style.opacity = "1";
    currentSpeech.querySelector(".message").style.color = "green";
  }
  // 현재 대화만 표시하고 나머지는 숨김
  speechParts.forEach(function (speech) {
    speech.style.display = "none";
  });
  currentSpeech.style.display = "block";
}

// 대화 종료 처리 함수
function endConversation(level) {
  // 대화가 끝나면 대화 창 숨기기
  speechend.style.display = "none";
  // 해당 LEVEL에 대한 게임 페이지로 이동
  document.location.replace(`${rootPath}/game/${level}`);
}

// 다음 대화로 이동하는 이벤트 핸들러 추가
function addEventHandlers(startIndex, endIndex) {
  // 다음 버튼 클릭 시
  nextButton.addEventListener("click", () => {
    // 다음 대화로 이동
    currentSpeechIndex++;
    // 대화가 끝났는지 확인
    if (currentSpeechIndex > endIndex) {
      // 대화 종료 후 게임 페이지로 이동
      const level = document.querySelector(".HM-home_picture").dataset
        .level;
      endConversation(level); // 대화 종료 처리 함수 호출
    } else {
      // 다음 대화 표시
      displayConversation();
    }
  });

  // 엔터 키 이벤트 핸들러 추가
  document.addEventListener("keydown", function (event) {
    // 키보드 이벤트에서 엔터 키의 키코드는 13입니다.
    if (event.key === "13" || event.key === "Enter") {
      // 다음 대화로 이동
      currentSpeechIndex++;
      // 대화가 끝났는지 확인
      if (currentSpeechIndex > endIndex) {
        const level = document.querySelector(".HM-home_picture")
          .dataset.level;
        endConversation(level); // 대화 종료 처리 함수 호출
      } else {
        // 다음 대화 표시
        displayConversation();
      }
    }
  });

  // 대화 인덱스 초기화 및 대화창 표시
  currentSpeechIndex = startIndex;
  speechend.style.display = "block";
  displayConversation();
}
document.addEventListener("DOMContentLoaded", () => {
  const nextLevelImages = document.querySelectorAll(
    ".YS_picture.next_level"
  );
  // 레벨정보를 넣어놓을 이미지 를 다 감싸고 있는 div
  const level_div = document.querySelector(".HM-home_picture");

  nextLevelImages.forEach((image) => {
    image.addEventListener("click", () => {
      const levelNumber = image.parentElement.id.replace("LEVEL", "");

      // dataset 을 통해서 div 에 넣어놓기
      level_div.dataset.level = levelNumber;
      //  alert(levelNumber);
      if (levelNumber == 1) {
        addEventHandlers(0, 2); // 첫 번째 대화부터 시작하고, 인덱스 2에서 종료
      }
      if (levelNumber == 2) {
        addEventHandlers(3, 6); // LEVEL2에서는 대화 인덱스 3부터 시작하고, 인덱스 6에서 종료
      }
      if (levelNumber == 3) {
        addEventHandlers(7, 9); // LEVEL3에서는 대화 인덱스 7부터 시작하고, 인덱스 9에서 종료
      }
      if (levelNumber == 4) {
        addEventHandlers(10, 12); // LEVEL4에서는 대화 인덱스 10부터 시작하고, 인덱스 13에서 종료
      }
      //  보스스테이지
      if (levelNumber == 5) {
        addEventHandlers(13, 16); // LEVEL5에서는 대화 인덱스 14부터 시작하고, 인덱스 16에서 종료
      }
    });
  });
});
// 스킵 버튼 클릭 시 대화 종료 및 게임 페이지로 이동
skipButton.addEventListener("click", () => {
  const level = document.querySelector(".HM-home_picture").dataset
    .level;
  document.location.replace(`${rootPath}/game/${level}`);
});

// 초기에는 대화창을 숨김
speechend.style.display = "none";
