$("#changeTextButton").on("click", function() {
    $("#changeText").text("jQuery의 text() 메서드로 글자 내용을 변경하였다.").css("color", "#8A3D2B").css("font-weight", "bold");
});

$("#eventButton").on("click", function() {
    $("#eventMessage").toggle();
});

$("#image").on({
    mouseenter: function() {
        $(this).attr("src", "../img/dog.png");
    },
    mouseleave: function() {
        $(this).attr("src", "../img/cat.png");
    }
});

$("#addClassButton").on("click", function() {
    $("#styleBox").addClass("active-style");
});

$("#removeClassButton").on("click", function() {
    $("#styleBox").removeClass("active-style");
});

$("#toggleClassButton").on("click", function() {
    $("#styleBox").toggleClass("active-style");
});

$("#printNameButton").on("click", function() {
    const userName = $("#userName").val().trim();

    if (userName === "") {
        $("#nameResult").text("이름을 입력하세요.");
        $("#userName").focus();
        return;
    }

    $("#nameResult").text(`${userName}님, jQuery 학습을 시작합니다.`);
    $("#userName").val("");
    $("#userName").focus();
})