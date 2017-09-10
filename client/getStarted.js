$(window).scroll(function(){
    wScroll = $(this).scrollTop();

    console.log(wScroll);

    if(wScroll > 0){
        $(".parallax-scroll").css({
            "transform":'translate(0px, ' + wScroll/10 + '%)'
        });
    }
});

