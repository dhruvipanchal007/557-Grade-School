
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
console.log('hello')
const secondsEle=document.querySelector("#seconds");
const minutesEle=document.querySelector("#minutes");
const hoursEle=document.querySelector("#hours");
const daysEle=document.querySelector("#days");

let counter=0;

setInterval(() => {
    secondsEle.textContent = counter % 60;
    const minutes = Math.floor(counter/60);
    minutesEle.textContent = minutes % 60;
    const hours = Math.floor (minutes/60);
    hoursEle.textContent = hours % 24;
    const days = Math.floor (hours / 24);
    daysEle.textContent = days;
    counter++;
},1000);