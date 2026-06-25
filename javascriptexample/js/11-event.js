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

const animal = document.querySelector(".animal");
const changeButton = document.querySelector(".changeButton");
const imgResult = document.querySelector(".imgResult");

let isCat = true;

changeButton.addEventListener("click", function () {
    if (isCat) {
        animal.src = "../img/dog.png";
        imgResult.textContent = "현재 이미지는 강아지입니다.";
    } else {
        animal.src = "../img/cat.png";
        imgResult.textContent = "현재 이미지는 고양이입니다.";
    }

    isCat = !isCat;
})

const textInput = document.querySelector("#textInput");
const inputResult = document.querySelector("#inputResult");

textInput.addEventListener("input", function (event) {
    inputResult.textContent = event.target.value !== "" ? `입력중: ${event.target.value}` : `입력한 내용이 이 곳에 표시된다.`;
});

const joinForm = document.querySelector("#joinForm");
const userName = document.querySelector("#userName");
const formResult = document.querySelector("#formResult");

joinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = userName.value.trim();
    formResult.textContent = name != "" ? `${name}님, 폼 제출 이벤트가 처리됬었습니다.` : `이름을 입력해주세요.`;
    
    userName.focus();
});

const goNaver = document.querySelector("#goNaver");

goNaver.addEventListener("click", function (event) {
    event.preventDefault();
    alert("preventDefault()로 링크 기본 이동을 막았습니다.");
})

const inputBox = document.querySelector(".inputBox");
const valueResult = document.querySelector(".inputResult");

inputBox.addEventListener("input", function () {
    valueResult.textContent = `현재 글자 수: ${inputBox.value.length}`
})

const card = document.querySelector(".card");
const cardResult = document.querySelector(".cardResult");

card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "skyblue";
    card.textContent = "늦게 잤으니까."
    card.style.border = "3px solid black";
    card.style.fontWeight = "bold";
    cardResult.textContent = "mouseover 이벤트가 발생했습니다."
});

card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "white";
    card.textContent = "빨리 자라"
    card.style.border = "1px solid black";
    card.style.fontWeight = "normal";
    cardResult.textContent = "mouseout 이벤트가 발생했습니다."
})

const temaSelect = document.querySelector("#tema-select")
const temaResult = document.querySelector(".temaResult");

temaSelect.addEventListener("change", function (event) {
    const value = event.target.value;

    if (value === "light") {
        temaResult.textContent = "밝은 테마가 적용되었습니다.";
        temaResult.style.backgroundColor = "white";
        temaResult.style.color = "black"
    } else if (value === "dark") {
        temaResult.textContent = "어두운 테마가 적용되었습니다.";
        temaResult.style.backgroundColor = "black";
        temaResult.style.color = "white"
    } else if (value === "green") {
        temaResult.textContent = "초록 테마가 적용되었습니다.";
        temaResult.style.backgroundColor = "green";
        temaResult.style.color = "white"
    } else {
        temaResult.textContent = "선택한 테마가 적용됩니다.";
        temaResult.style.backgroundColor = "transparent";
        temaResult.style.color = "black"
    }
    
})
