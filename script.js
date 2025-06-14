const menuBtn = document.querySelector('#menu');
const navBar = document.querySelector('.nav-bar');
const link = document.querySelector('a');

menuBtn.addEventListener('click', (e) => {
    navBar.classList.toggle('active');
})
