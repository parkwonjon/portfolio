//shop.js
$(function () {
    $('.shop-list li').slice(0, 8).show();

    $('.load-more').on('click', function (e) {
        e.preventDefault();

        $('.shop-list li:hidden').slice(0, 4).slideDown();

        if ($('.shop-list li:hidden').length === 0) {
            $('.load-more').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });

});
