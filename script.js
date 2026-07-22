// =========================
// PHOO PYAE SONE PREMIUM V2
// JAVASCRIPT
// =========================



// ⭐ STAR GENERATOR

const stars = document.getElementById("stars");


for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";


let size=Math.random()*4+1;


star.style.width=size+"px";

star.style.height=size+"px";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";


star.style.animationDelay=
Math.random()*5+"s";


stars.appendChild(star);

}



// ❤️ FLOATING HEART SYSTEM


function createHeart(){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=
Math.random()*100+"%";


heart.style.fontSize=
(15+Math.random()*35)+"px";


heart.style.animationDuration=
(5+Math.random()*5)+"s";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},10000);



}



setInterval(createHeart,500);





// 💌 LOVE LETTER


function openLetter(){


let box=document.getElementById("letter");


box.style.display="block";


box.style.animation=
"letterOpen 1s";


}




function closeLetter(){


document.getElementById("letter")
.style.display="none";


}




// ✨ ADD LETTER ANIMATION


let style=document.createElement("style");


style.innerHTML=`

@keyframes letterOpen{

from{

opacity:0;

transform:
translate(-50%,-50%)
scale(.5);

}


to{

opacity:1;

transform:
translate(-50%,-50%)
scale(1);

}

}

`;


document.head.appendChild(style);






// 🎵 MUSIC SYSTEM


let music=new Audio();


music.src="music.mp3";


music.loop=true;


let playing=false;



function musicControl(){


if(playing){


music.pause();


playing=false;


}

else{


music.play();


playing=true;


}


}





// 🌙 PARALLAX MOON EFFECT


document.addEventListener(
"mousemove",
(e)=>{


let moon=
document.querySelector(".moon");


let x=
(e.clientX/window.innerWidth-.5)*20;


let y=
(e.clientY/window.innerHeight-.5)*20;



moon.style.transform=
`translate(${x}px,${y}px)`;


}

);






// ✨ SMOOTH LOADING REMOVE


window.onload=function(){


setTimeout(()=>{


let load=
document.getElementById("loading");


if(load){

load.style.display="none";

}


},4000);


};
