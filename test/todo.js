const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

let todos = [];

addBtn.addEventListener("click", function() {
    const value = todoInput.value.trim();

    if (value === "") {
        alert("내용을 입력하세요.");
        return;
    }

    todos.push(value);

    todoInput.value = "";

    render();
})

function render() {
    todoList.innerHTML = "";

    todos.forEach(function(todo) {
        todoList.innerHTML += `
            <li>${todo}</li>
        `;
    });
}