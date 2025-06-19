const nav = document.querySelectorAll('header a');

nav.forEach(link => {
    link.addEventListener("click",function(event){
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView();
    });
});
