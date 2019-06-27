var jump = document.getElementById("me").animate(
    [
        { transform: 'translateY(0) scale(1,1)' },
        { transform: 'translateY(0) scale(1.1,.8)', offset: 0.1 },
        { transform: 'translateY(-50px) scale(.8,1.1)', offset: 0.35 },
        { transform: 'translateY(0) scale(1.05,.9)', offset: 0.5 },
        { transform: 'translateY(-5px) scale(1,1)', offset: 0.6 },
        { transform: 'translateY(0) scale(1,1)', offset: 0.7 },
        { transform: 'translateY(0) scale(1,1)' }
    ], {
        duration: 1000,
        iterations: 1,
        easing: "linear",
    });
var playJump = function () {
    jump.play();
}
me.addEventListener("mousedown", playJump, false);