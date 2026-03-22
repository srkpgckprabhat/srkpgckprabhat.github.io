const targetDate = new Date("March 23, 2026 11:00:00").getTime();

setInterval(()=>{
let now=new Date().getTime();
let diff=targetDate-now;

let d=Math.floor(diff/(1000*60*60*24));
let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById("countdown").innerHTML =
d+" Days "+h+" Hours "+m+" Minutes";

},1000);
