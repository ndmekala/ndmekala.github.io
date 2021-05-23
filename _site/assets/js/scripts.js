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

const showAll = document.querySelector('.projects__showall');
showAll.addEventListener(('click'), () => {
    const hiddenProjects = document.querySelectorAll('.projects__hidden')
    if (Array.from(showAll.classList).includes('showing')) {
        showAll.textContent = "View More"
        showAll.classList.remove('showing')
        hiddenProjects.forEach((project) => {
            project.style.display = "none"
        })
    } else {
        showAll.textContent = "Hide"
        showAll.classList.add('showing')
        hiddenProjects.forEach((project) => {
            project.style.display = "flex"
        })
    }
})