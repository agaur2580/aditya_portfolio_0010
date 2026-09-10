import { useEffect, useMemo, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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

  const stats = useMemo(
    () => [
      { k: "8.53", l: "MCA CGPA" },
      { k: "05+", l: "Shipped projects" },
      { k: "2024", l: "Building since" },
    ],
    []
  );

  return (
    <section id="about" ref={sectionRef} className="section-pad">
      <div className={`flex items-end justify-between gap-6 flex-wrap ${isVisible ? "rise" : "opacity-0"}`}>
        <div>
          <p className="eyebrow">01 — About</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-7xl mt-3">
            Quiet craft.
            <br />
            Loud results.
          </h2>
        </div>
        <p className="max-w-md muted text-sm sm:text-base">
          MCA Graduate and full-stack developer. I turn product ideas into interfaces and the
          APIs behind them that recruiters, users, and teammates actually want to use.
        </p>
      </div>

      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        <article className={`lg:col-span-7 surface rounded-[1.75rem] p-6 sm:p-10 ${isVisible ? "rise" : "opacity-0"}`}>
          <p className="text-lg sm:text-2xl leading-relaxed display font-semibold tracking-tight">
            I build full-stack products end to end React on the front, Node.js and REST APIs
            underneath, MySQL or MongoDB holding it all together.
          </p>
          <p className="mt-6 muted leading-relaxed">
            My journey started with a <strong style={{ color: "var(--fg)" }}>BCA</strong> at
            Dayanand Academy of Management Studies, Kanpur, where I built the fundamentals 
            OOP, DBMS, and core CS. I carried that into an{" "}
            <strong style={{ color: "var(--fg)" }}>MCA</strong> at PSIT, going deeper into
            scalable systems and modern web development. At{" "}
            <strong style={{ color: "var(--fg)" }}>Infosys Springboard</strong> I shipped REST
            integrations, debugged performance, and delivered features in Agile sprints. On the
            side, I&apos;ve built full-stack apps like a Splitwise-inspired expense tracker and
            Digital Civix, a civic engagement platform. The goal is always the same: reliable
            software that still feels designed.
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <li key={s.l} className="border-t hairline pt-4">
                <p className="display text-3xl">{s.k}</p>
                <p className="eyebrow mt-2">{s.l}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className={`lg:col-span-5 relative overflow-hidden rounded-[1.75rem] aspect-[3/4] w-full self-start ${isVisible ? "rise" : "opacity-0"}`}>
          <img
            src="./assets/user-image.jpg"
            alt="Aditya Singh Gaur portrait"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <p className="eyebrow !text-white/70">Education</p>
            <p className="display text-2xl mt-2">PSIT, Kanpur</p>
            <p className="text-sm mt-1 opacity-80">MCA · 2024 — 2026</p>
            <p className="text-sm mt-3 opacity-70">
              BCA · Dayanand Academy, Kanpur · 2021 — 2024
            </p>
          </div>
        </article>

        <article className={`lg:col-span-12 surface rounded-[1.75rem] p-6 sm:p-8 flex flex-wrap gap-3 ${isVisible ? "rise" : "opacity-0"}`}>
          {[
            "Analytical thinking",
            "Team collaboration",
            "Problem solving",
            "Adaptability",
            "Communication",
            "Time management",
            "API design",
            "Database management",
          ].map((s) => (
            <span key={s} className="rounded-full border hairline px-4 py-2 text-sm">
              {s}
            </span>
          ))}
        </article>
      </div>
    </section>
  );
}
