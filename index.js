
$(function(){
    // let count = 0;
    // setInterval(function() {
    //     count++;
    //     if (count >= 4) {
    //         count = 0;
    //     }
    //     $('.banner li').eq(count).fadeIn().siblings('li').fadeOut();
    // },3000)
    setInterval(function(){
        let imgs = $('.banner-bgi > li');
        imgs.eq(3).stop().fadeOut(500,function(){
            $(this).show().prependTo('.banner-bgi');
        })
    },2000);

    $(document).scroll(function(){
        if($(document).scrollTop() >= $('header').height()){
            $('nav').addClass('navbar-fixed-top');
            $('.aboutme').css('marginTop','100px');
        }else{
            $('nav').removeClass('navbar-fixed-top');
            $('.aboutme').css('marginTop',0)
        }
    })

})

