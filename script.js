const players = {
    retired: [
        {
            name: "زين الدين زيدان",
            position: "وسط مهاجم",
            age: "51",
            height: "185 سم",
            weight: "80 كجم",
            clubNumber: "5",
            nationalNumber: "10",
            club: "ريال مدريد (مدرب سابق)",
            previousClubs: "كان، بوردو، يوفنتوس، ريال مدريد",
            league: "الدوري الإسباني",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Zinedine_Zidane_2013_%28cropped%29.jpg"
        }
    ],
    current: [
        {
            name: "ليونيل ميسي",
            position: "مهاجم",
            age: "36",
            height: "170 سم",
            weight: "72 كجم",
            clubNumber: "10",
            nationalNumber: "10",
            club: "إنتر ميامي",
            previousClubs: "برشلونة، باريس سان جيرمان",
            league: "الدوري الأمريكي",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lionel_Messi_WC2022.jpg"
        }
    ],
    coaches: [
        {
            name: "بيب غوارديولا",
            position: "مدرب",
            age: "53",
            height: "180 سم",
            weight: "75 كجم",
            clubNumber: "-",
            nationalNumber: "-",
            club: "مانشستر سيتي",
            previousClubs: "برشلونة، بايرن ميونيخ",
            league: "الدوري الإنجليزي",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Pep_Guardiola_2017_%28cropped%29.jpg"
        }
    ]
};

let currentCategory = "retired";
let currentIndex = 0;

function showPlayers(category) {
    currentCategory = category;
    currentIndex = 0;
    displayPlayer();
}

function showCoaches() {
    currentCategory = "coaches";
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
    document.getElementById("player-club-number").textContent = player.clubNumber;
    document.getElementById("player-national-number").textContent = player.nationalNumber;
    document.getElementById("player-club").textContent = player.club;
    document.getElementById("player-previous-clubs").textContent = player.previousClubs;
    document.getElementById("player-league").textContent = player.league;
    document.getElementById("player-image").src = player.image;

    document.getElementById("player-info").classList.remove("hidden");
}

function toggleDetails() {
    document.querySelector(".details").classList.toggle("hidden");
}

function changePlayer() {
    currentIndex = (currentIndex + 1) % players[currentCategory].length;
    displayPlayer();
}
