const scoreInput = document.querySelector("#scoreInput");
const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");


checkButton.addEventListener("click", function () {
    const inputValue = scoreInput.value.trim();
    const score = Number(inputValue);

    if (inputValue === "") {
        result.textContent = "점수를 입력하세요.";
        return;
    }

    if (isNaN(score)) {
        result.textContent = "숫자만 입력하세요.";
        return;
    }


    if (score >= 90) {
        result.textContent = "A등급";
    } else if (score >= 80) {
        result.textContent = "B등급";
    } else if (score >= 70) {
        result.textContent = "C등급";
    } else if (score >= 60) {
        result.textContent = "D등급";
    } else {
        result.textContent = "재시험";
    }
})