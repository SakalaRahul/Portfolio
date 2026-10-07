import { useEffect, useState } from "react";
export default function Typing({ words }) {
  const [i, setI] = useState(0), [txt, setTxt] = useState(""), [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        setTxt(w.slice(0, txt.length + 1));
        if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1200);
      } else {
        setTxt(w.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return <span>{txt}<span className="caret">|</span></span>;
}