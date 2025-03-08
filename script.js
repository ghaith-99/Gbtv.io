const players = [
    {
        name: "ليونيل ميسي",
        position: "مهاجم",
        age: "36",
        height: "170 سم",
        weight: "72 كجم",
        clubLogo: "images/messi-club.png",
        leagueLogo: "images/laliga.png",
        countryFlag: "images/argentina.png",
        previousClubs: ["images/barcelona.png", "images/psg.png"],
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
        previousClubs: ["images/manutd.png", "images/realmadrid.png", "images/juventus.png"],
        image: "images/ronaldo.png"
    }
];

let currentIndex = 0;

function displayPlayer() {
    const player = players[currentIndex];

    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-position").textContent = player.position;
    document.getElementById("player-age").textContent = player.age;
    document.getElementById("player-height").textContent = player.height;
    document.getElementById("player-weight").textContent = player.weight;
    document.getElementById("player-club-logo").src = player.clubLogo;
    document.getElementById("player-league-logo").src = player.leagueLogo;
    document.getElementById("player-country-flag").src = player.countryFlag;
    document.getElementById("player-image").src = player.image;

    // عرض الأندية السابقة كصور
    const previousClubsContainer = document.getElementById("previous-clubs");
    previousClubsContainer.innerHTML = "";
    player.previousClubs.forEach(club => {
        let img = document.createElement("img");
        img.src = club;
        img.alt = "شعار النادي السابق";
        previousClubsContainer.appendChild(img);
    });
}

// تبديل اللاعب
document.getElementById("next-player").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % players.length;
    displayPlayer();
});

// إظهار وإخفاء المعلومات
document.getElementById("toggle-info").addEventListener("click", function() {
    document.querySelector(".player-details").classList.toggle("hidden");
});

// تكبير صورة اللاعب عند الضغط عليها
document.getElementById("player-image").addEventListener("click", function() {
    document.getElementById("modal-img").src = this.src;
    document.getElementById("image-modal").style.display = "flex";
});

// إغلاق النافذة المنبثقة
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("image-modal").style.display = "none";
});

// عرض اللاعب الأول عند تحميل الصفحة
displayPlayer();
