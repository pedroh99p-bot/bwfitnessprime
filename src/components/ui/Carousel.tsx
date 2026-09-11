"use client";
import { Children, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

export default function Carousel({
  children,
  label,
  className = "",
  autoplay = false,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
  autoplay?: boolean;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const hover = useRef(false);
  const focused = useRef(false);
  const visible = useRef(false);
  const resumeAt = useRef(0);
  const drag = useRef({ active: false, moved: false, x: 0, scroll: 0 });
  const [paused, setPaused] = useState(false);
  const items = Children.toArray(children);
  const itemCount = items.length;
  useEffect(() => {
    const node = rail.current;
    if (!node || !autoplay) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    observer.observe(node);
    let frame = 0;
    let previous = 0;
    let position = node.scrollLeft;
    const update = (time: number) => {
      const delta = previous ? Math.min(time - previous, 48) : 0;
      previous = time;
      if (
        !paused &&
        !media.matches &&
        visible.current &&
        !document.hidden &&
        !hover.current &&
        !focused.current &&
        !drag.current.active &&
        time > resumeAt.current
      ) {
        const nextGroup = node.children[itemCount] as HTMLElement | undefined;
        const first = node.children[0] as HTMLElement | undefined;
        const loopWidth =
          nextGroup && first ? nextGroup.offsetLeft - first.offsetLeft : 0;
        position += delta * 0.014;
        if (loopWidth && position >= loopWidth) position -= loopWidth;
        node.scrollLeft = position;
      } else position = node.scrollLeft;
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [autoplay, itemCount, paused]);
  const step = (direction: number) => {
    const node = rail.current;
    if (!node) return;
    resumeAt.current = performance.now() + 6000;
    node.scrollBy({
      left:
        direction *
        ((node.firstElementChild?.getBoundingClientRect().width || 280) + 20),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-tools">
        <span className="small muted">Arraste para explorar</span>
        <div className="carousel-buttons">
          {autoplay && (
            <button
              className="icon-button"
              aria-label={
                paused ? "Reproduzir avaliações" : "Pausar avaliações"
              }
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          )}
          <button
            className="icon-button"
            aria-label={`Anterior: ${label}`}
            onClick={() => step(-1)}
          >
            <ArrowLeft size={17} />
          </button>
          <button
            className="icon-button"
            aria-label={`Próximo: ${label}`}
            onClick={() => step(1)}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div
        ref={rail}
        className={`carousel-rail ${autoplay ? "carousel-auto" : ""}`}
        tabIndex={0}
        role="region"
        aria-roledescription="carrossel"
        aria-label={label}
        onMouseEnter={() => {
          hover.current = true;
        }}
        onMouseLeave={() => {
          hover.current = false;
        }}
        onFocusCapture={() => {
          focused.current = true;
        }}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node))
            focused.current = false;
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            step(e.key === "ArrowRight" ? 1 : -1);
          }
        }}
        onPointerDown={(e) => {
          resumeAt.current = performance.now() + 6000;
          if (e.pointerType !== "mouse" || e.button !== 0) return;
          drag.current = {
            active: true,
            moved: false,
            x: e.clientX,
            scroll: e.currentTarget.scrollLeft,
          };
        }}
        onPointerMove={(e) => {
          if (!drag.current.active) return;
          const dx = e.clientX - drag.current.x;
          if (Math.abs(dx) > 6) {
            drag.current.moved = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            e.currentTarget.classList.add("is-dragging");
          }
          if (drag.current.moved) {
            e.preventDefault();
            e.currentTarget.scrollLeft = drag.current.scroll - dx;
          }
        }}
        onPointerUp={(e) => {
          drag.current.active = false;
          e.currentTarget.classList.remove("is-dragging");
          if (e.currentTarget.hasPointerCapture(e.pointerId))
            e.currentTarget.releasePointerCapture(e.pointerId);
          resumeAt.current = performance.now() + 6000;
        }}
        onPointerCancel={(e) => {
          drag.current.active = false;
          e.currentTarget.classList.remove("is-dragging");
        }}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
      >
        {items.map((child, i) => (
          <div
            className="carousel-item"
            key={i}
            role="group"
            aria-label={`${i + 1} de ${itemCount}`}
          >
            {child}
          </div>
        ))}
        {autoplay &&
          items.map((child, i) => (
            <div
              className="carousel-item carousel-duplicate"
              key={`copy-${i}`}
              aria-hidden="true"
            >
              {child}
            </div>
          ))}
      </div>
    </div>
  );
}
