const textInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const selectValue = document.querySelector("#select");
const comment = document.querySelector("#comment");
const submitButton = document.querySelector("#submitButton");
const textResult = document.querySelector("#textResult");
const reservationForm = document.querySelector("#reservationForm");


reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = textInput.value.trim();
    const date = dateInput.value;
    const select = selectValue.value;
    const text = comment.value;

    console.log(name);

    textResult.innerHTML = `
        <p>이름: ${name}</p>
        <p>상담 날짜: ${date}</p>
        <p>상담 분야: ${select}</p>
        <p>상담 내용: ${text}</p>
    `;
});

const ameInput = document.querySelector("#ameInput");
const ameValue = document.querySelector("#ameValue");
const latteInput = document.querySelector("#latteInput");
const latteValue = document.querySelector("#latteValue");
const smooInput = document.querySelector("#smooInput");
const smooValue = document.querySelector("#smooValue");
const totalInput = document.querySelector("#totalInput");
const totalValue = document.querySelector("#totalValue");
const consoleButton = document.querySelector("#consoleButton");
const resetButton = document.querySelector("#resetButton");
const drinkResult = document.querySelector(".drinkResult");

consoleButton.addEventListener("click", function () {
    const ame = ameInput.value.trim();
    const latte = latteInput.value.trim();
    const smoo = smooInput.value.trim();

    ameValue.value = ame * 3000;
    latteValue.value = latte * 4000;
    smooValue.value = smoo * 5500;
    totalInput.value = Number(ame) + Number(latte) + Number(smoo);
    totalValue.value = (ame * 3000) + (latte * 4000) + (smoo * 5500);

    drinkResult.innerHTML = `
        아메리카노: ${ame * 3000}원 <br>
        카페라떼: ${latte * 4000}원 <br>
        딸기스무디: ${smoo * 5500}원 <br>
        총 합계: ${(ame * 3000) + (latte * 4000) + (smoo * 5500)}원
    `;
});

resetButton.addEventListener("click", function () {
    ameInput.value = 0;
    latteInput.value = 0;
    smooInput.value = 0;
    ameValue.value = 0;
    latteValue.value = 0;
    smooValue.value = 0;
    totalInput.value = 0;
    totalValue.value = 0;

    drinkResult.textContent = "주문서 결과가 이 곳에 출력된다.";
});

const members = [];

const memberInput = document.querySelector("#memberInput");
const memberButton = document.querySelector("#memberButton");
const memberCount = document.querySelector("#memberCount");
const memberList = document.querySelector("#memberList");
const memberText = document.querySelector("#memberText");

function renderMemberList() {
    memberList.innerHTML = "";

    members.forEach(function (member) {
        memberList.innerHTML += `<li>${member}</li>`;
    });

    memberCount.textContent = `현재 참여자 명단 ${members.length}명`;
    memberText.textContent = `참여자 명단: ${members.join(", ")}`;
}

memberButton.addEventListener("click", function () {
    const member = memberInput.value.trim();

    if (member === "") {
        alert("참여자 이름을 입력하세요.");
        memberInput.focus();
        return;
    }

    members.push(member);

    memberInput.value = "";
    memberInput.focus();

    renderMemberList();
});

const products = [];

const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productButton = document.querySelector("#productButton");
const productCount = document.querySelector("#productCount");
const productList = document.querySelector("#productList");
const totalPrice = document.querySelector("#totalPrice");

function printProductList() {
    productList.innerHTML = "";

    let total = 0;

    products.forEach(function(product) {
        productList.innerHTML += `
            <div class="product-item">
                <strong>${product.name}</strong>
                <span>${product.price}원</span>
            </div>
        `;
        total += product.price;
    });

    productCount.textContent = `현재 상품: ${products.length}개`;
    totalPrice.textContent = `총 금액: ${total}원`;
}

productButton.addEventListener("click", function () {
    const name = productName.value.trim();
    const price = Number(productPrice.value);

    if (name === "" || productPrice.value === "" || isNaN(price)) {
        alert("상품명과 가격을 모두 입력하시오.");
        return;
    }

    const product = {
        name: name,
        price: price,
    };

    products.push(product);

    productName.value = "";
    productPrice.value = "";
    productName.focus();

    printProductList();
})

