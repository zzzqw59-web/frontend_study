function inlineEventTest(button) {
    button.style.backgroundColor = "pink";
    button.style.color = "white";
    document.querySelector("#inlineResult").textContent = "인라인 이벤트 모델로 버튼 클릭 이벤트를 처리하였다."
}

function printHeadingTags() {
    const headingResult = document.querySelector("#headingResult");

    headingResult.innerHTML = "";

    for (let i = 1; i <= 6; i++) {
        headingResult.innerHTML += `<h${i}>Hello JavaScript</h${i}>`;
    }
}

const classicButton = document.querySelector("#classicButton")
const removeClassicButton = document.querySelector("#removeClassicButton");
const classicResult = document.querySelector("#classicResult");

classicButton.onclick = function() {
    classicResult.textContent = "고전 이벤트 모델로 클릭 이벤트를 처리했다.";
    classicResult.style.color = "blue";
};

removeClassicButton.onclick = function() {
    classicButton.onclick = null;
    classicResult.textContent = "classicButton의 onClick 이벤트를 제거하겠다.";
    classicResult.style.color = "#222";
};

const standardButton = document.querySelector("#standardButton");
const standardBox = document.querySelector("#standardBox");

standardButton.addEventListener("click", function() {
    standardBox.textContent = "첫번째 이벤트 핸들러가 실행 되었다.";
});

standardButton.addEventListener("click", function() {
    standardBox.style.width = `${standardBox.offsetWidth + 20}px`;
    standardBox.style.height = `${standardBox.offsetHeight + 10}px`;
});

const colorButtons = document.querySelectorAll(".color-button");
const colorResult = document.querySelector("#colorResult");

colorButtons.forEach(function (button) {
    button.addEventListener("click", function(event) {
        const color = event.target.dataset.color;
        colorResult.style.backgroundColor = color;
        colorResult.textContent = `event.target으로 클릭한 색상값 ${color}을 가져왔다.`;
    })
});

const good = document.querySelector(".good");
let i = 0;

good.addEventListener("click", function () {
    i++;
    good.textContent = `좋아요 ${i}`;
});

// const animal = document.querySelector(".animal");
// const changeButton = document.querySelector(".changeButton");
// const imgResult = document.querySelector(".imgResult");

// changeButton.addEventListener("click", function() {
//     imgResult.textContent = "현재 이미지는 강아지입니다.";
// })