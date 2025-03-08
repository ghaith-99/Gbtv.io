const playersData = {
    retired: [
        {
            name: "زين الدين زيدان",
            nationality: "فرنسي",
            currentClub: "لا يوجد",
            previousClubs: ["يوفنتوس", "ريال مدريد"],
            league: "الدوري الإيطالي",
            position: "وسط",
            age: 50,
            height: "185 سم",
            weight: "80 كغ",
            clubNumber: "5",
            nationalNumber: "10",
            image: "images/zidane.jpg"
        }
        // يمكنك إضافة المزيد من اللاعبين المتعزلين هنا
    ],
    current: [
        {
            name: "ليونيل ميسي",
            nationality: "أرجنتيني",
            currentClub: "إنتر ميامي",
            previousClubs: ["برشلونة"],
            league: "الدوري الأمريكي",
            position: "مهاجم",
            age: 36,
            height: "170 سم",
            weight: "72 كغ",
            clubNumber: "10",
            nationalNumber: "10",
            image: "images/messi.jpg"
        }
        // يمكنك إضافة المزيد من اللاعبين الحاليين هنا
    ],
    coaches: [
        {
            name: "بيب غوارديولا",
            nationality: "إسباني",
            currentClub: "مانشستر سيتي",
            previousClubs: ["برشلونة", "بايرن ميونيخ"],
            league: "الدوري الإنجليزي",
            age: 52,
            height: "180 سم",
            weight: "75 كغ",
            image: "images/guardiola.jpg"
        }
        // يمكنك إضافة المزيد من المدربين هنا
    ]
};
function showPlayers(type) {
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = '';
    infoDiv.style.display = 'block';

    playersData[type].forEach(player => {
        const playerInfo = `
            <h2>${player.name}</h2>
            <img src="${player.image}" alt="${player.name}">
            <p>الجنسية: ${player.nationality}</p>
            <p>النادي الحالي: ${player.currentClub}</p>
            <p>الأندية السابقة: ${player.previousClubs.join(', ')}</p>
            <p>الدوري: ${player.league}</p>
            <p>المركز: ${player.position}</p>
            <p>العمر: ${player.age} سنة</p>
            <p>الطول: ${player.height}</p>
            <p>الوزن: ${player.weight}</p>
            <p>رقم اللاعب مع النادي: ${player.clubNumber}</p>
            <p>رقم اللاعب مع المنتخب: ${player.nationalNumber}</p>
        `;
        infoDiv.innerHTML += playerInfo;
    });
}
