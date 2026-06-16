import { useEffect, useRef, useState } from "react";
import type { SectionKey } from "../types";

type BlackCatCompanionProps = {
  mood: SectionKey;
};

export function BlackCatCompanion({ mood }: BlackCatCompanionProps) {
  const catRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const blinkTimerRef = useRef<number | null>(null);
  const latestMouse = useRef({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const updateCat = () => {
      const cat = catRef.current;
      if (!cat) return;

      const rect = cat.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = latestMouse.current.x - centerX;
      const dy = latestMouse.current.y - centerY;
      const distance = Math.max(Math.hypot(dx, dy), 1);
      const closeness = Math.max(0, 1 - distance / 240);
      const eyeX = Math.max(-4, Math.min(4, dx / 36));
      const eyeY = Math.max(-2, Math.min(2, dy / 58));
      const leanX = -Math.sign(dx) * closeness * 8;
      const leanY = closeness * 3;
      const tail = Math.max(-16, Math.min(22, dx / 18)) + closeness * 10;
      const ear = Math.max(-5, Math.min(5, dx / 70));
      const alert = mood === "archive" ? Math.max(0.2, closeness) : closeness * 0.5;

      cat.style.setProperty("--cat-eye-x", `${eyeX}px`);
      cat.style.setProperty("--cat-eye-y", `${eyeY}px`);
      cat.style.setProperty("--cat-shift-x", `${leanX}px`);
      cat.style.setProperty("--cat-shift-y", `${leanY}px`);
      cat.style.setProperty("--cat-tail-rotate", `${tail}deg`);
      cat.style.setProperty("--cat-ear-rotate", `${ear}deg`);
      cat.style.setProperty("--cat-alert", `${alert}`);
      frameRef.current = null;
    };

    const onPointerMove = (event: PointerEvent) => {
      latestMouse.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updateCat);
      }
    };

    const onClick = () => {
      if (blinkTimerRef.current !== null) {
        window.clearTimeout(blinkTimerRef.current);
      }
      setBlink(true);
      blinkTimerRef.current = window.setTimeout(() => {
        setBlink(false);
        blinkTimerRef.current = null;
      }, 180);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("click", onClick);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      if (blinkTimerRef.current !== null) {
        window.clearTimeout(blinkTimerRef.current);
      }
    };
  }, [mood]);

  return (
    <div
      ref={catRef}
      className="black-cat"
      data-mood={mood}
      data-blink={blink}
      aria-hidden="true"
    >
      <svg className="cat-svg" viewBox="0 0 120 112">
        <g className="cat-tail-layer">
          <path className="cat-tail-main" d="M86 68 C114 42 108 18 89 17 C75 16 72 29 79 37" fill="none" stroke="#09090b" strokeWidth="12" strokeLinecap="round" />
          <path className="cat-tail-glint" d="M91 61 C108 42 103 26 91 25" fill="none" stroke="#2f2f37" strokeWidth="2.4" strokeLinecap="round" />
        </g>
        <g className="cat-body-layer">
          <ellipse cx="58" cy="75" rx="34" ry="27" fill="#09090b" />
          <path className="cat-ear cat-ear-left" d="M34 51 L42 24 L55 47 Z" fill="#09090b" />
          <path className="cat-ear cat-ear-right" d="M77 48 L92 23 L93 55 Z" fill="#09090b" />
          <path className="cat-ear-inner" d="M41 42 L44 32 L50 45 Z" fill="#16151b" />
          <path className="cat-ear-inner" d="M84 44 L90 33 L90 48 Z" fill="#16151b" />
          <circle cx="64" cy="50" r="30" fill="#0c0c10" />
          <g className="cat-eye-group cat-eye-left">
            <ellipse cx="52" cy="49" rx="6" ry="8" fill="#d9ff77" className="cat-eye" />
            <ellipse cx="52" cy="50" rx="2" ry="6" fill="#111" className="cat-pupil" />
            <circle cx="50" cy="45" r="1.4" fill="#fff" className="cat-eye-spark" />
          </g>
          <g className="cat-eye-group cat-eye-right">
            <ellipse cx="75" cy="49" rx="6" ry="8" fill="#d9ff77" className="cat-eye" />
            <ellipse cx="75" cy="50" rx="2" ry="6" fill="#111" className="cat-pupil" />
            <circle cx="73" cy="45" r="1.4" fill="#fff" className="cat-eye-spark" />
          </g>
          <path className="cat-lids" d="M45 44 C50 41 55 41 59 44 M68 44 C73 41 78 41 82 44" fill="none" stroke="#050507" strokeWidth="3" strokeLinecap="round" />
          <path d="M63 58 L59 64 L67 64 Z" fill="#111" />
          <path className="cat-mouth" d="M59 68 C61 70 64 70 66 68" fill="none" stroke="#19191f" strokeWidth="1.8" strokeLinecap="round" />
          <path className="cat-whisker" d="M31 58 C15 54 10 52 3 49" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
          <path className="cat-whisker" d="M32 65 C17 65 11 67 4 70" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
          <path className="cat-whisker" d="M91 58 C107 54 112 52 118 49" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
          <path className="cat-whisker" d="M90 65 C105 65 111 67 117 70" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
