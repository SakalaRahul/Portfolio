import { useEffect, useRef } from "react";
// Canvas particle network that reacts to the mouse.
export default function ParticleField() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    let w, h, raf, mouse = { x: -999, y: -999 };
    const resize = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; };
    resize();
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
    }));
    const move = (e) => { const r = c.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      ctx.fillStyle = color;
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120) { p.x += (dx / d) * 1.5; p.y += (dy / d) * 1.5; }
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 7); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 110) {
            ctx.globalAlpha = 1 - dist / 110; ctx.strokeStyle = color;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); ctx.globalAlpha = 1;
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", move); };
  }, []);
  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}