const burger = document.querySelector('.header__burger'),
    nav = document.querySelectorAll('.navigation'),
    body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.forEach(i => i.classList.toggle('active'));
    body.classList.toggle('lock');
});

nav.forEach(i => i.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.forEach(i => i.classList.toggle('active'));
    body.classList.toggle('lock');
}));