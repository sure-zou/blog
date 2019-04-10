$(function(){
        // /轮番图/ 
        var swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
          });
        // //   分页

        // var swiper = new Swiper('.swiper-container', {
        //     pagination: '.swiper-pagination',
        //     slidesPerView: 4,
        //     paginationClickable: true,
        //     spaceBetween: 20,
        //     nextButton: '.page-prve',
        //     prevButton: '.page-prves'
            
        // });
     //隐藏显现菜单栏   
    $('.ico-menu0 ').click(function () {
        $_tr = $('.menu-list');
        if ($_tr.is(':hidden')) {
            $('.ico-menu0').removeClass('ico-menu');
            $('.ico-menu0').addClass('ico-menu2');
            $_tr.show();
        } else {
            $('.ico-menu0').removeClass('ico-menu2');
            $('.ico-menu0').addClass('ico-menu');
           
            $_tr.hide();
        }
    });

    // 搜索框
    $('.ico-fd0  ').click(function () {
        $_tr = $('.search-box');
        if ($_tr.is(':hidden')) {
            $('.ico-fd0').removeClass('ico-fd');
            $('.ico-fd0').addClass('ico-fd1');
            $_tr.show();
        } else {
            $('.ico-fd0').removeClass('ico-fd1');
            $('.ico-fd0').addClass('ico-fd');
           
            $_tr.hide();
        }
    });
    // 手風琴
    $('.problem-title1').click(function(){
        $(this).toggleClass('active').siblings('.problem-title1').removeClass('active');
         $(this).next().slideToggle(200).parent().siblings('.col-xs-12').children('.problem-list').slideUp(300);
    })

    $('.footer-shop ').click(function(){
        $(this).siblings('.footer-list');
         $(this).next().slideToggle(200).siblings('footer-list').slideUp(300);
    })
})
