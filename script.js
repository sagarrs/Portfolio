let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")
}

let themeToggler = document.querySelector('#theme-toggler')

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun')
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active')
    }else{
        document.body.classList.remove('active')
    }
}

const rtt = document.querySelector('#rtt').addEventListener('click', function (event) {
    window.open("https://play.google.com/store/apps/details?id=com.rttDriverNew");
});

const gordian = document.querySelector('#gordian').addEventListener('click', function (event) {
    window.open("https://play.google.com/store/apps/details?id=com.gordian");
});
