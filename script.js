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

const adminPanel = document.querySelector('#adminPanel').addEventListener('click', function (event) {
    window.open("https://sagarrs.github.io/React-admin-panel/");
});

const git = document.querySelector('#git').addEventListener('click', function (event) {
    window.open("https://github.com/sagarrs");
});

var firebaseConfig = {
    apiKey: "AIzaSyA6BCkvknj9oHCZ34wJg-B4qVhfWitb_LU",
    authDomain: "contactform-761ca.firebaseapp.com",
    projectId: "contactform-761ca",
    storageBucket: "contactform-761ca.appspot.com",
    messagingSenderId: "249791076313",
    appId: "1:249791076313:web:59fb22319a0cfb128e2bc8"
};

firebase.initializeApp(firebaseConfig)

var messageRef = firebase.database().ref('messages')

// contact form 
const contactForm = document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault()
    const firstName = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const description = document.getElementById('description').value

    console.log("form", firstName, email, subject, description)

    saveMessage(firstName, email, subject, description)
})

function saveMessage(firstName, email, subject, description){
    var newMessageRef = messageRef.push()
    newMessageRef.set({
        firstName: firstName, 
        email: email, 
        subject: subject, 
        description: description
    })
    const form = document.getElementById("contactForm");
    form.reset();
    const alert = document.querySelector('#alert')
    alert.style.display = 'block'

    setTimeout(function(){
        const alert = document.querySelector('#alert')
        alert.style.display = 'none'
    }, 3000);
}