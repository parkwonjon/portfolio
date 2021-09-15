//green.js

$(function () {
    
    var p1 = 0,
        p2 = 0,
        p3 = 0,
        p4 = 0,
        p5 = 0,
        p6 = 0,
        p7 = 0;

    var p1pos, p2pos, p3pos, p4pos, p5pos;

    var gap = 400;

    var scrollAction = function (n) {
        $('#page' + n).animate({
            opacity: 1
        });
    };

    
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        if (scTop > 80 && scTop < p2pos - gap) {
            if (p1 === 1) return false;
            p1 = 1;
            scrollAction(1);
            $('.content:nth-child(1) img').animate({
                left : 0
            });
            $('.content:nth-child(1) .txt').animate({
                right : 0
            });
        } else if (scTop > p2pos - gap && scTop < p2pos) {
            if (p2 === 1) return false;
            p2 = 1;
            scrollAction(2);
            $('.content:nth-child(2) img').animate({                
                right : 0
            });
            $('.content:nth-child(2) .txt').animate({
                left : 0
            });
        } else if (scTop > p3pos - gap && scTop < p3pos) {
            if (p3 === 1) return false;
            p3 = 1;
            scrollAction(3);
            $('.content:nth-child(3) img').animate({
                left : 0
            });
            $('.content:nth-child(3) .txt').animate({
                right : 0
            });
        } else if (scTop > p4pos - gap && scTop < p4pos) {
            if (p4 === 1) return false;
            p4 = 1;
            scrollAction(4);
            $('.water').animate({
                top : '0'
            });
        } else if (scTop > p5pos - gap && scTop < p5pos) {
            if (p5 === 1) return false;
            p5 = 1;
            scrollAction(5);
            $('.local').animate({
                top : '0'
            },500);
        }


    });

    $(function () {
        $('html,body').stop().delay(100).animate({
            scrollTop: 0
        }, 10);
        
        p1pos = $('#page1').offset().top;
        p2pos = $('#page2').offset().top;
        p3pos = $('#page3').offset().top;
        p4pos = $('#page4').offset().top;
        p5pos = $('#page5').offset().top;

    });


});
