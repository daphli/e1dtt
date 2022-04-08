let nav = document.getElementById("nav");
let navCountdown = document.getElementById("nav-countdown");
let navStats = document.getElementById('nav-stats');
let navInfo = document.getElementById('nav-info');
let menu = document.getElementById("menu");
let secCountdown = document.getElementById("sec-countdown");
let secStats = document.getElementById('sec-stats');
let secInfo = document.getElementById('sec-info');

navCountdown.addEventListener("click", displayCountdown);
navStats.addEventListener('click', displayStats);
navInfo.addEventListener('click', displayInfo);
menu.addEventListener('click', openNav);

function displayCountdown() {
    secCountdown.classList.remove("hidden");
    nav.classList.add("hidden");
    menu.classList.remove('hidden');
}

function displayStats() {
    secStats.classList.remove('hidden');
    nav.classList.add('hidden');
    menu.classList.remove('hidden');
}

function displayInfo() {
    secInfo.classList.remove('hidden');
    nav.classList.add('hidden');
    menu.classList.remove('hidden');
}

function openNav() {
    console.log("hih");
    menu.classList.add('hidden');
    secCountdown.classList.add('hidden');
    secStats.classList.add('hidden');
    secInfo.classList.add('hidden');
    nav.classList.remove('hidden');
}