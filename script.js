window.lottieAnimations = [];

const animation = lottie.loadAnimation({
    container: document.getElementById('animation'),
    renderer: 'svg',
    loop: false,         
    autoplay: false,     
    path: 'lotti.json'    
});

animation.setSpeed(0.5);

window.lottieAnimations.push(animation);
