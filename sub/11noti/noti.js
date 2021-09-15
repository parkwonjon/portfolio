//noti.js
$(function () {
    $('.news-list li').slice(0, 4).show();

    $('.load-more').on('click', function (e) {
        e.preventDefault();

        $('.news-list li:hidden').slice(0, 2).slideDown();

        if ($('.news-list li:hidden').length === 0) {
            $('.load-more').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });

});
