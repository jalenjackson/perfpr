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

                if(!isHovering) {
                    $(".services-tab").removeClass("show-services-tab");
                    $(".services-tab").css({height: "0%"});
                }

            }, 1000);
        }
    });

    $("a").click(function(){
        $(".services-tab").css({height: "0px"});
    });


    var isAtHome = false;


    if(window.location.pathname === "/"){
        isAtHome = true;
    } else {
        isAtHome = false;
    }


    $(window).on("load", function(){

        $(".mailchimp").click(function(){
            window.location.href = "http://eepurl.com/ccIqGb";
        });

        setTimeout(function(){
            $(".add-slide-up").addClass("slide-up");
        },2500);

        if(isAtHome) {
            setTimeout(function () {
                $("body").css({overflowY: "scroll"});
            }, 3500);
        }

        if(window.location.pathname === "/getstarted"){
            $("body").css({overflowY: "scroll"});
        }

        $(".fa-bars").click(function(){
           $(".nav-dropdown").addClass("show-nav-dropdown");
            $(".design-color").show();
            $(".fa-times").fadeIn("slow");
            $(".slide-away").css("transform","translate(0px, 50px)");
        });

        $(".fa-times").click(function(){
            $(".slide-away").css("transform","translate(-1000px, 50px)");
            $(".nav-dropdown").removeClass("show-nav-dropdown");
            $(".hidden-text").css("transform", "translateY(-1000px)");
            $(".slide-away").css("transform","translate(0px, 50px)");
        });

        $(".mobile-services").click(function(){
            $(".slide-away").css("transform","translate(-1000px, 50px)");
            $(".hidden-text").css("transform", "translateY(-420px)");
        });

        $(".fa-arrow-left").click(function(){
            $(".hidden-text").css("transform", "translateY(-1000px)");
            $(".slide-away").css("transform","translate(0px, 50px)");
        });

        $("a").click(function(){

                $(".nav-dropdown").removeClass("show-nav-dropdown");
            $(".slide-away").css("transform","translate(-1000px, 50px)");
            $(".nav-dropdown").removeClass("show-nav-dropdown");
            $(".hidden-text").css("transform", "translateY(-1000px)");
            $(".slide-away").css("transform","translate(0px, 50px)");

        });

        $(".intro").addClass("intro-gone");
    });


    jQuery.fn.letterDrop = function() {
        var obj = this;

        var drop = {
            arr : obj.text().split( '' ),

            range : {
                min : 1,
                max : 9
            },

            styles : function() {
                var dropDelays = '\n', addCSS;

                for ( i = this.range.min; i <= this.range.max; i++ ) {
                    dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';
                }

                addCSS = $( '<style>' + dropDelays + '</style>' );
                $( 'head' ).append( addCSS );
            },

            main : function() {
                var dp = 0;
                obj.text( '' );

                $.each( this.arr, function( index, value ) {

                    dp = dp.randomInt( drop.range.min, drop.range.max );

                    if ( value === ' ' )
                        value = '&nbsp';

                    obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );

                });

            }
        };

        Number.prototype.randomInt = function ( min, max ) {
            return Math.floor( Math.random() * ( max - min + 1 ) + min );
        };


        // Create styles
        drop.styles();

        // Initiate
        drop.main();

    };


    $( '.h1-intro' ).letterDrop();



});