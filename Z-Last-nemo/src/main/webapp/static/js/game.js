document?.addEventListener("DOMContentLoaded", () => {
  const form_container = document.querySelector(".main-input-box");
  const input_check_all = document.querySelectorAll(
    "input[type='checkbox']"
  );
  const _hint_div = document.querySelector(".main-column-hint");
  const hint_div = _hint_div.querySelectorAll("div");
  const row_hint = [];
  const column_hint = [];
  let _heart_count = "3";
  const lives = document.querySelector("#lives");
  const heart = lives.querySelectorAll(".heart");
  if (
    !sessionStorage.getItem("heartSession") ||
    sessionStorage.getItem("heartSession") == 0
  ) {
    sessionStorage.setItem("heartSession", _heart_count);
    for (let i = 0; i < 3; i++) {
      const create_heart = document.createElement("span");
      create_heart.classList.add("heart");
      create_heart.innerHTML = "♥";
      lives.appendChild(create_heart);
    }
  } else {
    sessionStorage.getItem("heartSession");
    const heart = lives.querySelectorAll(".heart");
    if (sessionStorage.getItem("heartSession") !== heart.length) {
      const heart_number = sessionStorage.getItem("heartSession");
      for (let i = 0; i < heart_number; i++) {
        const create_heart = document.createElement("span");
        create_heart.classList.add("heart");
        create_heart.innerHTML = "♥";
        lives.appendChild(create_heart);
      }
    }
  }

  // console.log(sessionStorage.getItem("heartSession"));
  for (let i = 0; i < hint_div.length; i++) {
    row_hint[i] = document.querySelector(`#row${i + 1}-hint`);
    column_hint[i] = document.querySelector(`#column${i + 1}-hint`);
  }
  // 마우스 우클릭 제거
  window.oncontextmenu = function () {
    return false;
  };
  // 마우스 우클릭
  form_container.addEventListener("mousedown", (event) => {
    if (event.input === 2 || event.which === 3) {
      const target = event.target;
      if (target.type === "checkbox") {
        target.classList.toggle("blue");
      }
    }
  });

  // 정답정보를 2차원배열로 변환하는 코드
  const MAKE_CLEAR_ARRAY = (LEVEL, row) => {
    // 문자열(데이터베이스에서 가져온 정답 테이블)을 2차원배열로 변환하는 코드
    let LEVEL_CLEAR = [];

    // 문자열에서 n_block 값만 추출
    let matches = LEVEL.match(/n_block\d+=(\d+)/g);

    // 추출된 값들을 2차원 배열로 변환
    for (let i = 0; i < matches.length; i++) {
      let value = matches[i].match(/n_block\d+=(\d+)/)[1]; // 숫자 부분 추출
      if (i % row === 0) {
        LEVEL_CLEAR.push([]); // 새로운 배열 추가
      }
      LEVEL_CLEAR[LEVEL_CLEAR.length - 1].push(parseInt(value)); // 정수로 변환하여 배열에 추가
    }
    return LEVEL_CLEAR;
  };

  // 사용자 2차배열 만드는 함수
  const Get_Play_Arr = (PLAYER, row) => {
    let USER = [];

    let later = PLAYER.match(/p_block\d+=(\d+)/g);
    for (let i = 0; i < later.length; i++) {
      let value = later[i].match(/p_block\d+=(\d+)/)[1];
      if (i % row === 0) {
        USER.push([]);
      }
      USER[USER.length - 1].push(parseInt(value));
    }
    return USER;
  };
  // 2개의 배열을 비교하는 함수
  const areArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }

    return true;
  };
  // 몇개가 다른지 나오는 함수
  const HOW_MANY_DIFFERNT = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return "함수개수가 다름";
    }
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          count++;
        }
      }
    }
    return count;
  };

  // ROW 힌트 만들기 함수
  const HINT_ROW_MAKE = (LEVEL_CLEAR, row, where) => {
    let count = 0;
    for (let i = 0; i < LEVEL_CLEAR.length; i++) {
      // console.log("로우 표기", row);
      // console.log("I 변수확인", i);

      if (LEVEL_CLEAR[row][i] !== 0) {
        count++;
      }
      if (LEVEL_CLEAR[row][i] === 0) {
        if (count !== 0) {
          where.innerHTML += count + "  ";
          count = 0;
        }
      }
      if (i === LEVEL_CLEAR.length - 1 && count !== 0) {
        where.innerHTML += count;
      }
    }
    if (!where.innerHTML) {
      where.innerHTML = 0;
    }
  };

  // 칼럼 힌트 함수
  const HINT_COLUMN_MAKE = (LEVEL_CLEAR, column, where) => {
    let count = 0;

    for (let i = 0; i < LEVEL_CLEAR.length; i++) {
      if (LEVEL_CLEAR[i][column] !== 0) {
        count++;
      }
      if (LEVEL_CLEAR[i][column] === 0) {
        if (count !== 0) {
          where.innerHTML += count + "<br>";
          count = 0;
        }
      }
      if (i === LEVEL_CLEAR.length - 1 && count !== 0) {
        where.innerHTML += count;
      }
    }
    if (!where.innerHTML) {
      where.innerHTML = 0;
    }
  };

  // 정답테이블 가져와서 2차배열로 만들기
  const CORRECT = MAKE_CLEAR_ARRAY(STEP, row_hint.length);
  // 2차배열만든것으로 힌트 만들기
  if (STEP) {
    for (let i = 0; i < row_hint.length; i++) {
      HINT_ROW_MAKE(CORRECT, i, row_hint[i]);
      HINT_COLUMN_MAKE(CORRECT, i, column_hint[i]);
    }
  }
  // 사용자 2차배열 만들기
  const PLAYER = Get_Play_Arr(PLAY, row_hint.length);
  // console.log(PLAYER);
  const input_container = document.querySelector(".main-input-box");
  const _div = input_container.querySelectorAll("div.row");
  console.log(_div);
  // PLAYER 정보가 있으면 사용자 2차배열 들을 input 에 집어넣기
  if (PLAYER) {
    for (let i = 0; i < row_hint.length; i++) {
      for (let j = 0; j < column_hint.length; j++) {
        _div[i].querySelectorAll('input[type="checkbox"]')[j].value =
          PLAYER[i][j];
        if (
          _div[i].querySelectorAll('input[type="checkbox"]')[j]
            .value == 1
        ) {
          _div[i].querySelectorAll('input[type="checkbox"]')[
            j
          ].checked = "checked";
        } else if (
          _div[i].querySelectorAll('input[type="checkbox"]')[j]
            .value == 0
        ) {
          _div[i].querySelectorAll('input[type="checkbox"]')[
            j
          ].checked = false;
        }
      }
    }
  }

  // 플레이어체크 박스 확인
  // const inputs = document.querySelectorAll('input[type="checkbox"]');
  // console.log(PLAYER);
  // console.log(inputs[6].value);

  // 그 데이터가 맞는지 체크
  // console.log(CORRECT);
  // console.log(PLAYER);
  // console.log(CLEAR);

  form_container?.addEventListener("click", (e) => {
    const target = e.target;
    const find = target.closest("div.row");
    const p_row_num = find.className.substr(9, 1) - 1;
    const p_block = target.name.substr(7) - 1;

    target.value = Number(1);
    if (target.checked === "checked") {
      target.value = Number(1);
    }
    if (target.checked === false) {
      target.value = Number(0);
    }
    // console.log(p_row_num, p_block);

    // 클릭한 input 에 value 집어 넣기
    PLAYER[p_row_num][p_block] = Number(target.value);
    //

    // console.log(PLAYER[p_row_num][p_block].value);
    // console.log(PLAYER);
    // console.log(CORRECT);

    // console.log(target.value);
    // console.log(CLEAR);

    // 클리어 여부확인

    // console.log(CLEAR);
    // console.log(MANY);

    // 클릭했을때 한줄의 데이터 보내기
    const submit_form = target.closest("form");
    // console.log(submit_form.innerHTML);
    // console.log(PLAYER);
    const ex = submit_form.querySelectorAll('input[type="checkbox"]');

    // const _data = [];
    // for (let i = 0; i < ex.length; i++) {
    //   if (ex[i].value == 0) {
    //     _data = document.createElement("input");
    //     _data[i].hidden = "hidden";
    //     _data[i].value = ex[i].value;
    //     submit_form.appendChild(_data[i]);
    //   }
    // }
    // console.log(_date[0]);
    // submit_form.submit();
    // submit_form.append(ex);
    // for (let i = 0; i < ex.length; i++) {
    //   if (ex[i].value == 0) {
    //     ex[i].value = 0;
    //     // alert(ex[i].name);
    //   }
    // }

    const p_block_name = document.createElement("input");
    p_block_name.name = "p_block_name";
    p_block_name.value = target.name;
    p_block_name.hidden = "hidden";
    const p_block_value = document.createElement("input");
    p_block_value.name = "p_block_value";
    p_block_value.value = target.value;
    p_block_value.hidden = "hidden";

    submit_form.appendChild(p_block_name);
    submit_form.appendChild(p_block_value);

    submit_form.submit();

    //
  });
  const input_all = document.querySelector(".main-input-box");
  const p_row_num = input_all.querySelectorAll("div.row").length;
  const p_num = input_all.querySelector('input[name="p_num"]').value;
  //정답확인 버튼눌렀을때 몇개 틀렸는지  맞았는지 확인
  const btn_clear = document.querySelector("#clear");
  btn_clear?.addEventListener("click", (e) => {
    const CLEAR = areArrayEqual(CORRECT, PLAYER);
    const MANY = HOW_MANY_DIFFERNT(CORRECT, PLAYER);

    const result = document.querySelector("#CLEAR_IS");

    if (CLEAR === true) {
      // 클리어시 클리어화면 주소로 이동
      document.location.href = `${rootPath}/game/clear/${p_num}`;
      // result.innerHTML = "정답입니다.";
    } else {
      result.innerHTML = `${MANY}개 틀렸습니다.\n다시풀어주세요`;
      const _minus = sessionStorage.getItem("heartSession");
      sessionStorage.setItem("heartSession", _minus - 1);
      const qwer = document.querySelectorAll(".heart");
      let last = qwer.length - 1;
      qwer[last].remove();
    }

    if (sessionStorage.getItem("heartSession") == 0) {
      alert("실패! 목숨을 모두 소진하여 초기화됩니다");
      document.location.href = `${rootPath}/game/reset/${p_num}/${p_row_num}`;
    }
  });

  // 지우기 버튼 눌렀을때 데이터 다 없애기
  const btn_delete = document.querySelector("#ALL_DELETE");

  btn_delete.addEventListener("click", () => {
    console.log(p_row_num);
    console.log(p_num);
    if (confirm("삭제하시겠습니까?")) {
      document.location.href = `${rootPath}/game/reset/${p_num}/${p_row_num}`;
    } else {
      return false;
    }
    // console.log(input_all);
  });
});
