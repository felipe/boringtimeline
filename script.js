$('.timeline li').css('width',(100/$('.timeline li').length)/2+'%');
$('.timeline li').css('margin-left',(100/$('.timeline li').length)/2+'%');
$('.timeline li').hover(function(){
    $('.timeline li').removeClass('active');
    $(this).addClass('active');
    $('.timeline .description').html($(this).children('div.details').html());
    $(this).children('div.details').css('display','none');
})
