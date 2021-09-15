//history
$(function () {

    var pno = 0;
    var p1pos, p2pos, p3pos, p4pos, p5pos, p6pos, p7pos;
    const gap = 200;
    var click_sts = 0;
    $(window).scroll(function () {

        if (click_sts === 1) return false;

        var scTop = $(this).scrollTop();

        if (scTop < 500) {
            /*$('.bullet').hide();*/
            $('.bullet').css({
                opacity: 0,
                top: '50%'
            });
        } else {
            /*$('.bullet').show();*/
            $('.bullet').css({
                opacity: 1,
                top : '40%'
            });
        }
        if (scTop > p1pos && scTop < p1pos + gap) {
            pno = 0;
            cng();
        } else if (scTop > p2pos - gap && scTop < p2pos + gap) {
            pno = 1;
            cng();
        } else if (scTop > p3pos - gap && scTop < p3pos + gap) {
            pno = 2;
            cng();
        } else if (scTop > p4pos - gap && scTop < p4pos + gap) {
            pno = 3;
            cng();
        } else if (scTop > p5pos - gap && scTop < p5pos + gap) {
            pno = 4;
            cng();
        } else if (scTop > p6pos - gap && scTop < p6pos + gap) {
            pno = 5;
            cng();
        } else if (scTop > p7pos - gap) {
            pno = 6;
            cng();
        }

    }); //scroll()

    $(function () {
        p1pos = $('#page1').offset().top;
        p2pos = $('#page2').offset().top;
        p3pos = $('#page3').offset().top;
        p4pos = $('#page4').offset().top;
        p5pos = $('#page5').offset().top;
        p6pos = $('#page6').offset().top;
        p7pos = $('#page7').offset().top;

        $('.bullet li a').click(function (e) {
            e.preventDefault();

            click_sts = 1;

            var idx = $(this).parent().index();
            pno = idx;

            var pid = $(this).attr('href');
            var pagepos = $(pid).offset().top;


            $('html, body').animate({
                scrollTop: pagepos + 'px'
            }, 800, 'easeInOutQuint', function () {
                click_sts = 0;
            });

            cng();
        });
    });

    function cng() {
        $('.bullet li').eq(pno).addClass('selb').siblings().removeClass('selb');
    };
});
