import { useEffect } from "react";

export default function SiteFx() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div className="site-spotlight" aria-hidden="true" />
      <div className="site-noise" aria-hidden="true" />
    </>
  );
}
