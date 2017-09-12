$(window).scroll(function(){
    wScroll = $(this).scrollTop();

    console.log(wScroll);



    if(wScroll > 0){
        $(".parallax-scroll").css({
            "transform":'translate(0px, ' + wScroll/15 + '%)'
        });

    }

    if(wScroll > 20){
        $(".design-header").css({
            "backgroundPosition":'250px -600px'
        });
    } else {
        $(".design-header").css({
            "backgroundPosition":'350px -770px'
        });
    }








});

