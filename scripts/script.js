let nav = document.getElementById("nav");
let navCountdown = document.getElementById("nav-countdown");
let navStats = document.getElementById('nav-stats');
let navInfo = document.getElementById('nav-info');
let lightSwitch = document.getElementById('light-switch');
let fullscreen = document.getElementById('fullscreen');
let isFullscreen = false;
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
    {name: "Simon Lieske", duli: 0.0, tournaments: 0, tournaments_won: 0, legs: 0, legs_won: 0, earnings: 0.0, points: 0, $180s: 0},
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
const _tt2 = [
    {player: "Jonas Dunker", duli: 120.0, win: false, legs_played: 12, legs_won: 5, earnings: 0.0, rank: 3, $180s: 0},
    {player: "Simon Heß", duli: 200.0, win: true, legs_played: 12, legs_won: 9, earnings: 5.0, rank: 2, $180s: 0},
    {player: "Daniel Lieske", duli: 121.7, win: true, legs_played: 12, legs_won: 9, earnings: 5.0, rank: 2, $180s: 0},
    {player: "Simon Lieske", duli: 131.7, win: false, legs_played: 12, legs_won: 5, earnings: 0.0, rank: 3, $180s: 0},
    {player: "Jan Hübner", duli: 173.3, win: false, legs_played: 12, legs_won: 4, earnings: 0.0, rank: 4, $180s: 0},
    {player: "Lucas Huber", duli: 103.3, win: false, legs_played: 12, legs_won: 4, earnings: 0.0, rank: 4, $180s: 0},
];
//const _tt2 = [ ... ];
const _tournaments = [
    _tt1,
    _tt2,
    //_tt2 ...
];
let nextAppointment = new Date("Dec 11, 2022 16:00:00").getTime();

calculatePlayerData();

navCountdown.addEventListener("click", displayCountdown);
navStats.addEventListener('click', displayStats);
navInfo.addEventListener('click', displayInfo);
lightSwitch.addEventListener('click', toggleTheme);
fullscreen.addEventListener('click', toggleFullscreen);
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

    runTimer();
    /*

    JONAS

    CODE

    */
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

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function toggleFullscreen() {
    let myDoc = document.documentElement;
    if (!isFullscreen) {
        if (myDoc.requestFullscreen) {
            myDoc.requestFullscreen();
        }
        else if (myDoc.msRequestFullscreen) {
            myDoc.msRequestFullscreen();
        }
        else if (myDoc.mozRequestFullscreen) {
            myDoc.mozRequestFullscreen();
        }
        else if (myDoc.webkitRequestFullscreen) {
            myDoc.webkitRequestFullscreen();
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if (document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if (document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
    }
    isFullscreen = !isFullscreen;
}

function openNav() {
    menu.classList.add('hidden');
    secCountdown.classList.add('hidden');
    secStats.classList.add('hidden');
    secInfo.classList.add('hidden');
    nav.classList.remove('hidden');
}

/* stats */

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
    calculateDULI();
}

function calculateDULI() {
    let i, j;
    let counter = 0;
    for (i = 0; i < players.length; i++) {
        for (j = 0; j < _tournaments.length; j++) {
            for (k = 0; k < _tournaments[j].length; k++) {
                if (players[i].name === _tournaments[j][k].player) {
                    if (players[i].duli < 1.0) {
                        players[i].duli = _tournaments[j][k].duli.toFixed(1);
                    } else {
                        players[i].duli = ((players[i].duli * 0.4) + (_tournaments[j][k].duli * 0.6)).toFixed(1);
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
    if (duliCollapsible.classList.contains("active")) {
        players.sort((a, b) => b.duli - a.duli);
        document.getElementById('stats-duli').innerHTML = "";
        let i;
        for (i = 0; i < players.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                document.getElementById('stats-duli').innerHTML += "<hr>";
            }
            document.getElementById('stats-duli').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + "<span class='span-rank'>(" + players[i].duli + ")</span></br>";
        }
    }
});

tournamentsCollapsible.addEventListener("click", function() {
    if (!tournamentsCollapsible.classList.contains("active)")) {
        players.sort((a, b) => b.duli - a.duli);
        players.sort((a, b) => b.tournaments_won / b.tournaments - a.tournaments_won / a.tournaments);
        document.getElementById('stats-tournaments').innerHTML = "";
        let i;
        for (i = 0; i < players.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                document.getElementById('stats-tournaments').innerHTML += "<hr>";
            }
            document.getElementById('stats-tournaments').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + "<span class='span-rank'>" + (players[i].tournaments_won / players[i].tournaments * 100).toFixed(1) + "% - (" + players[i].tournaments_won + "/" + players[i].tournaments + ")</span></br>";
        }
    }
});

legsCollapsible.addEventListener("click", function() {
    if (!legsCollapsible.classList.contains("active)")) {
        players.sort((a, b) => b.duli - a.duli);
        players.sort((a, b) => b.legs_won / b.legs - a.legs_won / a.legs);
        document.getElementById('stats-legs').innerHTML = "";
        let i;
        for (i = 0; i < players.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                document.getElementById('stats-legs').innerHTML += "<hr>";
            }
            document.getElementById('stats-legs').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + "<span class='span-rank'>" + (players[i].legs_won / players[i].legs * 100).toFixed(1) + "% - (" + players[i].legs_won + "/" + players[i].legs + ")</span></br>";
        }
    }
});

earningsCollapsible.addEventListener("click", function() {
    if (!earningsCollapsible.classList.contains("active)")) {
        players.sort((a, b) => b.duli - a.duli);
        players.sort((a, b) => b.earnings - a.earnings);
        document.getElementById('stats-earnings').innerHTML = "";
        let i;
        for (i = 0; i < players.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                document.getElementById('stats-earnings').innerHTML += "<hr>";
            }
            document.getElementById('stats-earnings').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + "<span class='span-rank'>(" + players[i].earnings + ",- €)</span></br>";
        }
    }
});

pointsCollapsible.addEventListener("click", function() {
    if (!pointsCollapsible.classList.contains("active)")) {
        players.sort((a, b) => b.duli - a.duli);
        players.sort((a, b) => b.points - a.points);
        document.getElementById('stats-points').innerHTML = "";
        let i;
        for (i = 0; i < players.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                document.getElementById('stats-points').innerHTML += "<hr>";
            }
            document.getElementById('stats-points').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + "<span class='span-rank'>(" + players[i].points + " Pkt. )</span></br>";
        }
    }
});

$180sCollapsible.addEventListener("click", function() {
    if (!$180sCollapsible.classList.contains("active)")) {
        players.sort((a, b) => b.duli - a.duli);
        players.sort((a, b) => b.$180s - a.$180s);
        document.getElementById('stats-180').innerHTML = "";
        let i;
        for (i = 0; i < players.length; i++) {
            if (players[i].$180s > 0) {
                document.getElementById('stats-180').innerHTML += "<b>" + (i + 1) + ". </b>" + players[i].name + "<span class='span-rank'>(" + players[i].$180s + ")</span></br>";
            }
        }
    }
});

/* Countdown */

function runTimer() {
    var TimerFunction = setInterval(function() {
        if (secCountdown.classList.contains("hidden")) {
            clearInterval(TimerFunction);
        }
        else {
            let now = new Date().getTime();
            let difference = nextAppointment - now;
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            document.getElementById('countdown').innerHTML = "<div id='countdown-days'>" + days + "</div><span class='countdown-description' id='cdd'>Days</span>";
            document.getElementById('countdown').innerHTML += "<div id='countdown-hours'>" + hours + "</div><span class='countdown-description' id='cdh'>Hours</span>";
            document.getElementById('countdown').innerHTML += "<div id='countdown-minutes'>" + minutes + "</div><span class='countdown-description' id='cdm'>Minutes</span>";
            document.getElementById('countdown').innerHTML += "<div id='countdown-seconds'>" + seconds + "</div><span class='countdown-description' id='cds'>Seconds</span>";
        }
        //console.log("TIME LEFT: " + days + " days, " + hours + " hours and " + minutes + " minutes.");
    }, 1000)
}
