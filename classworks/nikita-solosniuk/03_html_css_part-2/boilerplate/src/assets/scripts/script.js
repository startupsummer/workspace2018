const { classList } = document.querySelector('body');
const main = document.querySelector('.main');
const button = document.querySelector('.burger-button');

button.addEventListener('click', () => classList.toggle('show-sidebar'));
main.addEventListener('click', () => classList.remove('show-sidebar'));