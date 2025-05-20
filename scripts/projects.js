// Script for loading projects
$(function(){

    const projects = [
        {
            title: "Personal Portfolio",
            description: "My personal portfolio website made with HTML, Tailwind CSS, JS, and jQuery. This portfolio has a homepage, about page, projects page, and a contact page.",
            image: "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747713819/PersonalPortfolioMobileSite_vzfeym.png",
            tools: ["HTML", "SASS", "JS", "jQuery"],
            github: "https://github.com/Brycerw11/Personal_Portfolio",
            demolink: "https://brycerw11.github.io/Personal_Portfolio/",
        },
        {
            title: "Community Center Website",
            description: "A website for a fictional community center at the West-MEC Northeast Campus. Designed for the FBLA Website Design Event's 2024-2025 Prompt.",
            image: "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747716034/CommunityCenterScreenshot_uocrtj.jpg",
            tools: ["HTML", "CSS", "JS"],
            github: "https://github.com/Brycerw11/community_center_website",
            demolink: "https://brycerw11.github.io/community_center_website/",
        },
        {
            title: "Picture Grid Website",
            description: "A website made exclusively using CSS grids for the layout. A fictional website for an online costume store.",
            image: "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747716142/PictureGridWebsiteScreenshot_nnsc7d.png",
            tools: ["HTML", "CSS"],
            github: "https://github.com/Brycerw11/Picture_Grid_Project",
            demolink: "https://brycerw11.github.io/Picture_Grid_Project/",
        },
        {
            title: "Super Snake 3000",
            description: "A snake game with a variety of gamemodes and options for the best snake experience. All DOM manipulation done through jQuery.",
            image: "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747716717/SuperSnake3000Screenshot_cihskl.png",
            tools: ["HTML", "CSS", "JS", "jQuery"],
            github: "https://github.com/Brycerw11/SuperSnake3000",
            demolink: "https://brycerw11.github.io/SuperSnake3000/pages/game.html",
        },
        {
            title: "MoneyMage",
            description: "Personal Finance Application written using Windows Forms for the .NET Framework in Visual Studio 2022.",
            image: "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747717132/MoneyMageScreenshot_xzz7p9.png",
            tools: ["C#", ".NET", "Windows Forms", "Visual Studio"],
            github: "https://github.com/Brycerw11/WinFormsFinanceApp",
            demolink: null
        },
        {
            title: "Java Significant Figure Counter",
            description: "A small Java program that asks for a number and respondes with the number of significant figures that number has.",
            image: "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747717339/JavaSigFigProgramScreenshot_v38zv1.png",
            tools: ["Java 17", "IntelliJ IDEA",],
            github: "https://github.com/Brycerw11/java_significant_figure_counter",
            demolink: null
        },
    ]
        
    const defaultImage = "https://res.cloudinary.com/dtxrpihy6/image/upload/v1747715411/contributions_vdkqdc.png";

    // Loop through and add all of the projects
    for(let project of projects){

        let projectImage = (project.image)? project.image: defaultImage;

        let toolsHTML = "";
        for(let tool of project.tools){
            toolsHTML += `<li class="tool">${tool}</li>`;
        }

        var projectLinks;
        if(project.demolink != null && project.demolink != undefined && project.demolink != ""){
            projectLinks = `
                <div id="project-links">
                    <a href="${project.github}"> <i class="fa-brands fa-github"></i>GitHub Repo </a>
                    <a href="${project.demolink}"> Link to Demo<i class="fa fa-link  " aria-="true"></i> </a>
                </div>
            `;
        }else{
            projectLinks = `
                <div id="project-links">
                    <a href="${project.github}"> <i class="fa-brands fa-github"></i>GitHub Repo </a>
                </div>
            `;
        }

        let projectHTML = `
            <div class="project">
                <div id="project-header" style="background-image: url(${projectImage})">
                    <h3>${project.title}</h3>
                </div>
                <p id="project-description">${project.description}</p>
                <ul id="project-tools">
                    ${toolsHTML}
                </ul>
                ${projectLinks}
            </div>
        `

        $("#projects-container").append(projectHTML)
    }
})