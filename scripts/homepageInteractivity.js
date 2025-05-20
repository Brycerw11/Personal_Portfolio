$(document).ready(function(){
    //General Code
    //if the screen width is less than the "sm" breakpoint in tailwind (if on mobile version of site)
    if(window.matchMedia("(max-width: 40rem)").matches){
        //Do things needed for mobile version
    }

    
    //Miscellaneous Works Section functionality
    var targetProjectIndex = 0;
    const projectNames = ["WinForms Finance App", "Java Significant Figure Counter"] //Array of valid projects, by name, in the "projects" object
    const projects = { //object containing each project as an object
        "WinForms Finance App": {
            image: "./images/project_images/WinFormsFinanceApp.png",
            description: "Personal Finance Application written using Windows Forms with the .NET Framework. Developed for the FBLA Coding and Programming Event's 2024-2025 prompt.",
            gitHubURL: "https://github.com/Brycerw11/WinFormsFinanceApp",
            tools: ".NET Windows Forms and Visual Studio 2022",
        },
        "Java Significant Figure Counter": {
            image: "./images/project_images/JavaSigFigProgramScreenshot.png",
            description: "A small Java program that asks for a number and respondes with the number of significant figures that number has.",
            gitHubURL: "https://github.com/Brycerw11/java_significant_figure_counter",
            tools: "Java 17 and IntelliJ IDEA Community Edition 2024",
        },
    }
    
    //Load Project 1 on page load
    $("#misc-works-project-header").html(projectNames[0]);
    $("#misc-project-desc").html(projects[projectNames[0]].description)
    $("#misc-project-tools").html(projects[projectNames[0]].tools)
    $("#misc-project-github-link").attr('href', projects[projectNames[0]].gitHubURL)
    $("#misc-project-image").attr("src", projects[projectNames[0]].image)

    function TextAnimation(selector, newText, duration = 1000, step = 1){

        var originalLength = $(selector).html().length
        
        //Remove preexisting text
        var iterations = 0;
        var removeTextInterval = setInterval(function(){
            $(selector).html( $(selector).html().substr(0, $(selector).html().length - step) )

            iterations += step;
            if(iterations >= originalLength){
                clearInterval(removeTextInterval)
            }

        }, (duration/2)/ (originalLength / step) )

        setTimeout(function(){ //wait until text is removed then add new text
            //add new text
            iterations = 0;
            var addTextInterval = setInterval(function(){
                $(selector).html( newText.substr(0, iterations +1) )
    
                iterations += step;
                if(iterations >= newText.length){
                    clearInterval(addTextInterval)
                }
    
            }, (duration/2)/ (originalLength / step) )

        }, duration/2)

        setTimeout(function(){ //ensure the new text is fully displayed at the end of transition duration
            $(selector).html( newText )
        }, duration+100)
    }

    // Change misc work when one of the buttons is clicked
    $(".misc-works-button").on('click', function(){
        var direction = $(this).attr("direction");
        
        //find new targetProjectIndex
        if (direction == "left"){
            targetProjectIndex -= 1;
            if(targetProjectIndex < 0){
                targetProjectIndex = projectNames.length -1
            }
        }
        else{
            targetProjectIndex += 1;
            if(targetProjectIndex >= projectNames.length){
                targetProjectIndex = 0
            }
        }

        //Change to new project
        var targetProject = projects[projectNames[targetProjectIndex]];
        
        // Change Text
        TextAnimation("#misc-works-project-header", projectNames[targetProjectIndex])
        TextAnimation("#misc-project-desc", targetProject.description)
        TextAnimation("#misc-project-tools", targetProject.tools)
        // Change Links
        $("#misc-project-github-link").attr('href', targetProject.gitHubURL)

        // Find new url for the image
        var imageUrl = targetProject.image;

        if(targetProject.image == ""){ //replace image with a placeholder if an image is not specified
            imageUrl = "./images/placeholders/NoImageAvailablePlaceholder.jpg"
        }

        // Change image
        $("#misc-project-image").animate({opacity: "1%"}, 500) //fade image out
        setTimeout(function(){ //wait until faded out then switch image and fade in
            $("#misc-project-image").attr("src", imageUrl).animate({opacity: "100%"}, 500)
        }, 500) 
    })


    // Email Form submission stuff
    $("#send-email-form-button").on("click", function(){
        let senderName = $("#email-name-input").val().replace(" ", "%20");
        let senderEmail = $("#email-email-input").val().replace(" ", "%20");
        let emailSubject = $("#email-subject-input").val().replace(" ", "%20");
        let emailBody = $("#message-body-input").val().replace(" ", "%20");

        confirm(senderName, senderEmail, emailSubject, emailBody);

        location.href = `mailto:brycewahl07@gmail.com?subject=From%20${senderName}%20at%20${senderEmail}:%20${emailSubject}&body=${emailBody}`;
    })

    // Dictionary to help with writing an email
    
    $("#email-inputs button").on('click', ()=>{
        let word = $("#word-to-search").val()

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response =>{
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then(data =>{
            $("#dictionary-output").html(`<h4>${data[0].word}</h4> <hr>`);

            for(let meaning of data[0].meanings){                
                let listOfDefintions = ""
                let iterations = 0;
                for(let def of meaning.definitions){
                    if(iterations >= 5){break;}
                    iterations++;
                    
                    listOfDefintions += `<li>${def.definition}</li>`
                }

                $("#dictionary-output").append(`<p><span class="bold-text">${meaning.partOfSpeech}:</span> <ol>${listOfDefintions}</ol></p>`)
            }
        }).catch(error =>{
            $("#dictionary-output").html(`<h4>Something went wrong.</h4>`);
            console.error(error)
        })
    })
})