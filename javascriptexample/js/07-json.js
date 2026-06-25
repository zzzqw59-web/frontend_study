const person = {
    "name": "HongGilDong",
    "age": 25,
    "address": {
        "nation": "Korea",
        "city": "Seoul",
        "postalCode": 12345
    },
    "hobby": ["영화", "여행"],
    "phone": "010-1234-0987",
};

const btnDefault = document.querySelector("#btnDefault");
const view = document.querySelector("#view");

btnDefault.addEventListener("click", function () {
    const tag = `
        <p><strong>이름:</strong> ${person.name}</p>
        <p><strong>나이:</strong> ${person["age"]}</p>
        <p><strong>주소:</strong> ${person.address.nation}, ${person.address.city}, ${person.address.postalCode}</p>
        <p><strong>취미:</strong> ${person.hobby.join(", ")}</p>
        <p><strong>번호:</strong> ${person.phone}</p>
    `;

    view.innerHTML = tag;
});

const company = {
    "name": "(주)자바컴퍼니",
    "since": 2013,
    "department": ["기획팀", "영업팀", "디자인팀", "개발팀"],
    "biz": ["소프트웨어 개발", "통신판매업", "위치정보서비스"],
};

const btnJsonArray = document.querySelector("#btnJsonArray");
const companyName = document.querySelector("#companyName");
const since = document.querySelector("#since");
const department = document.querySelector("#department");
const biz = document.querySelector("#biz");

btnJsonArray.addEventListener("click", function () {
    companyName.textContent = company.name;
    since.textContent = company.since;

    let departmentList = "";
    company.department.forEach(function (dept) {
        departmentList += `<li>${dept}</li>`;
    });
    department.innerHTML = departmentList;

    let bizList = "";
    for (let i = 0; i < company.biz.length; i++) {
        bizList += `<li>${company.biz[i]}</li>`;
    }
    biz.innerHTML = bizList;
});

const employee = {
    "ceo": {
        "name": "홍길동",
        age: 45,
    },
    manager: {
        name: "이과장",
        age: 38,
    },
    intern: {
        name: "김철수",
        age: 24
    },
};

const btnDisplayJsonTree = document.querySelector("#btnDisplayJsonTree");
const companyTableBody = document.querySelector("#companyTableBody");


btnDisplayJsonTree.addEventListener("click", function () {
    companyTableBody.innerHTML = "";

    for (let position in employee) {
        console.log(position);
        const person = employee[position];

        const row = `
            <tr>
                <td>${position}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
            </tr>
        `;
        companyTableBody.innerHTML += row;
    }
})

const language = {
    3: {
        title: "JavaScript",
        sentence: "웹 페이지를 동적으로 만들기 위한 프로그래밍 언어",
        view: 6,
        regist: "2026.05.22"
    },
    2: {
        title: "CSS",
        sentence: "웹 페이지의 디자인을 담당하는 스타일 시트",
        view: 15,
        regist: "2026.04.17"
    },
    1: {
        title: "HTML",
        sentence: "웹 페이지의 구조를 정의하는 마크업 언어",
        view: 19,
        regist: "2026.04.05"
    },
};

const languageButton = document.querySelector(".languageButton");
const languageTableBody = document.querySelector(".languageTableBody");


languageButton.addEventListener("click", function () {
    languageTableBody.innerHTML = "";

    for (let number in language) {
        const check = language[number];
        const row = `
            <td>${number}</td>
            <td>${check.title}</td>
            <td>${check.sentence}</td>
            <td>${check.view}</td>
            <td>${check.regist}</td>

        `;
        languageTableBody.innerHTML += row;
    }
})

const user = {
    name: "홍길동",
    hobby: ["여행", "영화"],
    // greeting: function () {
    //     return `안녕하세요. 나의 이름은 ${this.name}입니다. <br>취미는 ${this.hobby.join(", ")}입니다.`;
    // }

    // 메서드 축약형
    greeting() {
        return `안녕하세요. 나의 이름은 ${this.name}입니다. <br>취미는 ${this.hobby.join(", ")}입니다.`;
    }
};

const member = {
    id: "nodeuser",
    password: "node1234",
    name: "홍길동",
    mobile: "010-8934-XXXX",
    country: "대한민국",
};

const objectLiteralButton = document.querySelector("#objectLiteralButton");
const objectLiteralResult = document.querySelector("#objectLiteralResult");
const objectLiteralMemberResult = document.querySelector("#objectLiteralMemberResult");

objectLiteralButton.addEventListener("click", function () {
    user.age = 25;

    objectLiteralResult.innerHTML = `
        <p>${user.greeting()}</p>
        <p>추가된 age 값: ${user.age}</p>
    `;

    let tag = "";
    for (let info in member) {
        tag += `${info} : ${member[info]} <br/>`
    }

    objectLiteralMemberResult.innerHTML = tag;
});



const convertUser = {
    name: "javauser",
    email: "javauser@naver.com",
    phone: "02-506-3536",
};

const convertButton = document.querySelector("#convertButton");
const stringResult = document.querySelector("#stringResult");
const jsonResult = document.querySelector("#jsonResult");

convertButton.addEventListener("click", function () {
    // json -> javaScript 객체
    const userString = JSON.stringify(convertUser);
    let userData = "";

    // javaScript 객체 -> json
    JSON.parse(userString, function(key, value) {
        if (key !== "") {
            userData += `${key}: ${value} <br>`;
        }
    });

    stringResult.textContent = userString;
    jsonResult.innerHTML = userData;
});


const subjects = ["HTML", "CSS", "JavaScript"];

const subjectInput = document.querySelector("#subjectInput");
const addSubject = document.querySelector("#addSubject");
const subjectList = document.querySelector("#subjectList");

function renderSubjectList() {
    subjectList.innerHTML = "";

    subjects.forEach(function(subject) {
        subjectList.innerHTML += `<li>${subject}</li>`;
    });
}

addSubject.addEventListener("click", function () {
    const subject = subjectInput.value.trim();

    if (subject === "") {
        alert("과목명을 입력하세요.");
        subjectInput.focus();
        return;
    }

    subjects.push(subject);

    subjectInput.value = "";
    subjectInput.focus();

    renderSubjectList();
});

renderSubjectList();


const title = document.querySelector(".title");
const author = document.querySelector(".author");
const listDate = document.querySelector("#listDate");
const bookTableBody = document.querySelector(".bookTableBody");
const addBook = document.querySelector(".addBook");

const book = [
    {
        title: "참을 수 없는 존재의 가벼움",
        author: "밀란 쿤데라",
        date: "2026-07-08"
    },
    {
        title: "사피엔스",
        author: "유발 하라리",
        date: "2026-04-26"
    },
    {
        title: "미드나잇 라이브러리",
        author: "매트 헤이그",
        date: "2026-06-10"
    }
];

function renderingList() {
    bookTableBody.innerHTML = "";

    book.forEach(function(book) {
        bookTableBody.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author} 저자(글)</td>
                <td>${book.date}</td>
            </tr>
        `
    })
}

renderingList();

addBook.addEventListener("click", function() {
    const bookValue = title.value.trim();
    const authorValue = author.value.trim();
    const dateValue = listDate.value;

    if (bookValue === "") {
        alert("제목을 입력하세요.");
        title.focus();
        return;
    }

    if (authorValue === "") {
        alert("저자를 입력하세요.");
        author.focus();
        return;
    }

    if (dateValue === "") {
        alert("출판연도를 입력하세요.")
        listDate.focus();
        return;
    }

    const obj = {
        title: bookValue,
        author: authorValue,
        date: dateValue
    };

    book.push(obj);

    renderingList();
})