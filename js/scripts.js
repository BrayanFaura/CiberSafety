/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
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


function showHide(){
oImageDiv=document.getElementById('bien')
oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
oImageDiv=document.getElementById('mal')
oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}
function showHide2(){
    oImageDiv=document.getElementById('2bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('2mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('2mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('2mal3')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    }
function showHide3(){
    oImageDiv=document.getElementById('3bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('3mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('3mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('3mal3')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}
function showHide4(){
    oImageDiv=document.getElementById('4bien')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('4mal1')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('4mal2')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
    oImageDiv=document.getElementById('4mal3')
    oImageDiv.style.display =(oImageDiv.style.display=='none')?'inline':'none'
}

