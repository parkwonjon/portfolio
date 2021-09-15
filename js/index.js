/*main*/



$(function () {
    $('.gnb>li').hover(function () {
        $(this).find('.sub').stop().slideDown();
    }, function () {
        $(this).find('.sub').stop().slideUp();
    });
    var sideSlide = function (c) {
        $('.slide').animate({
            left: '-100%'
        }, 3000, function () {
            $(this).append($('.slide li:first')).css({
                left: 0
            });
        }); //animate
        if (c === 1) clearAutoSide();
        bseq = $('.slide').find('li').eq(1).attr('data-seq');
        if (c === 0) chgIndic(Number(bseq));
    }; //sideSlide
    var chgIndic = function (n) {
        $('.bul li').eq(n).addClass('selb').siblings().removeClass('selb');
    }
    var intcall_side; //인터발 변수
    var autoCallSide = function () {
        intcall_side = setInterval(function () {
            sideSlide(0);
        }, 4000);
    }
    autoCallSide();

    var tcall_side;
    var clearAutoSide = function () {
        clearInterval(intcall_side);
        clearTimeout(tcall_side);
        tcall_side = setTimeout(function () {
            autoCallSide();
        }, 3000);
    }

  
    var moveBtn = 0;
    $('main .abtn').click(function (e) {
        if (moveBtn === 1) return false;
        moveBtn = 1;
        var idx = $(this).index('.abtn');
        var tg = $('.slide');
        if (idx) {
            sideSlide(1);
            moveBtn = 0;
        } else {
            $('.slide').prepend(tg.find('li').last()).css({
                left: '-100%'
            }).animate({
                left: 0
            }, 4000, function () {
                moveBtn = 0;
            }); 
            clearAutoSide();
            bseq = tg.find('li').eq(0).attr('data-seq');
        } 
        chgIndic(Number(bseq));
    }); 

    /*히스토리 페이드인,아웃*/
    $('.history .imgb img:gt(0)').hide();
    setInterval(function () {
        $('.history .imgb img:first').fadeOut().next().fadeIn().end().appendTo('.history .imgb');
    }, 4000);





    /*우리술제품*/
    var shopBg = function () {
        $('.shopbg .sbg-1').animate({
            top: '5%'
        }, 3000).animate({
            top: '0'
        }, 3000);
        $('.shopbg .sbg-2').animate({
            bottom: '5%'
        }, 3000).animate({
            bottom: '0'
        }, 3000);
    }
    setInterval(shopBg); 
    $('.btnL').click(function () {
        goSlide(0);
    });
    $('.btnR').click(function () {
        goSlide(1);
    }); 
    
    var prot = 0;  
    
function goSlide(bang) {
    if (prot === 1) return false;
    prot = 1;

    var tg = document.querySelector('.shop-slide ul');
    
    var tg2 = tg.querySelectorAll('li'); 
    
    if (bang === 0) {
        
        tg.insertBefore(tg2.item(tg2.length-1), tg2.item(0));  
        
    }else if(bang===1){
        
         tg.appendChild(tg2.item(0));
    }    
    tg2= tg.querySelectorAll('li');
    
    for(var i=0; i< tg2.length; i++){    
        
        tg2[i].setAttribute('class','i'+(i+1));
        
    }    
    
    setTimeout(function(){
       prot=0; 
    },400);
}

}); //jquery



