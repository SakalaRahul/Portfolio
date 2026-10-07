import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Ctrl/Cmd+K palette: jump to sections or toggle theme.
export default function CommandPalette({ toggleTheme }) {
  const [open, setOpen] = useState(false), [q, setQ] = useState("");
  useEffect(() => {
    const k = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);
  const cmds = [
    ...["about", "experience", "skills", "projects", "education", "certifications", "contact"].map((id) => ({ label: `Go to ${id}`, run: () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }) })),
    { label: "Toggle theme", run: toggleTheme },
  ].filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <div className="palette" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Command palette">
            <input autoFocus placeholder="Type a command…" value={q} onChange={(e) => setQ(e.target.value)} />
            {cmds.map((c) => <button key={c.label} onClick={() => { c.run(); setOpen(false); setQ(""); }}>{c.label}</button>)}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
