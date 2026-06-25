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