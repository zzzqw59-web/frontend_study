function showExternalMessage() {
    alert("외부 JS파일에서 실행한 알림창입니다.")
}

function changeColor(colorName) {
    document.querySelector('#box').style.backgroundColor = colorName;
}

function resetColor() {
    document.querySelector("#box").style.backgroundColor = "white";
}

function showEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    let eventNumbers1 = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            eventNumbers1.push(numbers[i]);
        }
    }
}

const eventNumbers2 = numbers.filter((number) => number % 2 == 0);

document.querySelector('#arrayResult').textContent = 
    `명령형 결과: ${eventNumbers1.join(', ')} / 선언형 결과: ${eventNumbers2.join(', ')}`;

console.log('명령형 프로그래밍', eventNumbers1);
console.log('선언형 프로그래밍', eventNumbers2);

