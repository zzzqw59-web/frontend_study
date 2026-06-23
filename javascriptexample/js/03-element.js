function accessId() {
    const box = document.getElementById("box");

    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    box.style.backgroundColor = randomColor;
    box.textContent = `현재 배경색: ${randomColor}`;
}

function accessClass() {
    const divList = document.getElementsByClassName("classBox");
    const colors = ["pink", "tomato", "skyblue"];
    const texts = ["첫번째 요소", "두번째 요소", "세번째 요소"];

    for (let i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = colors[i];
        divList[i].textContent = texts[i];
    }
}

function accessTagName() {
    const liList = document.getElementsByTagName("li");

    for (let i = 0; i < liList.length; i++) {
        const number = Number(liList[i].textContent);
        console.log(number);
        liList[i].style.backgroundColor = `rgb(130, 220, ${50 * number})`;
    }
}

function accessName() {
    const hobbyList = document.getElementsByName("hobby");
    const selected = [];

    for (let i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            selected.push(hobbyList[i].value);
        }
    }

    const result = document.getElementById("nameDiv");

    if (selected.length > 0) {
        result.innerHTML = `선택한 취미: ${selected.join(", ")} <br>선택된 갯수: ${selected.length}`;
    } else {
        result.textContent = "선택된 항목이 없습니다.";
    }
}

function selectFirstMenu() {
    const firstMenu = document.querySelector(".menu-item");
    const selectorResult = document.querySelector("#selectorResult");

    firstMenu.style.backgroundColor = "gold";
    firstMenu.style.fontWeight = "bold";

    selectorResult.textContent = "querySelector()는 조건에 맞는 첫번째 요소만 선택한다.";
}

function selectorAllMenu() {
    const menuItems = document.querySelectorAll(".menu-item");
    const selectorResult = document.querySelectorAll("#selectorResult");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = "lightblue";
        menuItems[i].style.fontWeight = "bold";
    }
    selectorResult.textContent = "querySelectorAll()은 조건에 맞는 모든 요소를 선택한다.";
}

function resetMenu() {
    const menuItems = document.querySelectorAll(".menu-item");
    const menuResult = document.querySelector("#selectorResult");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = "#FFF";
        menuItems[i].style.fontWeight = "normal";
    }

    menuResult.textContent = "결과가 이 곳에 출력된다.";
}

function inputTest() {
    const input = document.getElementById("inputTest");
    const result = document.getElementById("inputTestResult");

    result.textContent = input.value.trim() !== "" ? `입력한 값: ${input.value}` : "입력된 값이 없습니다.";

    input.focus();
}

function addMemo() {
    const memoInput = document.querySelector("#memoInput");
    const memoList = document.querySelector("#memoList");
    const memoText = memoInput.value.trim();
    
    if (memoText.length === 0) {
        memoInput.focus();
        return;
    }

    const emptyMessage = document.querySelector(".empty-message");

    if (emptyMessage !== null) {
        emptyMessage.remove();
    }

    memoList.innerHTML += `<p class="memo-item">${memoText}</p>`;
    memoInput.value = "";
    memoInput.focus();
}

function clearMemo() {
    const memoList = document.querySelector("#memoList");
    const memoInput = document.querySelector("#memoInput");

    memoList.innerHTML = `<p class="empty-message">작성한 메모가 이 곳에 추가된다.</p>`;
    memoInput.value = "";
    memoInput.focus();
}

function addMemoEnter(event) {
    if (event.key === "Enter") {
        addMemo();
    }
}

function readValue() {
    const bg = document.getElementById("chattingBg");
    const input = document.getElementById("chattingInput");
    const message = input.value.trim();

    if (message.length === 0) {
        input.focus();
        return;
    }

    bg.innerHTML += `<p><span>${message}</span></p>`;
    bg.scrollTop = bg.scrollHeight;

    input.value = "";
    input.focus();
}

function inputEnter(event) {
    if (event.key === "Enter") {
        readValue();
    }
}

function changeProfile() {
    const name = document.querySelector("#profileName");
    const job = document.querySelector("#profileJob");
    const intro = document.querySelector("#profileIntro");

    name.innerHTML = `<p>제임스</p>`;
    job.innerHTML = `<p>경찰</p>`;
    intro.innerHTML = `<p>저는 이 도시를 지키겠습니다.</p>`;
}

function highlightAllMenu() {
    const menu = document.querySelectorAll(".menu");
    
    for (let i = 0; i < menu.length; i++) {
        menu[i].style.backgroundColor = "lightgray";
    }
}

function highlightFirstMenu() {
    const menu = document.querySelector(".menu");
    menu.style.backgroundColor = "skyblue";
}

function numberingFruit() {
    const list = document.querySelectorAll("#fruitList li")

    for (let i = 0; i < list.length; i++) {
        list[i].style.listStyleType = "decamal";
    }

}

function printSubject() {
    const result = document.querySelector("#subjectResult");
    const subjects = document.getElementsByName("subject");
    let selected = "";

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            selected = subjects[i].value;
        }
    }

    if (selected === "") {
        result.textContent = "입력된 정보가 없습니다."
    } else {
        result.textContent = `선택한 과목: ${selected}`
    }
}