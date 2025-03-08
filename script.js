const players = {
    current: [
        {
            name: "ليونيل ميسي",
            position: "مهاجم",
            age: "36",
            height: "170 سم",
            weight: "72 كجم",
            clubLogo: "images/inter-miami.png",
            previousClubsLogos: [
                "images/barcelona.png",
                "images/psg.png"
            ],
            leagueLogo: "images/mls.png",
            nationalityFlag: "images/argentina.png",
            image: "images/messi.png"
        }
    ],
    retired: [
        {
            name: "زين الدين زيدان",
            position: "وسط مهاجم",
            age: "51",
            height: "185 سم",
            weight: "80 كجم",
            clubLogo: "images/real-madrid.png",
            previousClubsLogos: [
                "images/cannes.png",
                "images/bordeaux.png",
                "images/juventus.png",
                "images/real-madrid.png"
            ],
            leagueLogo: "images/laliga.png",
            nationalityFlag: "images/france.png",
            image: "images/zidane.png"
        }
    ]
};

let currentCategory = "current";
let currentIndex = 0;

function showPlayers(category) {
    currentCategory = category;
    currentIndex = 0;
    displayPlayer();
}

function displayPlayer() {
    const player = players[currentCategory][currentIndex];

    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-position").textContent = player.position;
    document.getElementById("player-age").textContent = player.age;
    document.getElementById("player-height").textContent = player.height;
    document.getElementById("player-weight").textContent = player.weight;
    document.getElementById("player-club-logo").src = player.clubLogo;
    document.getElementById("player-league-logo").src = player.leagueLogo;
    document.getElementById("player-nationality-flag").src = player.nationalityFlag;
    document.getElementById("player-image").src = player.image;

    const previousClubsContainer = document.getElementById("player-previous-clubs-logos");
    previousClubsContainer.innerHTML = "";
    player.previousClubsLogos.forEach(logo => {
        const img = document.createElement("img");
        img.src = logo;
        img.classList.add("club-logo");
        previousClubsContainer.appendChild(img);
    });

    document.getElementById("player-info").classList.remove("hidden");
}

function changePlayer() {
    currentIndex = (currentIndex + 1) % players[currentCategory].length;
    displayPlayer();
}
