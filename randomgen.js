let EMPTY_PAGE = true;

$("#confirm-button").click(function (){
    let MINIMUM = parseInt($("#minimum").val());
    let MAXIMUM = parseInt($("#maximum").val());
    let RESULT = Math.floor(Math.random() * (MAXIMUM - MINIMUM + 1)) + MINIMUM;
    if (MINIMUM >= MAXIMUM) {
        if ($("#result")) {
            $("#result").remove();
        }
        $(".minmax-container").after('<p id="error">Maximum pick must be larger than minimum pick!</p>');
        setTimeout(function () {
            $("#error").remove();
        }, 2000);
        $("html").css("height", "140px");
    }
    else if (EMPTY_PAGE === true) {
        $(".minmax-container").after('<p id="result"></p>');
        $("#result").append('<img src="buffer.gif" width="16px" height="16px">');
        setTimeout(function () {
            $("#result").remove();
            $(".minmax-container").after('<p id="result"></p>');
            $("#result").append(RESULT);
        }, 1500);
        EMPTY_PAGE = false;
    }
    else {
        $("#result").remove()
        $(".minmax-container").after('<p id="result"></p>');
        $("#result").append('<img src="buffer.gif" width="16px" height="16px">');
        setTimeout(function () {
            $("#result").remove();
            $(".minmax-container").after('<p id="result"></p>');
            $("#result").append(RESULT);
        }, 1500);
        EMPTY_PAGE = false;
    }
});

$("#minimum").on("mousewheel", function (event){
    event.preventDefault();
    let INCREMENT = 1;
    let VALUE = Math.round(parseFloat($(this).val()) * 10) / 10;
    if (!(VALUE)) {
        VALUE = 0;
    }
    if (event.originalEvent.deltaY < 0) {
        $(this).val(VALUE + INCREMENT);
    }
    else {
        $(this).val(VALUE - INCREMENT);
    }
});

$("#maximum").on("mousewheel", function (event){
    event.preventDefault();
    let INCREMENT = 1;
    let VALUE = Math.round(parseFloat($(this).val()) * 10) / 10;
    if (!(VALUE)) {
        VALUE = 0;
    }
    if (event.originalEvent.deltaY < 0) {
        $(this).val(VALUE + INCREMENT);
    }
    else {
        $(this).val(VALUE - INCREMENT);
    }
});