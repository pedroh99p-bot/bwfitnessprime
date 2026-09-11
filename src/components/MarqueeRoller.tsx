"use client";
import { useEffect, useRef, useState } from "react";
export default function MarqueeRoller({
  words,
  direction = "left",
}: {
  words: string[];
  direction?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`roller ${direction === "right" ? "roller-reverse" : ""}`}
      aria-hidden="true"
      onPointerDown={() => setTouched(true)}
      onPointerUp={() => setTouched(false)}
      onPointerCancel={() => setTouched(false)}
      onPointerLeave={() => setTouched(false)}
    >
      <div
        className="roller-track"
        style={{
          animationPlayState: inView && !touched ? undefined : "paused",
        }}
      >
        {[0, 1].map((copy) => (
          <div className="roller-group" key={copy}>
            {words.map((word) => (
              <span key={word}>
                {word}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
