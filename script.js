// Importing necessary functions (simulated)
const { getRandomEmoji, getRandomOffset } = (() => {
    const emojis = ['🎀', '💖', '✨', '🌟'];

    function getRandomEmoji() {
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    function getRandomOffset() {
        return {
            x: (Math.random() - 0.5) * 30, // ±15px
            y: (Math.random() - 0.5) * 30
        };
    }

    return { getRandomEmoji, getRandomOffset };
})();

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Track the mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Pick a random emoji
    particle.textContent = getRandomEmoji();
    particle.style.fontSize = (Math.random() * 20 + 15) + 'px'; // Wider size range

    // Add some random offset around the cursor
    const { x: offsetX, y: offsetY } = getRandomOffset();
    particle.style.left = (x + offsetX) + 'px';
    particle.style.top = (y + offsetY) + 'px';

    document.getElementById('particle-container').appendChild(particle);

    particle.addEventListener('animationend', function () {
        particle.remove();
    });
}

// Spawn particles near cursor every 100ms
setInterval(() => {
    createParticle(mouseX, mouseY);
}, 100);