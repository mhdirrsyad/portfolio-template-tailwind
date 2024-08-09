// 1. hamburger active
// finding hamburger button and nav list element
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

// when button hamburger onclick
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// 2. navbar fixed
// window scroll check
window.onscroll = function () {
    // finding header element and header offsetTop
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    // check pageYoffset to fixedNav (offsetTop from header = 0) value 
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

