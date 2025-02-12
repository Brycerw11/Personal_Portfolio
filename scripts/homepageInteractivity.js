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
})