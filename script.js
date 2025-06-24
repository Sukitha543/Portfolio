 const hero = document.querySelector("#home .hero");
 const about = document.querySelector("#about .about");
 const skills = document.querySelector("#mySkills .grid");
 const projects =  document.querySelector("#projects .flex");

async function fetchData(hero,about,skills,projects) {
    
    const response = await fetch ('data.json');
    const data = await response.json();

    hero.innerHTML = `<h1>${data.Home.name}</h1>
    <p>${data.Home.description}</p>
    <a class="btn btn-outline-dark btn-lg" href="${data.Home.link}" role="button">View My CV</a>`;

    about.innerHTML = `<div class="img">
        <img id="img01" src="${data.AboutMe.image}" height="${data.AboutMe.height}" height="${data.AboutMe.width}" alt="${data.AboutMe.alt}">
    </div>
    <div class="myself">
        <p class="slide">${data.AboutMe.description}</p>
    </div>`;

    data.mySkills.forEach(skill => {const skillDiv =document.createElement("div")
        skillDiv.innerHTML=`<img src="${skill.image}" alt="${skill.alt}" height="${skill.height}">
                      <p>${skill.name}</p>`;

        skills.appendChild(skillDiv);
    });

    data.projects.forEach(project => {const projectsDiv = document.createElement("div")
        projectsDiv.innerHTML = `<div>
    <h3>${project.title}</h3>
    <img class="projects" src="${project.image}" alt="${project.alt}">
    <p>${project.description}</p>
    <a class="btn btn-outline-success" href="${project.link}" role="button">View Source Code</a>
    </div>`;
            projects.appendChild(projectsDiv);
    });


}
fetchData(hero,about,skills,projects);

const navHeader = document.querySelectorAll('header a');


navHeader.forEach(link => {
    link.addEventListener("click",function(event){
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView();
    });
});


 