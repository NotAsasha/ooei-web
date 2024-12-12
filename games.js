
window.addEventListener('scroll', function () {

    let value = window.scrollY;
    toDestroy.style.opacity = 100 - value + '%';
})
