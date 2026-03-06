function startQuest(){

document.getElementById("quest1").classList.remove("hidden");

let music=document.getElementById("bgMusic");
music.play();

}

/* QUEST 1 */

function check1(){

let ans=document.getElementById("answer1").value
.toLowerCase()
.trim();

if(ans==="4th feb" || ans==="4 feb"){
document.getElementById("quest1").classList.add("hidden");
document.getElementById("quest2").classList.remove("hidden");
}
else{
alert("Try again ❤️");
}

}

/* QUEST 2 */

function check2(){

let ans=document.getElementById("answer2").value
.toLowerCase()
.trim();

if(ans==="mountains"){
document.getElementById("quest2").classList.add("hidden");
document.getElementById("quest3").classList.remove("hidden");
}
else{
alert("Try again ❤️");
}

}

/* QUEST 3 */

function check3(){

let ans=document.getElementById("answer3").value
.toLowerCase()
.trim();

if(ans==="mouli"){
document.getElementById("quest3").classList.add("hidden");
document.getElementById("quest4").classList.remove("hidden");
}
else{
alert("Try again ❤️");
}

}

/* QUEST 4 */

function check4(){

let ans=document.getElementById("answer4").value
.toLowerCase()
.trim();

if(ans==="babu" || ans==="bubu"){
document.getElementById("quest4").classList.add("hidden");
document.getElementById("final").classList.remove("hidden");

startSlideshow();
typeMessage();
createHearts();

}
else{
alert("Try again ❤️");
}

}

/* SLIDESHOW */

function startSlideshow(){

let slides=document.getElementsByClassName("slide");
let index=0;

slides[0].style.display="block";

setInterval(function(){

slides[index].style.display="none";
index=(index+1)%slides.length;
slides[index].style.display="block";

},3000);

}

/* TYPING MESSAGE */

function typeMessage(){

let text="From our first date on 4th Feb to every moment today, you make my life beautiful. I love you more than words can say ❤️";

let i=0;

function typing(){

if(i<text.length){
document.getElementById("loveText").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}

}

typing();

}

/* HEART RAIN */

function createHearts(){

let hearts=document.querySelector(".hearts");

setInterval(function(){

let heart=document.createElement("div");

heart.classList.add("heart");
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"%";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},300);

}

/* STARRY BACKGROUND */

function createStars(){

let starsContainer=document.querySelector(".stars");

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

starsContainer.appendChild(star);

}

}

createStars();