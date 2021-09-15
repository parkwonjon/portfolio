//restairant.js

$(function () {
  $('.mainbanner h2').show().stop().animate({
        top: '50%',
        opacity: 1
    }, 1000);
    
    
    
    var fnum = 0; //이동픽셀수
    function flowImg() {
        fnum++;

        var fw = $('.res-slide li').first().width(); 
        
        if (fnum > fw) {
            $('.res-slide').append($('.res-slide li').first()).css({
                left: '-10px'
            });
            fnum = 0;
        } else {
            $('.res-slide').css({
                left: -fnum + 'px'
            });
        }

    }
    setInterval(flowImg, 15);
});
