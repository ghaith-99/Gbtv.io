const players = {
    current: [
        {
            name: "ليونيل ميسي",
            position: "مهاجم",
            age: "36",
            height: "170 سم",
            weight: "72 كجم",
            clubLogo: "images/inter-miami.png",
            leagueLogo: "images/mls.png",
            countryFlag: "images/argentina.png",
            previousClubs: "برشلونة, باريس سان جيرمان",
            image: "images/messi.png"
        },
        {
            name: "كريستيانو رونالدو",
            position: "مهاجم",
            age: "39",
            height: "187 سم",
            weight: "83 كجم",
            clubLogo: "images/ronaldo-club.png",
            leagueLogo: "images/saudi-league.png",
            countryFlag: "images/portugal.png",
            previousClubs: "مانشستر يونايتد, ريال مدريد, يوفنتوس",
            image: "images/ronaldo.png"
        }
    ],
    retired: [
        {
            name: "رونالدينيو",
            position: "وسط هجومي",
            age: "43",
            height: "182 سم",
            weight: "80 كجم",
            clubLogo: "images/barcelona.png",
            leagueLogo: "images/laliga.png",
            countryFlag: "images/brazil.png",
            previousClubs: "برشلونة, ميلان",
            image: "images/ronaldinho.png"
        }
    ],
    coaches: [
        {
            name: "بيب غوارديولا",
            position: "مدرب",
            age: "53",
            clubLogo: "images/man-city.png",
            leagueLogo: "images/premier-league.png",
            countryFlag: "images/spain.png",
            previousClubs: "برشلونة, بايرن ميونيخ",
            image: "images/pep.png"
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
}

// تبديل اللاعب عند الضغط على الزر
document.getElementById("next-player").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % players[currentCategory].length;
    displayPlayer();
});

// إظهار وإخفاء المعلومات
document.getElementById("toggle-info").addEventListener("click", function() {
    document.querySelector(".player-details").classList.toggle("hidden");
});

// تبديل الفئة من القائمة المنسدلة
document.getElementById("category-selector").addEventListener("change", function(event) {
    currentCategory = event.target.value;
    currentIndex = 0;
    displayPlayer();
});

// عرض اللاعب الأول عند تحميل الصفحة
displayPlayer();
