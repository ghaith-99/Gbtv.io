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
            <p>الوزن: ${player .weight}</p>
            <p>رقم اللاعب مع النادي: ${player.clubNumber}</p>
            <p>رقم اللاعب مع المنتخب: ${player.nationalNumber}</p>
        `;
        infoDiv.innerHTML += playerInfo;
    });
} ### 5. إضافة الصور

تأكد من إضافة الصور الخاصة باللاعبين والمدربين في مجلد `images`، مثل:
- `zidane.jpg`
- `messi.jpg`
- `guardiola.jpg`

### 6. تشغيل الموقع

بعد إعداد الملفات والمجلدات، يمكنك فتح ملف `index.html` في متصفح الويب الخاص بك لرؤية الموقع يعمل. يمكنك الضغط على الأزرار المختلفة لعرض معلومات اللاعبين والمدربين.

### 7. تحسينات مستقبلية

- يمكنك إضافة المزيد من اللاعبين والمدربين إلى البيانات.
- يمكنك تحسين التصميم باستخدام مكتبات CSS مثل Bootstrap.
- يمكنك إضافة ميزات تفاعلية مثل البحث أو تصفية اللاعبين حسب الدوري أو الجنسية.

بهذه الخطوات، يمكنك إنشاء موقع ويب بسيط لتحدي كرة القدم. ### 8. إضافة ميزات تفاعلية

لزيادة تفاعل المستخدمين، يمكنك إضافة ميزات مثل:

- **شريط بحث:** يسمح للمستخدمين بالبحث عن لاعبين أو مدربين محددين.
- **تصفية البيانات:** يمكن للمستخدمين تصفية اللاعبين حسب الجنسية أو النادي أو المركز.
- **نظام تقييم:** يمكن للمستخدمين تقييم اللاعبين أو المدربين.

### 9. مثال على شريط البحث

يمكنك إضافة شريط بحث في ملف `index.html`:

```html
<input type="text" id="search" placeholder="ابحث عن لاعب أو مدرب" onkeyup="searchPlayers()">
