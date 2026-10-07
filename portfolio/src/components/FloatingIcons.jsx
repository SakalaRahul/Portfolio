const items = [
  { t: "Java", c: "#f89820" }, { t: "React", c: "#61dafb" }, { t: "Spring", c: "#6db33f" },
  { t: "MySQL", c: "#4479a1" }, { t: "Git", c: "#f05032" }, { t: "AWS", c: "#ff9900" },
  { t: "JS", c: "#f7df1e" }, { t: "HTML", c: "#e34f26" },
];
export default function FloatingIcons() {
  return (
    <div className="floaters" aria-hidden="true">
      {items.map((it, i) => (
        <span key={it.t} className="floater" style={{
          "--c": it.c, left: `${6 + ((i * 13) % 86)}%`, top: `${8 + ((i * 29) % 78)}%`,
          animationDelay: `${i * -1.4}s`, animationDuration: `${7 + (i % 4) * 2}s`,
        }}>{it.t}</span>
      ))}
    </div>
  );
}