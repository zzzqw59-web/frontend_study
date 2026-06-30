const subjectInput = document.querySelector("#subjectInput");
const addSubjectButton = document.querySelector("#addSubjectButton");
const subjectList = document.querySelector("#subjectList");

addSubjectButton.addEventListener("click", function() {
    const subject = subjectInput.value.trim();

    if (subject === "") {
        alert("학습 주제를 입력하세요.");
        subjectInput.focus();
        return;
    }


    const li = document.createElement("li");
    const text = document.createTextNode(subject);

    li.appendChild(text);
    subjectList.appendChild(li);

    subjectInput.value = "";
    subjectInput.focus();
});

subjectList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        subjectList.removeChild(event.target);
    }
});

const completeButtons = document.querySelectorAll(".complete-button");

completeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const li = button.parentElement;

        li.classList.toggle("complete");
    });
});

const prevTodoButton = document.querySelector("#prevTodoButton");
const nextTodoButton = document.querySelector("#nextTodoButton");

prevTodoButton.addEventListener("click", function() {
    const selectedTodo = document.querySelector("#todoMoveList .selected");
    const prevTodo = selectedTodo.previousElementSibling;

    if (prevTodo === null) {
        alert("첫번째 할 일");
        return;
    }

    selectedTodo.classList.remove("selected");
    prevTodo.classList.add("selected");
});

nextTodoButton.addEventListener("click", function() {
    const selectedTodo = document.querySelector("#todoMoveList .selected");
    const nextTodo = selectedTodo.nextElementSibling;

    if (nextTodo === null) {
        alert("마지막 할 일");
        return;
    }

    selectedTodo.classList.remove("selected");
    nextTodo.classList.add("selected");
});

const questionButtons = document.querySelectorAll(".question-button");


questionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const answer = button.nextElementSibling;
        answer.classList.toggle("show");
    });
});