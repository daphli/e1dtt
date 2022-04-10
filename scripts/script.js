let nav = document.getElementById("nav");
let navCountdown = document.getElementById("nav-countdown");
let navStats = document.getElementById('nav-stats');
let navInfo = document.getElementById('nav-info');
let menu = document.getElementById("menu");
let secCountdown = document.getElementById("sec-countdown");
let secStats = document.getElementById('sec-stats');
let secInfo = document.getElementById('sec-info');
let leaderboard = document.getElementById('leaderboard');
let table_headers = ["Rang", "Name", "Score(DULI)", "Tournierteilnahmen", "Tourniersiege", "Gespielte Legs", "Gewonnene Legs", "Einnahmen", "Tournierpunkte", "180er"];
const _tt1 = {
    p0: {player: "Jonas Dunker", duli: 94.29, win: false, legs_played: 10, legs_won: 7, earnings: 5.0, rank: 2, $180s: 0},
    p1: {player: "Simon Heß", duli: 168.6, win: false, legs_played: 10, legs_won: 7, earnings: 5.0, rank: 2, $180s: 0},
    p2: {player: "Daniel Lieske", duli: 137.1, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 4, $180s: 0},
    p3: {player: "Sebastian Bolz", duli: 68.57, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 4, $180s: 0},
    p4: {player: "Kai Köhler", duli: 217.1, win: true, legs_played: 10, legs_won: 7, earnings: 10.0, rank: 1, $180s: 1},
    p5: {player: "Luca Schenkel", duli: 128.6, win: true, legs_played: 10, legs_won: 7, earnings: 10.0, rank: 1, $180s: 0},
    p6: {player: "Jan Hübner", duli: 154.3, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 3, $180s: 0},
    p7: {player: "Lucas Huber", duli: 97.14, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 2, $180s: 0},
};
//const _tt2 = { ... };
const _tournaments = {
    _tt1,
    //_tt2 ...
}

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
    //reloads everytime a user chooses stats in navigation
    calculateStats();
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

/* stats */

function calculateStats() {
    generateColumns();

}

function generateColumns() {
    leaderboard.innerHTML = "<tr>";
    for (let i = 0; i < table_headers.length; i++) {
        leaderboard.innerHTML += "<th>" + table_headers[i] + "</th>";
    }
    leaderboard.innerHTML += "</tr>";
}
