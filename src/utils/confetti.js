/**
 * Lightweight canvas confetti particle generator.
 * Runs smoothly on both mobile and desktop without external heavy libraries.
 */

export function triggerConfetti() {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.id = 'party-confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const colors = [
    '#9ed3dc', '#fefd99', '#fcb7c7', '#ca6180', '#ffffff', '#e8799a'
  ];

  const particleCount = 70;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width * 0.5 + (Math.random() - 0.5) * 80,
      y: height * 0.35 + (Math.random() - 0.5) * 50,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.9) * 14 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.32,
      opacity: 1,
      decay: Math.random() * 0.012 + 0.008
    });
  }

  let animationFrameId;

  function render() {
    ctx.clearRect(0, 0, width, height);

    let aliveCount = 0;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.opacity -= p.decay;

      if (p.opacity > 0) {
        aliveCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    }

    if (aliveCount > 0) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      cleanup();
    }
  }

  function cleanup() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  }

  render();

  // Safety timer to remove canvas after 4 seconds
  setTimeout(cleanup, 4000);
}
