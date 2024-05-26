<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<%@ include file="/WEB-INF/views/include/head.jspf"%>

<body class="HM-main_container">
	<div class="HM-main_body">
		<%@ include file="/WEB-INF/views/include/header.jspf"%>

		<c:if test="${BODY eq 'HOME' }">
			<%@ include file="/WEB-INF/views/home.jsp"%>
		</c:if>
		<%-- 		<c:if test="${BODY eq 'GAME' }">
			<%@ include file="/WEB-INF/views/game/game.jsp" %>
		
		</c:if>  --%>
		<c:if test="${BODY eq 'JOIN' }">
			<%@ include file="/WEB-INF/views/user/join.jsp" %>
		</c:if>
		<c:if test="${BODY eq 'LOGIN' }">
			<%@ include file="/WEB-INF/views/user/login.jsp" %>
		</c:if>

	</div>

	<div class="HM-main_hover_box"></div>
	<nav class="HM-main_nav">
		<ul>
			<li>홈</li>
			<sec:authorize access="isAnonymous()">
				<li><a href="${rootPath}/user/join">회원가입</a></li>
				<li><a href="${rootPath}/user/login">로그인</a></li>
			</sec:authorize>
			<sec:authorize access="isAuthenticated()">

				<li><f:form action="${rootPath}/user/logout"
						onclick="this.submit()">로그아웃</f:form></li>
			</sec:authorize>
		</ul>
	</nav>
</body>
</html>
