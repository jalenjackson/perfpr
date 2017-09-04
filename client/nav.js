Meteor.startup(function() {
    $(".services-link").hover(function(){
       $(".services-tab").addClass("show-services-tab");
      setTimeout(function(){
          $(".pic-show").css({opacity: "1"});

      },300);
        setTimeout(function(){
            $(".show").addClass("show-services-info");
        },500);

    }, function(){
        $(".show").removeClass("show-services-info");
        $(".pic-show").css({opacity: "0"});

        setTimeout(function(){
            $(".services-tab").removeClass("show-services-tab");
        },300);
    });




});