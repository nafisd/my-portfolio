"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {

    if (window.matchMedia("(hover: none)").matches) return; // skip on mobile

    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      width: "14px",
      height: "14px",
      borderRadius: "9999px",
      pointerEvents: "none",
      transform: "translate(-50%,-50%)",
      zIndex: "9999",
      background: "rgba(255,255,255,0.9)",
      mixBlendMode: "difference",
      transition:
        "transform 120ms ease, width 120ms ease, height 120ms ease, background 120ms ease",
    });

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);

    // Magnet hover
    function onHover(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-magnet]") as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * 0.15}px, ${dy * 0.15}px)`;
      cursor.style.transform = "translate(-50%,-50%) scale(1.6)";
    }

    function reset(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-magnet]") as HTMLElement | null;
      if (el) el.style.transform = "";
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
    }

    window.addEventListener("mousemove", onHover);
    window.addEventListener("mouseout", reset);

    return () => {
      cursor.remove();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", onHover);
      window.removeEventListener("mouseout", reset);
    };
  }, []);

  return null;
}
