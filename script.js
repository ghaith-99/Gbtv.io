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

function searchPlayers() {
    const input = document.get ElementById('search').value.toLowerCase();
    const infoDiv = document.getElementById('info');
    const players = [...playersData.retired, ...playersData.current, ...playersData.coaches];
    infoDiv.innerHTML = '';
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(input));
    
    if (filteredPlayers.length > 0) {
        filteredPlayers.forEach(player => {
            const playerInfo = `
                <h2>${player.name}</h2>
                <img src="${player.image}" alt="${player.name}">
                <p>الجنسية: ${player.nationality}</p>
                <p>النادي الحالي: ${player.currentClub || 'لا يوجد'}</p>
                <p>الأندية السابقة: ${player.previousClubs ? player.previousClubs.join(', ') : 'لا يوجد'}</p>
                <p>الدوري: ${player.league || 'لا يوجد'}</p>
                <p>المركز: ${player.position || 'لا يوجد'}</p>
                <p>العمر: ${player.age || 'لا يوجد'} سنة</p>
                <p>الطول: ${player.height || 'لا يوجد'}</p>
                <p>الوزن: ${player.weight || 'لا يوجد'}</p>
                <p>رقم اللاعب مع النادي: ${player.clubNumber || 'لا يوجد'}</p>
                <p>رقم اللاعب مع المنتخب: ${player.nationalNumber || 'لا يوجد'}</p>
            `;
            infoDiv.innerHTML += playerInfo;
        });
    } else {
        infoDiv.innerHTML = '<p>لا توجد نتائج مطابقة.</p>';
    }
} ### 4. ملف `images` 

تأكد من أن لديك مجلدًا يسمى `images` يحتوي على الصور التالية:

- `zidane.jpg` (صورة زين الدين زيدان)
- `messi.jpg` (صورة ليونيل ميسي)
- `guardiola.jpg` (صورة بيب غوارديولا)

### 5. كيفية تشغيل المشروع

- تأكد من أن جميع الملفات (`index.html`, `styles.css`, `script.js`, ومجلد `images`) موجودة في نفس المجلد.
- افتح ملف `index.html` في متصفح الويب الخاص بك.
- يجب أن ترى الأزرار للعرض، بالإضافة إلى حقل البحث. يمكنك النقر على الأزرار أو البحث عن اللاعبين والمدربين.

### 6. ملاحظات إضافية

- تأكد من أن الصور في المجلد `images` تحمل الأسماء الصحيحة.
- يمكنك إضافة المزيد من اللاعبين أو المدربين عن طريق تعديل كائن `playersData` في ملف `script.js`.
- إذا واجهت أي مشاكل، تحقق من وحدة التحكم في المتصفح للحصول على أي أخطاء قد تظهر.
