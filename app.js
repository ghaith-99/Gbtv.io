// كشف وتسجيل عنوان IP
axios.get('https://api.ipify.org?format=json')
    .then(res => document.getElementById('ip').textContent = res.data.ip);

const player = videojs('videoPlayer', {
    html5: {
        vhs: { overrideNative: true }
    }
});

// تحميل القنوات مباشرة
async function loadChannels() {
    try {
        const { data } = await axios.get('https://raw.githubusercontent.com/ghaith-99/ghaith-99/main/mytv.json');
        renderChannels(data);
    } catch (error) {
        alert('تم حظرك من الخادم! (HTTP ' + error.response?.status + ')');
        window.location.href = 'about:blank';
    }
}

function renderChannels(channels) {
    const container = document.getElementById('channelsGrid');
    channels.forEach(ch => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card bg-danger bg-opacity-25" 
                     onclick="playDirect('${ch.url}')">
                    <div class="card-body">
                        <h5>${ch.channel}</h5>
                        <small>${ch.url}</small>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// التشغيل المباشر (خطير!)
function playDirect(url) {
    player.src({ src: url, type: 'application/x-mpegURL' });
    player.play().catch(e => {
        alert('تم كشف الهجوم! سيتم الإبلاغ عن IP الخاص بك');
        document.getElementById('ip').style.color = '#ff0000';
    });
}

loadChannels();
