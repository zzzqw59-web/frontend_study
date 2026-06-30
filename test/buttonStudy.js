const box = document.querySelector("#box");
const changeButton = document.querySelector("#changeButton");

changeButton.addEventListener("click", function() {
    box.style.backgroundColor = "green";
    box.style.color = "white";
    box.style.fontWeight = "bold";
});