const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minutes");
const secondEl=document.querySelector(".seconds");
const ampmEl=document.querySelector("#ampm");
function updateClock(){
   let h= new Date().getHours();
   let m= new Date().getMinutes();
   let s= new Date().getSeconds();
   let ampm= "AM";
   if(h>12){
    h= h-12;
    ampm="PM"
   }
   if(h<10){
    h="0" + h;
   }
   if(m<10){
    m="0" + m;
   }
   if(s<10){
    s="0" + s;
   }
   hourEl.innerHTML=h;
   minuteEl.innerHTML=m;
   secondEl.innerHTML=s;
   ampmEl.innerHTML=ampm;
   setTimeout(function(){
    updateClock(),1000
   })


}

updateClock();


