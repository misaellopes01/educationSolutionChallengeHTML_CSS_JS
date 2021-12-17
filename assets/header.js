// Fixed Header
const header = document.querySelector('header');
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
})
    

// Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const menuClick = document.querySelector('.choice');
const footer = document.querySelector('footer');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
    menuBtn.classList.add('open');
    header.classList.add('open');
    footer.classList.add('open')
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    header.classList.remove('open');
    footer.classList.remove('open')
    menuOpen = false;
}
});

menuClick.addEventListener('click', () => {
    header.classList.remove('open');
    menuBtn.classList.remove('open');
    footer.classList.remove('open')
    menuOpen = false;
})

// On Scroll Reveal
let slideUp = {
    distance: '100%',
    origin: 'top',
    duration: 2700,
    reset: true
};
