$(document).ready(function(){
    'use strict';

    //Design
    $('.design').mouseenter(function(){
        $('.decor').show();
        $('.inspiration').hide();
        $('.travel').hide();
        $('.fashion').hide();
        $('.culture').hide();
        $('.food').hide();
        $('.to').hide();
        $('.shop').hide();

    });
    $('.decor').mouseleave(function(){
        $('.decor').hide();
    });

    //Inspiration
    $('.inspire').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').show();
        $('.travel').hide();
        $('.fashion').hide();
        $('.culture').hide();
        $('.food').hide();
        $('.to').hide();
        $('.shop').hide();
    });
    $('.inspiration').mouseleave(function(){
        $('.inspiration').hide();
    });

    //Travel
    $('.traveller').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').hide();
        $('.travel').show();
        $('.fashion').hide();
        $('.culture').hide();
        $('.food').hide();
        $('.to').hide();
        $('.shop').hide();
    });
    $('.travel').mouseleave(function(){
        $('.travel').hide();
    });

    //Fashion
    $('.vogue').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').hide();
        $('.travel').hide();
        $('.fashion').show();
        $('.culture').hide();
        $('.food').hide();
        $('.to').hide();
        $('.shop').hide();
    });
    $('.fashion').mouseleave(function(){
        $('.fashion').hide();
    });

    //Arts
    $('.art').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').hide();
        $('.travel').hide();
        $('.fashion').hide();
        $('.culture').show();
        $('.food').hide();
        $('.to').hide();
        $('.shop').hide();
    });
    $('.culture').mouseleave(function(){
        $('.culture').hide();
    });

    //Food
    $('.goods').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').hide();
        $('.travel').hide();
        $('.fashion').hide();
        $('.culture').hide();
        $('.food').show();
        $('.to').hide();
        $('.shop').hide();

    });
    $('.food').mouseleave(function(){
        $('.food').hide();
    });

    //How-to
    $('.how').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').hide();
        $('.travel').hide();
        $('.fashion').hide();
        $('.culture').hide();
        $('.food').hide();
        $('.to').show();
        $('.shop').hide();
    });
    $('.to').mouseleave(function(){
        $('.to').hide();
    });

    //Shop
    $('.shopping').mouseenter(function(){
        $('.decor').hide();
        $('.inspiration').hide();
        $('.travel').hide();
        $('.fashion').hide();
        $('.culture').hide();
        $('.food').hide();
        $('.to').hide();
        $('.shop').show();
    });
    $('.shop').mouseleave(function(){
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

//goTop
    $('.goTop a').click(function(){
        $('html,body').animate({scrollTop:'0px'},500);
    });

    //
    $('.mask-flower').mouseenter(function(){
        $('.mask-flower').fadeOut(1000);
    });
    $('.middle-picture').mouseleave(function(){
        $('.mask-flower').fadeIn(1000);
    });
});
