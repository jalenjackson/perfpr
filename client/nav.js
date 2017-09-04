Meteor.startup(function() {

    var isHovering = false;

    $(".services-link, .services-tab").hover(function(){
        isHovering = true;
      setTimeout(function(){
          $(".pic-show").addClass("show-img");

      },300);
        $(".services-tab").css({height: "50%"});
        $(".services-tab").addClass("show-services-tab");

        setTimeout(function(){
            $(".show").addClass("show-services-info");
        },500);

    }, function(){
        isHovering = false;



        if(!isHovering) {
            setTimeout(function () {
                $(".show").removeClass("show-services-info");

            }, 500);
            setTimeout(function () {

                $(".services-tab").removeClass("show-services-tab");
            }, 1000);
        }
    });

    $("a").click(function(){
        $(".services-tab").css({height: "0px"});
    });





});