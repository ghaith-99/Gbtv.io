const players = {
    current: [
        {
            name: "ليونيل ميسي",
            position: "مهاجم",
            age: "36",
            height: "170 سم",
            weight: "72 كجم",
            clubLogo: "messi-club.png",
            leagueLogo: "laliga.png",
            countryFlag: "argentina.png",
            previousClubs: "برشلونة, باريس سان جيرمان",
            image: "messi.png",
            extra: "فاز بالكرة الذهبية 8 مرات"
        },
        {
            name: "كريستيانو رونالدو",
            position: "مهاجم",
            age: "39",
            height: "187 سم",
            weight: "83 كجم",
            clubLogo: "ronaldo-club.png",
            leagueLogo: "saudi-league.png",
            countryFlag: "portugal.png",
            previousClubs: "مانشستر يونايتد, ريال مدريد, يوفنتوس",
            image: "ronaldo.png",
            extra: "هداف دوري أبطال أوروبا التاريخي"
        }
    ],
    retired: [
        {
            name: "رونالدينيو",
            position: "وسط هجومي",
            age: "43",
            height: "182 سم",
            weight: "80 كجم",
            clubLogo: "barcelona.png",
            leagueLogo: "laliga.png",
            countryFlag: "brazil.png",
            previousClubs: "برشلونة, ميلان",
            image: "ronaldinho.png",
            extra: "فاز بكأس العالم 2002"
        }
    ],
    coaches: [
        {
            name: "بيب غوارديولا",
            position: "مدرب",
            age: "53",
            clubLogo: "man-city.png",
            leagueLogo: "premier-league.png",
            countryFlag: "spain.png",
            previousClubs: "برشلونة, بايرن ميونيخ",
            image: "pep.png",
            extra: "فاز بدوري الأبطال 3 مرات"
        }
    ]
};

let currentCategory = "current";
let currentIndex = 0;

function displayPlayer() {
    const player = players[currentCategory][currentIndex];

    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-position").textContent = player.position;
    document.getElementById("player-age").textContent = player.age;
    document.getElementById("player-height").textContent = player.height;
    document.getElementById("player-weight").textContent = player.weight;
    document.getElementById("player-club-logo").src = player.clubLogo;
    document.getElementById("player-league-logo").src = player.leagueLogo;
    document.getElementById("player-country-flag").src = player.countryFlag;
    document.getElementById("previous-clubs").textContent = player.previousClubs;
    document.getElementById("player-image").src = player.image;
    document.getElementById("extra-details").textContent = player.extra;
}

document.getElementById("next-player").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % players[currentCategory].length;
    displayPlayer();
});

document.getElementById("toggle-info").addEventListener("click", function() {
    document.getElementById("player-extra-info").classList.toggle("hidden");
});

document.getElementById("category-selector").addEventListener("change", function(event) {
    currentCategory = event.target.value;
    currentIndex = 0;
    displayPlayer();
});

displayPlayer();
