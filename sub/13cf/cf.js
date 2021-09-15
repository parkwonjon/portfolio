//cf.js
$(function () {
    $('.movie-list .movie').slice(0, 3).show();

    $('.load-more').on('click', function (e) {
        e.preventDefault();

        $('.movie-list .movie:hidden').slice(0, 3).slideDown();

        if ($('.movie-list .movie:hidden').length === 0) {
            $('.load-more').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });

});
