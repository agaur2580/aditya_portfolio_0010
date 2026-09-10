import { useEffect, useRef, useState } from "react";

const ticker = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "Node.js",
  "MongoDB",
  "UI Engineering",
  "Vercel",
];

export default function Header() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <header id="top" ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
      <div className="section-pad !pt-28 sm:!pt-32 lg:!pt-36 !pb-0 min-h-[100svh] flex flex-col justify-between">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end">
          <div className={isVisible ? "rise" : "opacity-0"}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                Available for work
              </span>
              <span className="eyebrow">India</span>
            </div>

            <p className="eyebrow mb-4">Full Stack Developer</p>
            <h1 className="display text-[18vw] sm:text-[12vw] lg:text-[7.4vw] xl:text-[6.6rem]">
              Aditya
              <br />
              Singh <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--fg)" }}>Gaur</span>
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg muted leading-relaxed">
              I design and ship interfaces that feel fast, considered, and a little unforgettable 
              React, modern CSS, and production-ready engineering.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#work" className="btn-accent">
                View selected work
              </a>
              <a href="./assets/Aditya_Singh.pdf" download className="btn-ghost">
                Download resume
              </a>
            </div>
          </div>

          <div
            className={`relative mx-auto w-full max-w-sm ${isVisible ? "rise" : "opacity-0"}`}
            style={{ animationDelay: "120ms" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] opacity-50 blur-3xl" style={{ background: "var(--accent)" }} />
            <div className="relative overflow-hidden rounded-[2rem] border hairline aspect-[3/4]">
              <img
                src="./assets/profile-img.jpg"
                alt="Aditya Singh Gaur"
                className="absolute inset-0 h-full w-full object-cover object-top grayscale hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] opacity-70">MCA · PSIT</p>
                  <p className="display text-2xl mt-1">CGPA 8.50</p>
                </div>
                <span className="text-xs">Infosys Springboard</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 border-y hairline overflow-hidden py-4 -mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-20 px-4">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-6 px-6 text-sm sm:text-base whitespace-nowrap">
                <span className="display">{item}</span>
                <span style={{ color: "var(--accent)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
