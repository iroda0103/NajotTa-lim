// let hours=20;
let time=document.querySelector(".time")
// // localStorage.setItem("minutes",53)
// let minutes=39;
// let secund=0;
// setInterval(function () {
//     if(localStorage.getItem("minutes")){
//         minutes=+localStorage.getItem("minutes");
//         hours=+localStorage.getItem("hours");
//         secund=+localStorage.getItem("secund");
//     } 
//     secund++;
//     if(secund==60){
//         secund=secund-60;
//         minutes++;
//     }
//     if(minutes==60){
//         minutes=minutes-60;
//         hours++;
//     }
//     if(hours==24){
//         hours=0;
//     }
   
//      localStorage.setItem("minutes",minutes)
//      localStorage.setItem("hours",hours)
//      localStorage.setItem("secund",secund)


//      if(`${secund}`.length<2){
//         secund=`0`+secund;
//     }
//     if(`${minutes}`.length<2){
//         minutes=`0`+minutes;
//     }
//     if(`${hours}`.length<2){
//         hours=`0`+hours;
//     }
//     time.innerText=`${hours}:${minutes}:${secund}`;
//     // console.log(`${hours}:${minutes}:${secund}`)

// }, 1000);

//2-usul(Optimal yo'l)

function timer(){
    let a=new Date();
let hours=a.getHours();
let minutes=a.getMinutes();
let secund=a.getSeconds();
    time.innerText=`${hours}:${minutes}:${secund}`;
}
setInterval(timer,1000)

