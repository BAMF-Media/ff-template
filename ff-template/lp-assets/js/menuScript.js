$(document).ready(function () {

    $("#closeBtnMenu").click(function () {
        $("#navMenu").css({"width": "0"});
    });

    $("#openNav").click(function () {
        $("#navMenu").css({"width": "100%"});
    })
});



$("#header").on("click","a, #closeBtn, closeBtnMenu", function (event) {
    //cancel stanadrt click on link
    // event.preventDefault();


    const mq = window.matchMedia( "(min-width: 769px)" );
// media query event handler
    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 769px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

// media query change
    function WidthChange(mq) {
        if (mq.matches) {
            // window width is at least 769px
            $("#navMenu").css({"width": "100%"});
        }
        else{
           $("#navMenu").css({"width": "0%"});
        }
    }

});
