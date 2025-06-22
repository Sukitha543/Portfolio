const navHeader = document.querySelectorAll('header a');
const navFooter = document.querySelectorAll('footer a');

navHeader.forEach(link => {
    link.addEventListener("click",function(event){
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView();
    });
});

navFooter.forEach(link => {
    link.addEventListener("click",function(event){
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView();
    });
});