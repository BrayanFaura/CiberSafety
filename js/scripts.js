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
LottieInteractivity.create({
    player:'#clickPlayer',
    mode:"chain",
    actions: [
        {
            state: 'click',
            forceFlag: true,
            transition: 'click',
            count: 5
        },
        {
            path: 'https://assets1.lottiefiles.com/packages/lf20_ISbOsd.json',
            frames: 'confetti',
            state: 'autoplay',
            reset: true,
            transition: 'onComplete'
        }
    ]
});