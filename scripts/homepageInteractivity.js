$(document).ready(function(){
    //General Code
    //if the screen width is less than the "sm" breakpoint in tailwind (if on mobile version of site)
    if(window.matchMedia("(max-width: 40rem)").matches){
        //Do things needed for mobile version
    }

    //Nav Menu Functionality on mobile
    var isMobileNavMenuOpen = false;
    $("#hamburger-menu-icon").click(function (){
        
        $("#mobile-nav-menu").slideToggle(1000)

        if(isMobileNavMenuOpen){ //if nav menu already open
            //swap to being closed
            $(this).css({
                'transform':'rotate(0deg)'
            })
        }
        else{
            //swap to being open
            $(this).css({
                'transform':'rotate(90deg)'
            })
        }

        isMobileNavMenuOpen = !isMobileNavMenuOpen;
    })


    //Desktop Project Image Galleries
    $(".project-gallery-button").click(function (){
        var projectNum = $(this).attr("projectnum")
        var animationDirection = $(this).attr("gallerydirection");

        if (animationDirection == 'left'){
            $("#project-gallery-container").animate({
                "padding-left": -1 * $("#project-gallery-image").width()
            }, 1000)
        }
        else if (animationDirection == 'right'){
            var newSrc

            $("#project-gallery-image-animation").attr("src") = $("#project-gallery-image").attr("src")
            $("#project-gallery-container").css("padding-left", -1*$("#project-gallery-image").width())
            $("#project-gallery-image").attr("src") = 

            $("#project-gallery-container").animate({
                "padding-left": -1 * $("#project-gallery-image").width()
            }, 1000)
        }
        
    })


    //To Top Button's Smooth Scroll
    function scrollToTop(){
        //uses an animation to scroll to the top over 700 miliseconds instead of instantly
        $('html, body').animate({ 
            scrollTop: 0
        }, 700);
    }

    $("#compact-to-top-button").on('click', function( event){   
        event.preventDefault(); //overrides default scroll to top functionality
        scrollToTop();
    })
    $("#expanded-to-top-button").on('click', function( event){   
        event.preventDefault(); //overrides default scroll to top functionality
        scrollToTop();
    })

})