let time=document.querySelector(".time");
let box=document.querySelector(".box");
let hours=60;
function timer(){
    hours=hours-1;
    if(hours<1){
        hours=0
        document.querySelector(".header").innerHTML="Vaqt tugadi"
        clearInterval(myinterval)
    }
    if(hours<10){
        hours="0"+hours;
    }
    time.innerHTML=`00:${hours}`;
    
}
myinterval=setInterval(timer, 1000);
box.addEventListener("mousemove",()=>{
clearInterval(myinterval)
})
box.addEventListener("mouseout",()=>{
    myinterval=setInterval(timer, 1000);
})

