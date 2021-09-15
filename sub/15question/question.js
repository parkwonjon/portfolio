//question
$(function(){
   $('.qna li a').click(function(e){
       e.preventDefault();
       
      $(this).children('img').css({
          transform: 'rotate(180deg)'
       }).parent().next('.answerbox').slideToggle().parent().siblings().children('.answerbox').slideUp().prev().children().css({
           transform: 'rotate(0)'
      });
       
   });
});