//map/js
$(function () {
    var b = $(this).index();
    var i = $('.table-wrap table').index();
    var idx= 0;

    $('.local li').click(function () {
        $(this).addClass('sel').siblings().removeClass('sel');
        if (b = i) {
            $('table').addClass('show').siblings().removeClass('show');
        }
    });




});
