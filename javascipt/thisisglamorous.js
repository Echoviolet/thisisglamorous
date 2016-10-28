$(document).ready(function(){
    'use strict';

    //Design
    $('.design').mouseenter(function(){
        $('.decor').show();
    });
    $('.design').mouseleave(function(){
        $('.decor').hide();
    });

    //Inspiration
    $('.inspire').mouseenter(function(){
        $('.inspiration').show();
    });
    $('.inspire').mouseleave(function(){
        $('.inspiration').hide();
    });

    //Travel
    $('.traveller').mouseenter(function(){
        $('.travel').show();
    });
    $('.traveller').mouseleave(function(){
        $('.travel').hide();
    });

    //Fashion
    $('.vogue').mouseenter(function(){
        $('.fashion').show();
    });
    $('.vogue').mouseleave(function(){
        $('.fashion').hide();
    });

    //Arts
    $('.art').mouseenter(function(){
        $('.culture').show();
    });
    $('.art').mouseleave(function(){
        $('.culture').hide();
    });

    //Food
    $('.goods').mouseenter(function(){
        $('.food').show();
    });
    $('.goods').mouseleave(function(){
        $('.food').hide();
    });

    //How-to
    $('.how').mouseenter(function(){
        $('.to').show();
    });
    $('.how').mouseleave(function(){
        $('.to').hide();
    });

    //Shop
    $('.shopping').mouseenter(function(){
        $('.shop').show();
    });
    $('.shopping').mouseleave(function(){
        $('.shop').hide();
    });

    //当页面的  的时候，header显示，logo停止滚动
       $(window).bind('scroll',function(){
           var temp  = $(window).scrollTop();
           if(temp >=180){
               $('.nav').show();
           }else{
               $('.nav').hide();
           }
       });

    $('.left').mouseenter(function(){
        $('.mask').fadeIn(500);
    });
    $('.left').mouseleave(function(){
        $('.mask').fadeOut(500);
    });

    $('.upper').mouseenter(function(){
        $('.mask1').fadeIn(500);
    });
    $('.upper').mouseleave(function(){
        $('.mask1').fadeOut(500);
    });

    $('.showToggle').mouseenter(function(){
        $('.mask3').fadeIn(500);
    });
    $('.showToggle').mouseleave(function(){
        $('.mask3').fadeOut(500);
    });

    $('.showToggle1').mouseenter(function(){
        $('.mask4').fadeIn(500);
    });
    $('.showToggle1').mouseleave(function(){
        $('.mask4').fadeOut(500);
    });

    //$('.black-image').mouseenter(function(){
    //    $('.surface').fadeOut();
    //})






});
