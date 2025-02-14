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


    //Miscellaneous Works Section functionality
    var targetProjectIndex = 0;
    const projectNames = [] //Array of valid projects, by name, in the "projects" object
    const projects = {
        "WinFormsFinanceApp": {
            image: "",
            description: "A personal finance fpplication written using Windows Forms for the .NET Framework in Visual Studio 2022.",
            gitHubURL: "",
            tools: ".NET Windows Forms and Visual Studio 2022",
        },
    }

    $(".misc-works-button").on('click', function(){
        var direction = $(this).attr("direction");
        
        if (direction == "left"){
            targetProjectIndex -= 1;
            if(targetProjectIndex < 0){
                targetProjectIndex = projectNames.length -1
            }
        }
        var targetProject = projectNames[targetProjectIndex];
        
        console.log(targetProject)
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