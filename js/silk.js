const canvas = document.getElementById('silk-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

let step = 0;

function drawSilkAnimation() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height * 0.5);

    for (let i = 0; i < width; i++) {
        const waveOne = Math.sin(i * 0.003 + step) * 90;
        const waveTwo = Math.cos(i * 0.002 + step * 0.8) * 40;
        const yPosition = (height * 0.52) + waveOne + waveTwo;
        ctx.lineTo(i, yPosition);
    }

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();

    const linearGradient = ctx.createLinearGradient(0, height * 0.3, width, height);
    linearGradient.addColorStop(0, 'rgba(238, 235, 230, 0.4)');
    linearGradient.addColorStop(0.5, 'rgba(224, 219, 211, 0.2)');
    linearGradient.addColorStop(1, 'rgba(242, 240, 236, 0.7)');

    ctx.fillStyle = linearGradient;
    ctx.fill();

    step += 0.004; 
    requestAnimationFrame(drawSilkAnimation);
}

drawSilkAnimation();

drawSilkAnimation();
