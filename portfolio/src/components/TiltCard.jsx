import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export default function TiltCard({ p }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <motion.a href={p.link} target="_blank" rel="noreferrer" className="card"
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} layout>
      {p.img && <img src={p.img} alt={p.title} className="thumb" onError={(e) => (e.target.style.display = "none")} />}
      <h3>{p.title}</h3><p>{p.desc}</p>
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
    </motion.a>
  );
}