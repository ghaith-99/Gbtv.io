// تهيئة المشغل
const player = videojs('videoPlayer', {
    controlBar: {
        volumePanel: { inline: false },
        fullscreenToggle: true
    }
});

// جلب بيانات القنوات
async function loadChannels() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ghaith-99/ghaith-99/main/mytv.json');
        const channels = await response.json();
        renderChannels(channels);
    } catch (error) {
        console.error('خطأ في تحميل القنوات:', error);
        alert('تعذر الاتصال بالخادم!');
    }
}

// عرض القنوات
function renderChannels(channels) {
    const container = document.getElementById('channelsGrid');
    channels.forEach(channel => {
        const card = `
            <div class="col-md-3 col-6">
                <div class="channel-card card bg-secondary text-white h-100" 
                     onclick="playStream('${channel.url}', '${channel.http_referrer}', '${channel.user_agent}')">
                    <img src="${channel.logo}" class="card-img-top p-2" alt="${channel.channel}" style="height: 150px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title text-center">${channel.channel}</h5>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// تشغيل القناة
function playStream(url, referrer, userAgent) {
    player.src({
        src: url,
        type: 'application/x-mpegURL',
        withCredentials: false,
        xhr: {
            headers: {
                'Referer': referrer || '',
                'User-Agent': userAgent || navigator.userAgent
            }
        }
    });
    player.play();
}

// بدء التحميل
loadChannels();
