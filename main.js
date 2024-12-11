img5.style.right = 0;

window.addEventListener('scroll', function() {

    let value = window.scrollY;
    img4.style.marginTop = value +'px';
    img3.style.marginTop = value * 0.8+'px';
    img2.style.marginTop = value * 0.6+'px';
    img1.style.marginTop = value * 0.4+'px';

    img5.style.marginTop = value * 0.7+'px';
    img5.style.right = value * 0.4+'px';

    svgText.style.marginTop = value + 'px';
    svgText.style.width = 50 - value / 30 + '%';
    svgPath.style.strokeDashoffset = value / 6;
    
})
