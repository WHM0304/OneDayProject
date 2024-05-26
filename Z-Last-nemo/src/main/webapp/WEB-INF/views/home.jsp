<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gaegu&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Gasoek+One&display=swap" rel="stylesheet">
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<link rel="stylesheet"
	href="${rootPath}/static/css/speech.css?2024-04-26-001">
<div class="HM-home_container">
	<div class="HM-home_top">
		<div class="HM-home_first_menu">
			<div class="HM-home_weather">
				<label> <span>날씨</span></label>
			</div>

			<div class="HM-home_img">
				<img src="${rootPath}/static/img/sun.png"> <img
					src="${rootPath}/static/img/cloud.png"> <img
					src="${rootPath}/static/img/rainy.png"> <img
					src="${rootPath}/static/img/snow.png">
			</div>
			<div>
				<label class="HM-home_cal"> <span>${year}년</span> <span>${month}월</span>
					<span>${day}일</span>
				</label>
			</div>
		</div>
		<div class="HM-home_second_menu">
			<label>제목 : 수족관을 다녀왔다!</label>
		</div>
	</div>
	<div class="HM-home_picture">
		<c:if test="${clear_data5.c_clear != 1}">
			<div>
				<div id="LEVEL3" class="YS_p_div">
					<c:if test="${clear_data3.c_clear == 1}">
						<img class="YS_picture_c
						<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear == 1 && clear_data4.c_clear != 1}">fade-in</c:if>"
							src="${rootPath}/static/img/jellyfish.png">
					</c:if>
					<c:if test="${clear_data3.c_clear != 1}">
						<img
							class="YS_picture
    					<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data4.c_clear != 1}">next_level</c:if>"
							src="${rootPath}/static/img/question.png" alt="Question Image">
					</c:if>
				</div>
				<div id="LEVEL1" class="YS_p_div">
					<c:if test="${clear_data1.c_clear == 1}">
						<img class="YS_picture_c
						<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear != 1&& clear_data3.c_clear != 1 && clear_data4.c_clear != 1}">fade-in</c:if>"
							src="${rootPath}/static/img/smile.png" alt="Smile Image">
					</c:if>
					<c:if test="${clear_data1.c_clear != 1}">
						<img
							class="YS_picture
    					<c:if test="${clear_data2.c_clear != 1 && clear_data3.c_clear != 1 && clear_data4.c_clear != 1}">next_level</c:if>"
							src="${rootPath}/static/img/question.png" alt="Question Image">
					</c:if>
				</div>
			</div>
			<div>
				<div id="LEVEL4" class="YS_p_div">
					<c:if test="${clear_data4.c_clear == 1}">
						<img class="YS_picture_c
						<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear == 1 && clear_data4.c_clear == 1}">fade-in</c:if>"
							src="${rootPath}/static/img/whale.png" >
					</c:if>
					<c:if test="${clear_data4.c_clear != 1}">
						<img
							class="YS_picture
    					<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1}">next_level</c:if>"
							src="${rootPath}/static/img/question.png" alt="Question Image">
					</c:if>
				</div>
				<div id="LEVEL2" class="YS_p_div">
					<c:if test="${clear_data2.c_clear == 1}">
						<img class="YS_picture_c
						<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear != 1 && clear_data4.c_clear != 1}">fade-in</c:if>"
							src="${rootPath}/static/img/fish.png">
					</c:if>
					<c:if test="${clear_data2.c_clear != 1}">
						<img
							class="YS_picture
    					<c:if test="${clear_data1.c_clear == 1 && clear_data3.c_clear != 1 && clear_data4.c_clear != 1}">next_level</c:if>"
							src="${rootPath}/static/img/question.png" alt="Question Image">
					</c:if>
				</div>
			</div>
		</c:if>
		<c:if test="${clear_data5.c_clear == 1}">
			<div class="complete_img_box">
				<img class="YS_picture fade-in" src="${rootPath}/static/img/complete_img.png">
			</div>
		</c:if>
		<section class="ex-mark hidden"  id="LEVEL5">
			<img class="YS_picture next_level" src="${rootPath}/static/img/ex-mark.png" alt="느낌표" width="100%"/>
		</section>
		
	</div>
	
	<h1 class="clear_msg
		<c:if test="${clear_data5.c_clear == 1}">show_clear fade-in</c:if>"
		>
		<span>C</span>
		<span>L</span>
		<span>E</span>
		<span>A</span>
		<span>R</span>
		<span>!</span>
	</h1>
	
	
	<div class="HM-home_diary">
		<c:if test="${clear_data1.c_clear == 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row
				<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear != 1&& clear_data3.c_clear != 1 && clear_data4.c_clear != 1}">fade-in</c:if>"
				>어제 수족관에 놀러갔었다!</h2>
			</section>	
		</c:if>
		<c:if test="${clear_data1.c_clear != 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row_n">　</h2>
			</section>
		</c:if>
		<c:if test="${clear_data2.c_clear == 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row
				<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear != 1 && clear_data4.c_clear != 1}">fade-in</c:if>"
				>작고 귀여운 흰 동가리도 보고</h2>
			</section>
		</c:if>
		<c:if test="${clear_data2.c_clear != 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row_n">　</h2>
			</section>
		</c:if>
		<c:if test="${clear_data3.c_clear == 1}">
			<section class="YS_border-bottom">		
				<h2 class="YS_diary_row
				<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear == 1 && clear_data4.c_clear != 1}">fade-in</c:if>"
				>알록달록한 조명빛을 받는 해파리와</h2>
			</section>
		</c:if>
		<c:if test="${clear_data3.c_clear != 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row_n">　</h2>
			</section>
		</c:if>
		<c:if test="${clear_data4.c_clear == 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row
				<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear == 1 && clear_data4.c_clear == 1 && clear_data5.c_clear != 1}">fade-in</c:if>"
				>멋진 흰돌고래를 보고</h2>
			</section>
		</c:if>
		<c:if test="${clear_data4.c_clear != 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row_n">　</h2>
			</section>
		</c:if>
		<c:if test="${clear_data5.c_clear == 1}">
			<section class="YS_border-bottom">		
				<h2 class="YS_diary_row
				<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear == 1 && clear_data4.c_clear == 1 && clear_data5.c_clear == 1}">fade-in</c:if>"
				>엄청 커다란 문어를 만났다!</h2>
			</section>
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row
				<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1&& clear_data3.c_clear == 1 && clear_data4.c_clear == 1 && clear_data5.c_clear == 1}">fade-in</c:if>"
				>참 재밌었다!</h2>
			</section>
		</c:if>
		<c:if test="${clear_data5.c_clear != 1}">
			<section class="YS_border-bottom">
				<h2 class="YS_diary_row_n">　</h2>
			</section>
		</c:if>
	</div>
</div>

	<div class="conversationBox-back">
		<img src="${rootPath}/static/img/boy.png" class="avatar"
			alt="A's avatar">
		<div id="conversationBox" class="conversation-box">
			<!-- 대화 내용을 표시할 곳 -->
			<div id="speechContainer" class="speech-container">
				<!-- JSTL을 사용하여 대화 데이터를 반복해서 출력 -->
				<c:forEach items="${SPEECH}" var="speech">
					<div class="speech-part" style="display: none;">
						<!-- 모든 대화를 숨김 -->
						<span class="num" style="display: none;">${speech.s_num}</span> <span
							class="speaker" style="display: none;">${speech.s_speaker}</span>
						<span class="message">${speech.s_message}</span>
					</div>
				</c:forEach>
			</div>
		</div>
		<button id="skipButton">skip</button>
		<button id="nextButton">&#187;&#187;</button>
	</div>


<script src="${rootPath}/static/js/speech.js?2024-04-26-001">

</script>
<script>
	//---------------------------------------------
	// 4까지 클리어하고 나서 이미지클릭시 ! 이미지 나오게
 document.addEventListener("DOMContentLoaded", () => {
    // LEVEL4의 fade-in 애니메이션 종료 후 처리
    document.getElementById("LEVEL4").addEventListener("animationend", () => {
        // YS_picture_c 클래스를 가진 모든 이미지에 next_level 클래스 추가
        // 완성그림에다가 클래스붙여서 깜빡이는효과
        const images = document.querySelectorAll(".YS_picture_c");
        images.forEach((image) => {
            image.classList.add("next_level5");
            
            // -------- 대화 스크립트 못나오게 id LEVEL1~ 4 삭제
            for (let i = 1; i <= 4; i++) {
        const levelElement = document.getElementById(`LEVEL${i}`);
        if (levelElement) {
            levelElement.remove();
        	}
    	}
            //--------------------------------------
            
            // 이4그림을 클릭하고 나면 보스스테이지 등장
            image.addEventListener("click", () => {
                const exMark = document.querySelector(".ex-mark");
                exMark.classList.remove("hidden");
            });
        });
    });
});

	// complete_img 크기조정
 document.addEventListener("DOMContentLoaded", () => {
	    const completeImg = document.querySelector(".complete_img_box img");
	    const homePicture = document.querySelector(".HM-home_picture");

	    if (completeImg) {
	        homePicture.style.width = "700px";
	    }
	});

	

</script>
