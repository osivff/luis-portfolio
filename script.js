const menuBtn = document.querySelector('#menu');
const navBar = document.querySelector('.nav-bar');
const link = document.querySelector('a');
const footer = document.querySelector('footer');

menuBtn.addEventListener('click', (e) => {
    navBar.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const pageHeight = document.body.offsetHeight;

    // If we're within 100px of the bottom, start fading out
    if (scrollPos >= pageHeight - 100) {
        footer.classList.add('fade-out');
    } else {
        footer.classList.remove('fade-out');
    }
});

