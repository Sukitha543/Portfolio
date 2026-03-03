const hero = document.querySelector("#home .hero");
const about = document.querySelector("#about .about");
const skills = document.querySelector("#mySkills .grid");
const projects = document.querySelector("#projects .projects-container");

async function fetchData(hero, about, skills, projects) {

    const response = await fetch('data/data.json');
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

    data.mySkills.forEach(skill => {
        const skillDiv = document.createElement("div")
        skillDiv.innerHTML = `<img src="${skill.image}" alt="${skill.alt}" height="${skill.height}">
                      <p>${skill.name}</p>`;

        skills.appendChild(skillDiv);
    });

    data.projects.forEach(project => {
        const projectsDiv = document.createElement("div")
        projectsDiv.className = "project-card";
        projectsDiv.innerHTML = `
            <div class="project-img-wrapper">
                <img class="project-img" src="${project.image}" alt="${project.alt}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a class="btn-project" href="${project.link}" target="_blank" role="button">View Source Code</a>
            </div>
        `;
        projects.appendChild(projectsDiv);
    });


}
fetchData(hero, about, skills, projects).then(() => {
    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once shown
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('section h1, .grid > div, .projects-container > .project-card, .about > div, .contactForm');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});

const navHeader = document.querySelectorAll('header a');


navHeader.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('.nav').offsetHeight || 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});