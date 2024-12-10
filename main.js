let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');

window.addEventListener('scroll', function() {

    let value = window.scrollY;
    img4.style.marginTop = value * 0.75+'px';
    img3.style.marginTop = value * 0.5+'px';
    img2.style.marginTop = value * 0.25+'px';

    img5.style.marginTop = value * 0.7+'px';
    img5.style.right = value * 0.4+'px';

})