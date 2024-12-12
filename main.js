img5.style.right = 0;
let swipes = 3000;
document.getElementById("clickMe").onclick = function () {
    if (swipes < 6000) {
    swipes += 3000;
    document.getElementById("gal1").style.marginLeft = swipes - 6000 + 'px';
    document.getElementById("gal2").style.marginLeft = swipes - 3000 + 'px';
    document.getElementById("gal3").style.marginLeft = swipes + 'px';
    console.log(swipes);
    }
};
document.getElementById("clickMe2").onclick = function () {
    if (swipes > 0) {
    swipes -= 3000;
    document.getElementById("gal1").style.marginLeft = swipes - 6000 + 'px';
    document.getElementById("gal2").style.marginLeft = swipes - 3000 + 'px';
    document.getElementById("gal3").style.marginLeft = swipes + 'px';
    console.log(swipes);
    }
};
window.addEventListener('scroll', function () {

    let value = window.scrollY;
    img4.style.marginTop = value + 'px';
    img3.style.marginTop = value * 0.8 + 'px';
    img2.style.marginTop = value * 0.6 + 'px';
    img1.style.marginTop = value * 0.4 + 'px';

    img5.style.marginTop = value * 0.7 + 'px';
    img5.style.right = value * 0.4 + 'px';

    svgText.style.marginTop = value + 'px';
    svgText.style.width = 50 - value / 30 + '%';
    svgPath.style.strokeDashoffset = value / 6;
    // if (value > 3000) {
    //     gal3.style.marginLeft = (value - 3000) + 'px';
    // }
})