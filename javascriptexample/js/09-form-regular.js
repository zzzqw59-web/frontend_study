const nameRegExp = /^[가-힣]{2,5}$/;
const idRegExp = /^[A-Za-z][A-Za-z0-9]{4,7}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegExp = /^010-\d{4}-\d{4}$/;

function printMessage(element, message, isConfirm) {
    element.textContent = message;
    element.className = isConfirm ? "message-text confirm" : "message-error error";
}

const checkRegExpButton = document.querySelector("#checkRegExpButton");
const regExpResult = document.querySelector("#regExpResult");

checkRegExpButton.addEventListener("click", function() {
    const regExp = /JavaScript/;
    const text = "JavaScript 기초 수업입니다.";

    const testResult = regExp.test(text);
    const execResult = regExp.exec(text);


    regExpResult.innerHTML = `
        <p><strong>검사 문자열:</strong> ${text}</p>
        <p><strong>정규 표현식:</strong> /JavaScript/</p>
        <p><strong>test() 결과:</strong> ${testResult}</p>
        <p><strong>exec() 결과:</strong> ${execResult === null ? "null" : execResult[0]}</p>
    `;
});

const userName = document.querySelector("#userName");
const nameCheckButton = document.querySelector("#nameCheckButton");
const nameResult = document.querySelector("#nameResult");

nameCheckButton.addEventListener("click", function() {
    const name = userName.value.trim();

    if (name === "") {
        printMessage(nameResult, "이름을 입력하세요.", false);
        userName.focus();
        return;
    }

    if (nameRegExp.test(name)) {
        printMessage(nameResult, "사용 가능한 이름입니다.", true);
    } else {
        printMessage(nameResult, "이름은 한글 2~5글자로 입력해야 합니다.", false);
        userName.focus();
    }
});

const userId = document.querySelector("#userId");
const idCheckButton = document.querySelector("#idCheckButton");
const idResult = document.querySelector("#idResult");

idCheckButton.addEventListener("click", function() {
    const id = userId.value.trim();

    if (id === "") {
        printMessage(idResult, "아이디를 입력하세요.", false);
        userId.focus();
        return;
    }

    if (idRegExp.test(id)) {
        printMessage(idResult, "사용 가능한 아이디입니다,", true);
    } else {
        printMessage(idResult, "아이디는 영문자로 시작하고, 영문자와 숫자만 사용하여 5~8 글자 이내로 입력해야합니다.", false);
        userId.focus();
    }
});

const userPassword = document.querySelector("#userPassword");
const passwordCheckButton = document.querySelector("#passwordCheckButton");
const passwordResult = document.querySelector("#passwordResult");

passwordCheckButton.addEventListener("click", function() {
    const password = userPassword.value;

        if (password === "") {
            printMessage(passwordResult, "비밀번호를 입력하세요.", false);
            userPassword.focus();
            return;
        }

        if (passwordRegExp.test(password)) {
            printMessage(passwordResult, "사용 가능한 비밀번호입니다.", true);
        } else {
            printMessage(passwordResult, "비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 포함하여 6~10글자로 입력해야 합니다.", false);
            userPassword.focus();
        }
});

const emailInput = document.querySelector("#emailInput");
const emailCheckButton = document.querySelector("#emailCheckButton");
const emailResult = document.querySelector("#emailResult");

emailCheckButton.addEventListener("click", function() {
    const email = emailInput.value.trim();

    if (email === "") {
        printMessage(emailResult, "이메일을 입력하세요.", false);
        emailInput.focus();
        return;
    }

    if (emailRegExp.test(email)) {
        printMessage(emailResult, "올바른 이메일 형식입니다.", true);
    } else {
        printMessage(emailResult, "이메일은 아이디@도메인 형식으로 입력해야합니다.", false);
        emailInput.focus();
    }
});

const phoneInput = document.querySelector("#phoneInput");
const phoneCheckButton = document.querySelector("#phoneCheckButton");
const phoneResult = document.querySelector("#phoneResult");

phoneCheckButton.addEventListener("click", function() {
    const phone = phoneInput.value.trim();

    if (phone === "") {
        printMessage(phoneResult, "휴대폰 번호를 입력하세요.", false);
        phoneInput.focus();
        return;
    }

    if (phoneRegExp.test(phone)) {
        printMessage(phoneResult, "올바른 휴대폰 번호 형식입니다.", true);
    } else {
        printMessage(phoneResult, "휴대폰 번호는 010-0000-0000 형식으로 입력해야합니다.", false);
        phoneInput.focus();
    }
})

const nameInput = document.querySelector("#nameInput");
const idInput = document.querySelector("#idInput");
const passwordInput = document.querySelector("#passwordInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
const formResult = document.querySelector("#formResult");

nameInput.addEventListener("input", function() {
    const name = nameInput.value.trim();

    if (name === "") {
        printMessage(formResult, "이름을 입력하세요.", false);
        return;
    }
})
