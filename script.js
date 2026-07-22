// =========================
// PHOO PYAE SONE LOVE V3
// CLEAN JAVASCRIPT
// =========================


// ⭐ STAR GENERATOR

const stars = document.getElementById("stars");


if(stars){

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";


let size=Math.random()*4+1;


star.style.width=size+"px";
star.style.height=size+"px";


star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";


star.style.animationDelay=
Math.random()*5+"s";


stars.appendChild(star);

}

}



// ❤️ FLOATING HEART

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

function openLove(){

document.getElementById("letter")
.style.display="block";

}



function closeLove(){

document.getElementById("letter")
.style.display="none";

}




// ❤️ LOVE COUNTER
// START 1.2.2023


function updateLoveCounter(){


let start =
new Date("2023-02-01T00:00:00");


let now =
new Date();



let diff =
now - start;



let totalSeconds =
Math.floor(diff/1000);



let days =
Math.floor(totalSeconds/86400);



let hours =
Math.floor(
(totalSeconds%86400)/3600
);



let minutes =
Math.floor(
(totalSeconds%3600)/60
);



let seconds =
totalSeconds%60;



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;


}



setInterval(updateLoveCounter,1000);

updateLoveCounter();





// 🎵 MUSIC CONTROL


const bgMusic =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");


let musicPlaying=false;



if(bgMusic){

bgMusic.volume=0.5;

}



function toggleMusic(){


if(!bgMusic) return;



if(musicPlaying){


bgMusic.pause();


musicBtn.innerHTML=
"🎵 Music ON";


musicPlaying=false;


}

else{


bgMusic.play();


musicBtn.innerHTML=
"🔇 Music OFF";


musicPlaying=true;


}


}






// 🌙 MOON PARALLAX


document.addEventListener(
"mousemove",
(e)=>{


let moon =
document.querySelector(".moon");


if(moon){


let x =
(e.clientX/window.innerWidth-.5)*20;


let y =
(e.clientY/window.innerHeight-.5)*20;



moon.style.transform=
`translate(${x}px,${y}px)`;

}


});




// PAGE READY

window.onload=function(){

console.log(
"Phoo Pyae Sone Love Website Ready ❤️"
);

};
function startLove(){

    let intro =
    document.getElementById("intro");


    intro.classList.add("hideIntro");


    let music =
    document.getElementById("loveMusic");


    if(music){

        music.volume = 0;

        music.play();


        let volume = 0;


        let fade =
        setInterval(()=>{


            if(volume < 1){

                volume += 0.05;

                music.volume = volume;

            }else{

                clearInterval(fade);

            }


        },300);

    }



    setTimeout(()=>{

        intro.style.display="none";

    },1500);


}
const startDate = new Date("2025-01-01T00:00:00");

function updateLoveTimer(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60)) % 24);

    const minutes = Math.floor((diff/(1000*60)) % 60);

    const seconds = Math.floor((diff/1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateLoveTimer();

setInterval(updateLoveTimer,1000);
