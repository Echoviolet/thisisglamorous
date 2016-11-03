$(document).ready(function(){
    'use strict';
    $(window).bind('scroll',function(){
        var tmp = $(window).scrollTop();
        if (tmp >100){
            $('.logo-picture').animate({height:'55px'});
        }else
        {
            $('.logo-picture').animate({height:'125px'});
        }
    });

    //init header
    $('.leather').mouseenter(function(){
        $('.goods').fadeIn();
    });
    $('.leather').mouseleave(function(){
        $('.goods').fadeOut();
    });


    $('.foot').mouseenter(function(){
        $('.wear').fadeIn();
    });
    $('.foot').mouseleave(function(){
        $('.wear').fadeOut();
    });


    $('.home').mouseenter(function(){
        $('.office').fadeIn();
    });
    $('.home').mouseleave(function(){
        $('.office').fadeOut();
    });

    $('.zhu').mouseenter(function(){
        $('.bao').fadeIn();
    });
    $('.zhu').mouseleave(function(){
        $('.bao').fadeOut();
    });
});


