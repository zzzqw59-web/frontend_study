function showAlert() {
    alert("alert() 메서드로 출력한 알림창입니다.");
}

function showConsole() {
    const names = ["홍길동", "김철수", "이희진"];

    console.log("일반 메세지 출력", names);
    console.table(names);
    console.warn("경고 메세지 예시");
    console.error("에러 메세지 예시");

    document.querySelector("#consoleResult").textContent = "콘솔 출력은 브라우저 개발자 도구의 console 탭에서 확인할 수 있다.";
}

function documentWriteExample() {
    document.write("<h1>document.wirte() 실행결과");
    document.write("<p>문서 로딩이 끝난 뒤 document.write()를 실행하면 기존 화면이 지워질 수 있다.");
    document.write("<button onClick = 'location.reload()'>원래 화면으로 돌아가기</button>");
}

function getTextContent() {
    const textSample = document.querySelector("#textSample");
    document.querySelector("#textResult").textContent = textSample.textContent;
}

function setTextContent() {
    document.querySelector("#textSample").textContent = "textContent로 <strong>변경한 내용입니다.</strong>";
}

function getInnerHTML() {
    const htmlSample = document.querySelector("#htmlSample");
    document.querySelector("#htmlResult").textContent = htmlSample.innerHTML;
}

function setInnerHTML() {
    document.querySelector("#htmlSample").innerHTML = "<strong>innerHTML</strong>으로 변경"
}

function confirmColor() {
    const confirmButton = document.querySelector("#confirmButton");

    if (confirm("버튼 배경색을 오랜지 색으로 바꾸시겠습니까?")) {
        confirmButton.style.backgroundColor = "skyblue";
        confirmButton.textContent = "확인을 선택했습니다."
    } else {
        confirmButton.style.backgroundColor = "lightgray";
        confirmButton.textContent = "취소를 선택했습니다."
    }
}

function printInputValue() {
    const idInput = document.querySelector("#userId");
    const passwordInput = document.querySelector("#userPwd");
    const result = document.querySelector("#inputResult");

    const id = idInput.value.trim();
    const password = passwordInput.value.trim();

    if (id !== '' && password !== '') {
        result.value = `${id}, ${password}`;
    } else {
        result.value = "아이디와 비밀번호를 다시 확인해주세요.";
    }

    idInput.value = '';
    passwordInput.value = '';
    idInput.focus();
}

const nameButton = document.querySelector("#nameButton");
nameButton.addEventListener("click", function() {
    const name = document.querySelector("#nameInput").value.trim();
    const result = document.querySelector("#namePrint");

    result.textContent = name !== "" ? `${name}님 반갑습니다.` : "이름을 입력해주세요.";
});

const templateButton = document.querySelector("#templateButton");
const templateResult = document.querySelector("#templateResult");

templateButton.addEventListener("click", function() {
    const myName = "홍길동";
    const age = 25;
    const height = 178.5;

    templateResult.innerHTML = `
        <p><strong>템플릿 문자열 방식</strong></p>
        <p>My name is ${myName}, My age is ${age}, My height is ${height}</p>

        <p><strong>여러 줄 템플릿 문자열</strong></p>
        <p>
            My name is ${myName} <br>
            My age is ${age} <br>
            My height is ${height}
        </P>
    `;
});