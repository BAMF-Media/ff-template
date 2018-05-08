var width = $(window).width();

if (width < 992) {
    $(".plus").children().text("Learn More");

}


function getPlusMinusDesktop() {



    $(".plus").each(function (index) {

            $(this).on("click", function () {
                var width = $(window).width();

                if (width > 992) {

                $(".calendarDateInnerDesc:eq(" + index + ")").slideToggle();

                if ($(this).children().text() == "+") {
                    $(this).children().text("-");
                    $(this).css("background-color", "#474747");

                }
                else {
                    $(this).children().text("+");
                    $(this).css("background-color", "#ff4000");

                }

            }

            });


    });


};


function getPlusMinusMobile() {





        $(".plus").each(function (index) {


            $(this).on("click", function () {
                var width = $(window).width();


                if (width < 992) {


                    $(".calendarDateInnerDesc:eq(" + index + ")").slideToggle();

                    if ($(this).children().text() == "Learn More") {
                        $(this).children().text("Less");
                        $(this).css("background-color", "#474747");
                    }
                    else {
                        $(this).children().text("Learn More");
                        $(this).css("background-color", "#ff4000");
                    }
                }

            });


        });

};

getPlusMinusMobile();
getPlusMinusDesktop();
// when we resize the window set "Learn More" when < 992 and set + when > 992

$(window).on('resize', function () {
    //width = $(this).width();

    $(".plus").each(function (index) {

        if (window.matchMedia("(max-width: 992px)").matches) {



            if ($(".plus:eq(" + index + ") ").children().text() == "+") {
                $(".plus:eq(" + index + ") ").children().text("Learn More");
            }
            if ($(".plus:eq(" + index + ") ").children().text() == "-") {
                $(".plus:eq(" + index + ") ").children().text("Less");
            }


            // getPlusMinusMobile();


        } else {


            if ($(".plus:eq(" + index + ") ").children().text() == "Learn More") {
                $(".plus:eq(" + index + ") ").children().text("+");
            }
            if ($(".plus:eq(" + index + ") ").children().text() == "Less") {
                $(".plus:eq(" + index + ") ").children().text("-");
            }


            // getPlusMinusDesktop();


        }


    });


});

