const card = document.querySelector('.card');
const container = document.querySelector('.container');
const content = document.querySelector('.content-card');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //PopOut
    content.style.transform = "translateZ(200px)"
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    content.style.transform = "translateZ(0px)"
});

window.addEventListener('load', (e) => {
    card.classList.add('animate__bounceInUp');
    setTimeout(() => {
        card.classList.remove('animate__bounceInUp');
    }, 1000)
});
