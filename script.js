const canvas = document.getElementById('webCanvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const bulb = document.querySelector('.bulb');
const batman = document.querySelector('.batman-logo');
const batmanContainer = document.querySelector('.batman-container');
const body = document.body;     
const title = document.querySelector('.title');

function drawSpiderWeb() {
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    const webSize = 300; 
    const numRadialLines = 12;
    for (let i = 0; i < numRadialLines; i++) {
        const angle = (i / numRadialLines) * Math.PI * 2;
        const length = webSize;
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
            
    const numRings = 8;
    for (let ring = 1; ring <= numRings; ring++) {
        const radius = (ring / numRings) * webSize;
        ctx.beginPath();
        for (let i = 0; i <= numRadialLines; i++) {
            const angle = (i / numRadialLines) * Math.PI * 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
    }
}

drawSpiderWeb();



bulb.addEventListener('click', function() {
    batman.classList.add('animate');
    
    setTimeout(() => {
        batman.classList.remove('animate');
    }, 1000);
});


bulb.addEventListener('click', function() {
    setTimeout(() => {
        body.style.animation = 'none';
    body.style.backgroundColor = '#1d1e22';
    bulb.style.backgroundColor = '#555';
    bulb.style.boxShadow = '0 0 10px #555';
    title.classList.add('animate__animated', 'animate__hinge');
    }, 500);
    
    
    bulb.style.animation = 'bulbFall 1s ease-in forwards';
    
    batman.classList.add('animate');
    
    setTimeout(() => {
        showPartyInvite();
    }, 1500);
});

function showPartyInvite() {
    const invite = document.getElementById('party-invite');
    invite.style.animation = 'fadeIn 2s forwards';
    invite.style.display = 'block';
}