const inputPassword = document.getElementById('password');
const rightSpan = document.querySelector('.right-span');
const leftSpan = document.querySelector('.left-span');


inputPassword.addEventListener('focus', function() {
    rightSpan.style.height = '100%';
    leftSpan.style.height = '100%';
});

inputPassword.addEventListener('blur', function() {
    rightSpan.style.height = '15%';
    leftSpan.style.height = '15%';
});