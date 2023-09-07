const days1=document.getElementById("days");
const hours1=document.getElementById("hours");
const min1=document.getElementById("min");
const sec1=document.getElementById("second");
const newyear="9 sep 2023";
function countdown(){
    const enteredDate = new Date(newyear);
    const currdate=new Date();
    const timeleft=(enteredDate-currdate)/1000;
    const days=Math.floor(timeleft/3600/24);
    const hours=Math.floor((timeleft/3600)%24);
    const min=Math.floor((timeleft/60)%60);
    const sec=Math.floor(timeleft)%60;
    days1.innerHTML=formatTime(days);
    hours1.innerHTML=formatTime(hours);
    min1.innerHTML=formatTime(min);
    sec1.innerHTML=formatTime(sec);
    if (
        enteredDate.getFullYear() === currdate.getFullYear() &&
        enteredDate.getMonth() === currdate.getMonth() &&
        enteredDate.getDate() === currdate.getDate()
      ) {
        // The dates are equal, do something
        const container1 = document.getElementById('container1');
        container1.style.display = 'block';
        setTimeout(switchContainers, 10000);
      }
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);

function switchContainers() {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    container1.style.display = 'none';
    container2.style.display = 'block';
}