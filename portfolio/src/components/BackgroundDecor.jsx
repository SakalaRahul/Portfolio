const words = ["</>", "{ }", "const", "SELECT *", "@Bean", "useState()", "git push", "01101",
  "API", "npm run dev", "class Main", "=> {}", "JDBC", "REST", "<div/>", "int[]"];

export default function BackgroundDecor() {
  return (
    <div className="decor" aria-hidden="true">
      {words.map((w, i) => (
        <span key={w} className="code" style={{
          left: `${(i * 37) % 94}%`, top: `${(i * 53) % 92}%`,
          fontSize: `${0.9 + (i % 4) * 0.35}rem`,
          animationDuration: `${9 + (i % 5) * 3}s`, animationDelay: `${-i * 1.7}s`,
        }}>{w}</span>
      ))}
      <i className="shape ring" style={{ left: "8%", top: "30%" }} />
      <i className="shape ring r2" style={{ right: "6%", top: "60%" }} />
      <i className="shape square" style={{ right: "18%", top: "12%" }} />
      <i className="shape square s2" style={{ left: "22%", bottom: "10%" }} />
      <i className="shape plus" style={{ left: "45%", top: "20%" }}>+</i>
      <i className="shape plus" style={{ right: "35%", bottom: "18%" }}>+</i>
    </div>
  );
}