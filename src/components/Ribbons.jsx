import { useEffect, useRef } from 'react';

export default function Ribbons() {
  const canvasRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos   = useRef({ x: 0, y: 0 });
  const vel   = useRef({ x: 0, y: 0 });
  const opacity = useRef(0);

  useEffect(() => {
    // Safe to access window here (client only)
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    pos.current   = { x: mouse.current.x, y: mouse.current.y };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);

    const getBackgroundBrightness = () => {
      try {
        const el = document.elementFromPoint(mouse.current.x, mouse.current.y);
        if (!el) return 255;
        const bg  = getComputedStyle(el).backgroundColor;
        const rgb = bg.match(/\d+/g);
        if (!rgb) return 255;
        const [r, g, b] = rgb.map(Number);
        return (r + g + b) / 3;
      } catch {
        return 255;
      }
    };

    let rafId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      vel.current.x = (mouse.current.x - pos.current.x) * 0.18;
      vel.current.y = (mouse.current.y - pos.current.y) * 0.18;
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      const speed    = Math.hypot(vel.current.x, vel.current.y);
      const isMoving = speed > 0.35;

      opacity.current += isMoving ? 0.12 : -0.1;
      opacity.current  = Math.max(0, Math.min(1, opacity.current));

      if (opacity.current > 0.01) {
        const brightness = getBackgroundBrightness();
        const isLightBg  = brightness >= 180;

        ctx.save();
        ctx.globalAlpha = opacity.current;
        ctx.translate(pos.current.x, pos.current.y);

        const radius   = isLightBg ? 28 : 24;
        const gradient = ctx.createRadialGradient(0, 0, 2, 0, 0, radius);

        if (isLightBg) {
          /* Light bg (white sections) → brand green */
          gradient.addColorStop(0,   'rgba(34, 197, 94, 0.90)');
          gradient.addColorStop(0.5, 'rgba(22, 163, 74, 0.40)');
          gradient.addColorStop(1,   'rgba(34, 197, 94, 0.08)');
        } else {
          /* Dark bg (hero/navy sections) → soft green glow */
          gradient.addColorStop(0,   'rgba(46, 204, 113, 0.80)');
          gradient.addColorStop(0.5, 'rgba(46, 204, 113, 0.30)');
          gradient.addColorStop(1,   'rgba(46, 204, 113, 0.05)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
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