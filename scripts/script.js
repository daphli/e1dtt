let nav = document.getElementById("nav");
let navCountdown = document.getElementById("nav-countdown");
let navStats = document.getElementById('nav-stats');
let navInfo = document.getElementById('nav-info');
let menu = document.getElementById("menu");
let secCountdown = document.getElementById("sec-countdown");
let secStats = document.getElementById('sec-stats');
let secInfo = document.getElementById('sec-info');
let duliCollapsible = document.getElementById('stats-duli-collapsible');
let tournamentsCollapsible = document.getElementById('stats-tournaments-collapsible');
let legsCollapsible = document.getElementById('stats-legs-collapsible');
let earningsCollapsible = document.getElementById('stats-earnings-collapsible');
let pointsCollapsible = document.getElementById('stats-points-collapsible');
let $180sCollapsible = document.getElementById('stats-180-collapsible');
const _points = [-5000, 5, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let players = [
    {name: "Jonas Dunker", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Simon Heß", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Daniel Lieske", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Sebastian Bolz", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Kai Köhler", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Luca Schenkel", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Jan Hübner", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
    {name: "Lucas Huber", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
];
const _tt1 = [
    {player: "Jonas Dunker", duli: 94.29, win: false, legs_played: 10, legs_won: 7, earnings: 5.0, rank: 2, $180s: 0},
    {player: "Simon Heß", duli: 168.6, win: false, legs_played: 10, legs_won: 7, earnings: 5.0, rank: 2, $180s: 0},
    {player: "Daniel Lieske", duli: 137.1, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 4, $180s: 0},
    {player: "Sebastian Bolz", duli: 68.57, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 4, $180s: 0},
    {player: "Kai Köhler", duli: 217.1, win: true, legs_played: 10, legs_won: 7, earnings: 10.0, rank: 1, $180s: 1},
    {player: "Luca Schenkel", duli: 128.6, win: true, legs_played: 10, legs_won: 7, earnings: 10.0, rank: 1, $180s: 0},
    {player: "Jan Hübner", duli: 154.3, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 3, $180s: 0},
    {player: "Lucas Huber", duli: 97.14, win: false, legs_played: 10, legs_won: 3, earnings: 0.0, rank: 3, $180s: 0},
];
//const _tt2 = [ ... ];
const _tournaments = [
    _tt1,
    //_tt2 ...
];

navCountdown.addEventListener("click", displayCountdown);
navStats.addEventListener('click', displayStats);
navInfo.addEventListener('click', displayInfo);
menu.addEventListener('click', openNav);

let collapsibles = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



function displayCountdown() {
    secCountdown.classList.remove("hidden");
    nav.classList.add("hidden");
    menu.classList.remove('hidden');
    //jonas code
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
    menu.classList.add('hidden');
    secCountdown.classList.add('hidden');
    secStats.classList.add('hidden');
    secInfo.classList.add('hidden');
    nav.classList.remove('hidden');
}

/* stats */

function calculateStats() {
    calculatePlayerData();
    calculateDULI();
}

function calculatePlayerData() {
    if (_tournaments.length === 0) {
        return;
    }
    let i, j, k;
    for (i = 0; i < _tournaments.length; i++) {
        for (j = 0; j < players.length; j++) {
            for (k = 0; k < _tournaments[i].length; k++) {
                if (players[j].name === _tournaments[i][k].player) {
                    players[j].tournaments++;
                    if (_tournaments[i][k].win) {
                        players[j].tournaments_won++;
                    }
                    players[j].legs += _tournaments[i][k].legs_played;
                    players[j].legs_won += _tournaments[i][k].legs_won;
                    players[j].earnings += _tournaments[i][k].earnings;
                    players[j].points += _points[_tournaments[i][k].rank];
                    players[j].$180s += _tournaments[i][k].$180s;
                }
            }
        }
    }
    console.log(players);
}

function calculateDULI() {
    let i, j;
    let counter = 0;
    for (i = 0; i < players.length; i++) {
        for (j = 0; j < _tournaments.length; j++) {
            for (k = 0; k < _tournaments[j].length; k++) {
                if (players[i].name === _tournaments[j][k].player) {
                    if (players[i].duli < 1.0) {
                        players[i].duli = _tournaments[j][k].duli;
                    } else {
                        players[i].duli = (players[i].duli * 0.4) + (_tournaments[j][k].duli * 0.6);
                    }
                }
            }
        }
    }
}

function sortDuli(a, b) {
    if (a.duli > b.duli) {
        return -1;
    }
    if (a.dul < b.duli) {
        return 1;
    }
    return 0;
}

function sortTournamentWins(a, b) {
    if (a.tournaments_won > b.tournaments_won) {
        return -1;
    }
    if (a.tournaments_won < b.tournaments_won) {
        return 1;
    }
    return 0;
}

function sortLegWins(a, b) {
    if (a.legs_won > b.legs_won) {
        return -1;
    }
    if (a.legs_won < b.legs_won) {
        return 1;
    }
    return 0;
}

function sortEarnings(a, b) {
    if (a.earnings > b.earnings) {
        return -1;
    }
    if (a.earnings < b.earnings) {
        return 1;
    }
    return 0;
}

function sortPoints(a, b) {
    if (a.points > b.points) {
        return -1;
    }
    if (a.points < b.points) {
        return 1;
    }
    return 0;
}

function sort$180s(a, b) {
    if (a.$180s > b.$180s) {
        return -1;
    }
    if (a.$180s < b.$180s) {
        return 1;
    }
    return 0;
}

duliCollapsible.addEventListener("click", function() {
    players.sort((a, b) => b.duli - a.duli);
    document.getElementById('stats-duli').innerHTML = "";
    let i;
    for (i = 0; i < players.length; i++) {
        document.getElementById('stats-duli').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + " (" + players[i].duli + ")</br>";
    }
    
});

tournamentsCollapsible.addEventListener("click", function() {
    players.sort((a, b) => b.tournaments_won - a.tournaments_won);
});
