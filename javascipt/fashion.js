$(document).ready(function(){
    'use strict';

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'

    });

    $('.swiper-container').mouseenter(function(){
        $('.swiper-button-white').css('opacity','0.2');
    });
    $('.swiper-container').mouseleave(function(){
        $('.swiper-button-white').css('opacity','0');
    });

    $('.swiper-button-prev').mouseenter(function(){
        $('.swiper-button-prev').css('opacity','0.8');
    });
    $('.swiper-button-prev').mouseleave(function(){
        $('.swiper-button-prev').css('opacity','0.3');
    });
    $('.swiper-button-next').mouseenter(function(){
        $('.swiper-button-next').css('opacity','0.8');
    });
    $('.swiper-button-next').mouseleave(function(){
        $('.swiper-button-next').css('opacity','0.3');
    });
});