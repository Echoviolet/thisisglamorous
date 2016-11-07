
$(document).ready(function($) {

    var logo = $('#logo');
    $(window).scroll(function () {
        scrollPos = $(this).scrollTop();
        var total = scrollPos * 0.5 - 250;
        logo.css({
            'top': (scrollPos * 0.2 + 80) + "px",
        });
    });

    $(window).scroll(function(){

        if(($(window).scrollTop() > 200)){
            $(".nav").show();
        }
        if(($(window).scrollTop() < 200)){
            $(".nav").hide();
        }

    });

});
