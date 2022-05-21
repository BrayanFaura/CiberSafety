/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
window.onload=function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

LottieInteractivity.create({
    player:'#eleventhLottie',
    mode:"cursor",
    actions: [
        {
            type: "hover",
            forceFlag: true
        }
    ]
});

LottieInteractivity.create({
    player:'#eleventhLottie2',
    mode:"cursor",
    actions: [
        {
            type: "hover",
            forceFlag: true
        }
    ]
});

LottieInteractivity.create({
    player:'#eleventhLottie3',
    mode:"cursor",
    actions: [
        {
            type: "hover",
            forceFlag: true
        }
    ]
});

LottieInteractivity.create({
    mode: 'scroll',
    player: '#firstLottie',
    actions: [
        {
          visibility: [0,1],
          type: 'seek',
          frames: [0, 150],
        },
      ],
  });

  LottieInteractivity.create({
    player: '#hoverPlayer1',
    mode: 'chain',
    actions: [
        {
            state: 'hover',
            forceFlag: true,
            transition: 'hover',
            path: 'https://assets7.lottiefiles.com/packages/lf20_iyqdtgxe.json',
            count: 5
        },
        {
            path: 'https://assets1.lottiefiles.com/packages/lf20_ISbOsd.json',
            state: 'autoplay',
            reset: true,
            transition: 'onComplete'
        }
    ]
});


function showHide1(){
    oImageDiv=document.getElementById('1bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('1mal')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide21(){
    oImageDiv=document.getElementById('21bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('21mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('21mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('21mal3')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide31(){
    oImageDiv=document.getElementById('31bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('31mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('31mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('31mal3')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide41(){
    oImageDiv=document.getElementById('41bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('41mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('41mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('41mal3')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide2(){
    oImageDiv=document.getElementById('2bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('2mal')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide22(){
    oImageDiv=document.getElementById('22bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('22mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('22mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide32(){
    oImageDiv=document.getElementById('32bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('32mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('32mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}
    
function showHide42(){
    oImageDiv=document.getElementById('42bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('42mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('42mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide3(){
    oImageDiv=document.getElementById('3bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('3mal')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}
    
function showHide23(){
    oImageDiv=document.getElementById('23bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('23mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('23mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

function showHide33(){
    oImageDiv=document.getElementById('33bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('33mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('33mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

// SONIDOS BEN INTRO

function reproducirsonidobi1(){
    let imagen = document.querySelector(".reproductorbi1")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro1.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi2(){
    let imagen = document.querySelector(".reproductorbi2")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro2.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi3(){
    let imagen = document.querySelector(".reproductorbi3")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro3.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi4(){
    let imagen = document.querySelector(".reproductorbi4")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro4.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi5(){
    let imagen = document.querySelector(".reproductorbi5")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro5.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi6(){
    let imagen = document.querySelector(".reproductorbi6")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro6.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi7(){
    let imagen = document.querySelector(".reproductorbi7")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro7.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi8(){
    let imagen = document.querySelector(".reproductorbi8")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro8.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi9(){
    let imagen = document.querySelector(".reproductorbi9")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro9.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobi10(){
    let imagen = document.querySelector(".reproductorbi10")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benintro10.mp3");
    etiquetaAudio.play();
    })
}

//SONIDO MATT Y BEN EN CONJUNTO PARA LA INTRO

function reproducirsonidobymi1(){
    let imagen = document.querySelector(".reproductorbymi1")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/BENYMATT/iajuntasintro1.mp3");
    etiquetaAudio.play();
    })
}
function reproducirsonidobymi2(){
    let imagen = document.querySelector(".reproductorbymi2")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/BENYMATT/iajuntasintro1.mp3");
    etiquetaAudio.play();
    })
}

//SONIDOS BEN PHISHING

function reproducirsonidobp1(){
    let imagen = document.querySelector(".reproductorbp1")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing1.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp2(){
    let imagen = document.querySelector(".reproductorbp2")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing2.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp3(){
    let imagen = document.querySelector(".reproductorbp3")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing3.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp4(){
    let imagen = document.querySelector(".reproductorbp4")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing4.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp5(){
    let imagen = document.querySelector(".reproductorbp5")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing5.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp6(){
    let imagen = document.querySelector(".reproductorbp6")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing6.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp7(){
    let imagen = document.querySelector(".reproductorbp7")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing7.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp8(){
    let imagen = document.querySelector(".reproductorbp8")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing8.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp9(){
    let imagen = document.querySelector(".reproductorbp9")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing9.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp10(){
    let imagen = document.querySelector(".reproductorbp10")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing10.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp11(){
    let imagen = document.querySelector(".reproductorbp11")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing11.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp12(){
    let imagen = document.querySelector(".reproductorbp12")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing12.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp13(){
    let imagen = document.querySelector(".reproductorbp13")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing13.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp14(){
    let imagen = document.querySelector(".reproductorbp14")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing14.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp15(){
    let imagen = document.querySelector(".reproductorbp15")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing15.mp3");
    etiquetaAudio.play();
    })
}


function reproducirsonidobp16(){
    let imagen = document.querySelector(".reproductorbp16")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benphishing16.mp3");
    etiquetaAudio.play();
    })
}

// SONIDOS BEN EVALUACION PHISHING

function reproducirsonidobep1(){
    // pausaTodo();
    let imagen = document.querySelector(".reproductorbep1")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benevaluacionp1.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobep2(){
    let imagen = document.querySelector(".reproductorbep2")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benevaluacionp2.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobep3(){
    let imagen = document.querySelector(".reproductorbep3")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benevaluacionp3.mp3");
    etiquetaAudio.play();
    })
}

function reproducirsonidobep4(){
    let imagen = document.querySelector(".reproductorbep4")
    imagen.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "assets/sounds/IABEN/Benevaluacionp4.mp3");
    etiquetaAudio.play();
    })
}