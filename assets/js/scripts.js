const hamburger = document.querySelector('.navigation__hamburger');
const overlay = document.querySelector('.navigation__overlay');
hamburger.addEventListener(('click'), (e) => {
    if (hamburger.classList.contains('navigation__clicked')) {
        hamburger.classList.remove('navigation__clicked');
        overlay.classList.remove('reveal');
        overlay.classList.add('hide');
    } else {
        hamburger.classList.add('navigation__clicked');
        overlay.classList.remove('hide');
        overlay.classList.add('reveal');
    }
})