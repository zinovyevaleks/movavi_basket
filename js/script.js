// Прилипание к верху страницы

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 156) {
            $('.basket').addClass('stickytop');
        }
        else{
            $('.basket').removeClass('stickytop');
        }
    });
});


// добавление в корзину
