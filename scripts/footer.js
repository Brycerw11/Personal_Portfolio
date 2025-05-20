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