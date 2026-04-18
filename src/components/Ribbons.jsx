import { useEffect, useRef } from 'react';

export default function Ribbons() {
  const canvasRef = useRef(null);

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: mouse.current.x, y: mouse.current.y });
  const vel = useRef({ x: 0, y: 0 });
  const opacity = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    const getBackgroundBrightness = () => {
      try {
        const el = document.elementFromPoint(
          mouse.current.x,
          mouse.current.y
        );
        if (!el) return 255;

        const bg = getComputedStyle(el).backgroundColor;
        const rgb = bg.match(/\d+/g);
        if (!rgb) return 255;

        const [r, g, b] = rgb.map(Number);
        return (r + g + b) / 3;
      } catch {
        return 255;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Smooth follow */
      vel.current.x = (mouse.current.x - pos.current.x) * 0.18;
      vel.current.y = (mouse.current.y - pos.current.y) * 0.18;
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      const speed = Math.hypot(vel.current.x, vel.current.y);

      /* Show only when moving */
      const isMoving = speed > 0.35;
      opacity.current += isMoving ? 0.12 : -0.1;
      opacity.current = Math.max(0, Math.min(1, opacity.current));

      if (opacity.current <= 0.01) {
        requestAnimationFrame(animate);
        return;
      }

      /* Detect background */
      const brightness = getBackgroundBrightness();
      const isLightBg = brightness >= 180;

      ctx.save();
      ctx.globalAlpha = opacity.current;
      ctx.translate(pos.current.x, pos.current.y);

      const radius = isLightBg ? 26 : 22;
      const gradient = ctx.createRadialGradient(0, 0, 2, 0, 0, radius);

      if (isLightBg) {
        /* LIGHT BACKGROUND → GREEN / BLUE */
        gradient.addColorStop(0, 'rgba(46, 204, 113, 0.95)');
        gradient.addColorStop(0.6, 'rgba(31, 224, 121, 0.45)');
        gradient.addColorStop(1, 'rgba(46, 204, 113, 0.12)');
      } else {
        /* DARK BACKGROUND → NEUTRAL */
        gradient.addColorStop(0, 'rgba(214, 222, 227, 0.95)');
        gradient.addColorStop(0.6, 'rgba(168, 185, 203, 0.45)');
        gradient.addColorStop(1, 'rgba(221, 226, 231, 0.12)');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
}
