console.log('Hello!');
const secondEle=document.querySelector('#seconds');
const minuteEle=document.querySelector('#minutes');
const hourEle=documnet.querySelector('#hours');
const dayEle=document.querySelector('#days');

let counter=0;
setInterval(()=>{
    secondEle.textContent=counter % 60;
    const minutes=Math.floor(counter/60);
    minuteEle.textContent=minutes%60;
    const hours=Math.floor(minutes/60);
    hourEle.textContent=hours%24;
    const days=Math.floor(hours/24);
    dayEle.textContent=days;
    counter++;

},1000);