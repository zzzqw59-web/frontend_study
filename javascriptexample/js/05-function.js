function showMessage() {
    document.querySelector("#messageResult").textContent = "showMessage()함수가 호출되었습니다."
}

function clickCount() {
    const count = Number(btn.textContent);
    btn.textContent = count + 1;
}

function scoreCheck() {
    const kor = document.querySelector(".korScore");
    const eng = document.querySelector(".engScore");
    const math = document.querySelector(".mathScore");
    const sum = document.querySelector(".sum");
    const average = document.querySelector(".average");
    const score = document.querySelector(".score");

    sum.value = Number(kor.value) + Number(eng.value) + Number(math.value);
    average.value = sum.value / 3;

    if (average.value > 90) {
        score.value = "A";
    } else if (average.value > 80) {
        score.value = "B";
    } else if (average.value > 70) {
        score.value = "C"
    } else {
        score.value = "F";
    }
}

const expressoinButton = document.querySelector("#expressionButton");
const expressionResult = document.querySelector("#expressionResult");

const printExpressionMessage = function () {
    expressionResult.textContent = "익명 함수를 변수에 저장한 뒤 이벤트에서 호출하였다."
}

expressoinButton.addEventListener("click", printExpressionMessage);

const greetingButton = document.querySelector("#greetingButton");
const greetingResult = document.querySelector("#greetingResult");

const makeGreeting = function (name) {
    return `${name}님, 자바스크립트 함수 표현식을 학습중입니다.`;
}

greetingButton.addEventListener("click", function() {
    const userName = document.querySelector("#userName").value.trim();

    if (userName.length === 0) {
        greetingResult.textContent = "이름을 입력하세요.";
        return;
    }

    greetingResult.textContent = makeGreeting(userName);
});

function scoreChecking() {
    const score = document.querySelector(".totalScore");
    const result = document.querySelector(".scoreResult");

    if (score.value == "") {
        result.textContent = "점수를 입력하세요.";
        return;
    }

    if (Number(score.value) >= 60) {
        result.innerHTML = `합격입니다.`;
    } else {
        result.innerHTML = "불합격입니다.";
    }
}

let immediateMessage = "";

(function () {
    const now = new Date();
    immediateMessage = `즉시 실행 함수가 ${now.toLocaleDateString()}에 실행되었습니다.`;
    console.log(immediateMessage);
})();

function showImmediateResult() {
    document.querySelector("#immediateResult").textContent = immediateMessage;
}

const arrowButton = document.querySelector("#arrowButton");
const thisButton = document.querySelector("#thisButton");
const arrowResult = document.querySelector("#arrowResult");

const multiply = (num1, num2) => num1 * num2;

arrowButton.addEventListener("click", () => {
    arrowResult.textContent = `화살표 함수 계산 결과: 5 x 4 = ${multiply(5, 4)}`;
});

thisButton.addEventListener("click",  (event) => {
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "white";
    arrowResult.textContent = "일반 함수에서 this는 이벤트가 발생한 요소를 가리킨다.";
});

const passScoreButton = document.querySelector("#passScoreButton");
const passScoreResult = document.querySelector("#passScoreResult");

passScoreButton.addEventListener("click", () => {
    const scores = [95, 52, 80, 45, 70];

    const passScores = scores.filter(score => score >= 60);
    passScoreResult.textContent = `합격점수: ${passScores.join(", ")}`;
});

const inputText = document.querySelector(".inputText");
const inputButton = document.querySelector(".inputButton");
const inputResult = document.querySelector(".inputResult");

inputButton.addEventListener("click", function () {
    const text = inputText.value.trim();

    if (text === "") {
        inputResult.textContent = "글자를 입력해주세요.";
        return;
    }

    inputResult.textContent = `글자 수: ${text.length}`;
})

const colorInput = document.querySelector(".colorInput");
const colorButton = document.querySelector(".colorButton");
const colorResult = document.querySelector(".colorResult");

colorButton.addEventListener("click", function () {
    const color = colorInput.value;
    colorResult.style.color = color;
})

const sum = function(number1, number2, callback) {
    const result = number1 + number2;

    callback(result);

    return result;
};

const runCallback = document.getElementById("runCallback");
const callbackResult = document.getElementById("callbackResult");

runCallback.addEventListener("click", function () {
    sum(10, 20, function(result) {
        callbackResult.textContent = "콜백 함수의 결과: " + result;
    })
})