import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground
 * - Floating particles (neural network style)
 * - Slow digital rain (smoothed)
 * - Floating hexagons
 */

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let width, height;

    // ── Resize ───────────────────────────────────────────────
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // ── Colors ───────────────────────────────────────────────
    const PRIMARY = '34,197,94';
    const ACCENT = '99,179,237';

    // ── Particles ────────────────────────────────────────────
    const COUNT = window.innerWidth < 768 ? 45 : 85;

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? PRIMARY : ACCENT,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const LINK_DIST = 130;

    const drawParticles = () => {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);

          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${PRIMARY},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // ── SLOW Digital Rain (FIXED) ────────────────────────────
    const FONT_SIZE = 14;
    const COLUMNS = Math.floor(window.innerWidth / (FONT_SIZE * 2.5));

    let drops = Array.from({ length: COLUMNS }, () => ({
      y: Math.random() * -100,
      speed: Math.random() * 0.12 + 0.05, // VERY SLOW
    }));

    const CHARS = '01アウエオカキクケコサシスセソ{}[]<>/\\|!@#$%^&*';

    const drawRain = () => {
      ctx.font = `${FONT_SIZE}px "Courier New", monospace`;

      drops.forEach((drop, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE * 2.5;
        const y = drop.y * FONT_SIZE;

        // Head glow
        ctx.fillStyle = `rgba(${PRIMARY}, 0.85)`;
        ctx.fillText(char, x, y);

        // Trail effect
        for (let t = 1; t < 5; t++) {
          ctx.fillStyle = `rgba(${PRIMARY}, ${0.12 / t})`;
          ctx.fillText(
            CHARS[Math.floor(Math.random() * CHARS.length)],
            x,
            y - t * FONT_SIZE
          );
        }

        // Reset smoothly
        if (y > window.innerHeight && Math.random() > 0.985) {
          drop.y = Math.random() * -50;
        }

        // slow movement
        drop.y += drop.speed;
      });
    };

    // ── Hexagons ─────────────────────────────────────────────
    const HEX_COUNT = 8;

    const hexagons = Array.from({ length: HEX_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.005,
      opacity: Math.random() * 0.06 + 0.02,
    }));

    const drawHex = (cx, cy, size, rotation) => {
      ctx.beginPath();
      for (let s = 0; s < 6; s++) {
        const angle = (Math.PI / 3) * s + rotation;
        const px = cx + size * Math.cos(angle);
        const py = cy + size * Math.sin(angle);
        s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawHexagons = () => {
      hexagons.forEach(h => {
        h.x += h.vx;
        h.y += h.vy;
        h.rotation += h.rotSpeed;

        if (h.x < -h.size) h.x = window.innerWidth + h.size;
        if (h.x > window.innerWidth + h.size) h.x = -h.size;
        if (h.y < -h.size) h.y = window.innerHeight + h.size;
        if (h.y > window.innerHeight + h.size) h.y = -h.size;

        drawHex(h.x, h.y, h.size, h.rotation);
        ctx.strokeStyle = `rgba(${PRIMARY},${h.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        drawHex(h.x, h.y, h.size * 0.55, h.rotation + Math.PI / 6);
        ctx.strokeStyle = `rgba(${ACCENT},${h.opacity * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
    };

    // ── Animation Loop ───────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(11,17,32,0.06)';
      ctx.fillRect(0, 0, width, height);

      drawRain();
      drawHexagons();
      drawParticles();

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;