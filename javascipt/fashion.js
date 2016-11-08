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


    //分页插件

    $(function(){
        var initPagination = function() {
            var num_entries = $('.allPicture-hide .main-container').length;
            // 创建分页
            $("#Pagination").pagination(num_entries, {
                num_edge_entries: 2, //边缘页数
                num_display_entries: 3, //主体页数
                callback: pageselectCallback,
                items_per_page:1 //每页显示1项
            });
        }();

        function pageselectCallback(page_index, jq){
            var new_content = $(".allPicture-hide .main-container:eq("+page_index+")").clone();
            $(".allPicture").empty().append(new_content); //装载对应分页的内容
            return false;
        }
    });

});