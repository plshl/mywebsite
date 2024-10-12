const confetti = document.getElementById('confetti');

function createConfetti() {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
    confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.appendChild(confettiPiece);
}

setInterval(createConfetti, 100);
