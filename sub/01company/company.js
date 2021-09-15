$(function(){
   
    $('.mainbanner h2').show().stop().animate({
        top: '50%',
        opacity: 1
    }, 1000);
    
    
    
     $('.banner').delay(500).show().stop().animate({
        top: '0',
        opacity: 1
    }, 1000);
     $('.banner .wrap').delay(500).show().stop().animate({
        top: '0',
        opacity: 1
    }, 1000);
    
    $('.banner h3').delay(2000).show().stop().animate({
        left: '50%',
        opacity: 1
    }, 1000);
    
    $('.banner p').show(2000).stop().animate({
        left: '0',
        opacity: 1
    }, 1000);
    
    
    
    
    /*스크롤액션*/
   /* var p1= 0,
        p2= 0;
    
    var con1top, con2top;
    
     var scrollAction = function(n) {
            $('.con' + n).find('.pic').css({
                opacity: 1
            });
     };
    
    
    $(window).scroll(function(){
       var scTop = $(this).scrollTop();
        
        if(scTop > 0 && scTop < con1top){
           if(p1 === 1)return false;
            p1 = 1;
            scrollAction(1);
           }else if (scTop > con1top && scTop < con2top){
               if(p2 === 1) return false;
               p2 = 1;
               scrollAction(2);
           }
        
        
    });

    $(function() {
        
            $('html,body').stop().delay(100).animate({
                scrollTop: 0
            }, 10);
        
            con1top = $('.con1').offset().top;
            con1top = $('.con2').offset().top;
    
    
    });*/
    
    $('.con1 .txtwrap').show(2000).stop().animate({
        left: 0,
       opacity: 1
    }, 1000);
    
    $('.con1 .imb').show(2000).stop().animate({
        right: 0,
        opacity: 1
    }, 1000);
    
    $('.con2 .txtwrap').show(2000).stop().animate({
        right: 0,
       opacity: 1
    }, 1000);
    
    $('.con2 .imb').show(2000).stop().animate({
        left: '-200px',
        opacity: 1
    }, 1000);
    
});