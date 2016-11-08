$(document).ready(function(){
    'use strict';

    //Design
    $('.design').mouseenter(function(){
        $('.decor').fadeIn();
    });
    $('.design').mouseleave(function(){
        $('.decor').fadeOut();
    });

    //Inspiration
    $('.inspire').mouseenter(function(){
        $('.inspiration').fadeIn();
    });
    $('.inspire').mouseleave(function(){
        $('.inspiration').fadeOut();
    });

    //Travel
    $('.traveller').mouseenter(function(){
        $('.travel').fadeIn();
    });
    $('.traveller').mouseleave(function(){
        $('.travel').fadeOut();
    });

    //Fashion
    $('.vogue').mouseenter(function(){
        $('.fashion').fadeIn();

    });
    $('.vogue').mouseleave(function(){
        $('.fashion').fadeOut();
    });

    //Arts
    $('.art').mouseenter(function(){
        $('.culture').fadeIn();
    });
    $('.art').mouseleave(function(){
        $('.culture').fadeOut();
    });

    //Food
    $('.goods').mouseenter(function(){
        $('.food').fadeIn();
    });
    $('.goods').mouseleave(function(){
        $('.food').fadeOut();
    });

    //How-to
    $('.how').mouseenter(function(){
        $('.to').fadeIn();
    });
    $('.how').mouseleave(function(){
        $('.to').fadeOut();
    });

    //Shop
    $('.shopping').mouseenter(function(){
        $('.shop').fadeIn();
    });
    $('.shopping').mouseleave(function(){
        $('.shop').fadeOut();
    });

    //
    $('.left').mouseenter(function(){
        $('.mask').fadeIn(500);
    });
    $('.left').mouseleave(function(){
        $('.mask').fadeOut(500);
    });

    //
    $('.upper').mouseenter(function(){
        $('.mask1').fadeIn(500);
    });
    $('.upper').mouseleave(function(){
        $('.mask1').fadeOut(500);
    });

    //
    $('.showToggle').mouseenter(function(){
        $('.mask3').fadeIn(500);
    });
    $('.showToggle').mouseleave(function(){
        $('.mask3').fadeOut(500);
    });

    //
    $('.showToggle1').mouseenter(function(){
        $('.mask4').fadeIn(500);
    });
    $('.showToggle1').mouseleave(function(){
        $('.mask4').fadeOut(500);
    });

    //
    $('.cover').mouseenter(function(){
        $('.cover').fadeOut('slow');
    });
    $('.black-image').mouseleave(function(){
        $('.cover').fadeIn('slow');
    });

    //
    $('.cover1').mouseenter(function(){
        $('.cover1').fadeOut('slow');
    });
    $('.black-image1').mouseleave(function(){
        $('.cover1').fadeIn('slow');
    });

    //
    $('.mask-flower').mouseenter(function(){
        $('.mask-flower').fadeOut(1000);
    });
    $('.middle-picture').mouseleave(function(){
        $('.mask-flower').fadeIn(1000);
    });
});

