const nameInput = document.querySelector("#nameInput");
const helloButton = document.querySelector("#helloButton");
const helloResult = document.querySelector("#helloResult");

helloButton.addEventListener("click", function() {
    const name = nameInput.value.trim();

    if (name === "") {
        alert("이름을 입력하세요.");
        nameInput.focus();
        return;
    }

    helloResult.textContent = `${name}님 환영합니다.`;
});