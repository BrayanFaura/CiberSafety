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

function pausaTodo(){
	var inputs = document.getElementsByTagName('img');
  for(var i = 0; i < inputs.length; i++) {
      inputs[i].pause();
  }
}

function reproducirsonidobep1(){
    pausaTodo();
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