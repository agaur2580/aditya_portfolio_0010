import { useEffect, useMemo, useRef, useState } from "react";

export default function Work() {
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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const work = useMemo(
    () => [
      {
        name: "Splitr",
        kicker: "AI expense sharing",
        type: "React · Node · AI · Vercel",
        cover: "./assets/work-1.png",
        description:
          "An AI-powered expense sharing web app for splitting bills, tracking group spends, and sending reminders — built for real use, not just a demo.",
        tags: ["React", "AI", "REST API", "Vercel"],
        link: "https://splitwise-inspired-expense-tracker.vercel.app/",
        featured: true,
      },
      {
        name: "E-Commerce Platform",
        kicker: "Storefront",
        type: "React · REST APIs · Tailwind",
        cover: "./assets/work-3.png",
        description:
          "Responsive catalog, cart flow, and API-backed product data with a storefront that stays fast on phone and desktop.",
        tags: ["React", "REST API", "Commerce"],
        link: "#",
      },
      {
        name: "Portfolio Website",
        kicker: "This site",
        type: "React · Tailwind · Theming",
        cover: "./assets/work-4.png",
        description:
          "A studio-style personal site with dark/light modes, motion, and a layout designed to make the work the hero.",
        tags: ["React", "Design", "Responsive"],
        link: "#top",
      },
      {
        name: "Digital Civix",
        kicker: "Civic platform",
        type: "MERN · Auth · RBAC",
        cover: "./assets/work-2.png",
        description:
          "Petition management, polling, and role-based access on a secure civic engagement stack.",
        tags: ["MongoDB", "Auth", "Node"],
        link: "#",
      },
    ],
    []
  );

  const featured = work[0];
  const rest = work.slice(1);

  const openProps = (link) =>
    link.startsWith("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

  return (
    <section id="work" ref={sectionRef} className="section-pad">
      <div className={`flex items-end justify-between gap-6 flex-wrap ${isVisible ? "rise" : "opacity-0"}`}>
        <div>
          <p className="eyebrow">02 — Selected work</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-7xl mt-3">
            Projects that
            <br />
            earn the scroll.
          </h2>
        </div>
        <a
          href="https://github.com/agaur2580"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          GitHub
        </a>
      </div>

      <a
        href={featured.link}
        {...openProps(featured.link)}
        className={`group mt-12 lg:mt-16 grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] border hairline ${
          isVisible ? "rise" : "opacity-0"
        }`}
      >
        <div className="relative min-h-[280px] sm:min-h-[380px] overflow-hidden">
          <img
            src={featured.cover}
            alt={featured.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            className="absolute top-5 left-5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            Featured
          </span>
        </div>
        <div className="p-6 sm:p-10 flex flex-col justify-center" style={{ background: "var(--bg-2)" }}>
          <p className="eyebrow">{featured.kicker}</p>
          <h3 className="display text-4xl sm:text-5xl mt-3">{featured.name}</h3>
          <p className="mt-4 muted leading-relaxed">{featured.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <span key={t} className="text-xs rounded-full border hairline px-3 py-1">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold inline-flex items-center gap-2">
            Launch project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </p>
        </div>
      </a>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {rest.map((item, index) => (
          <a
            key={item.name}
            href={item.link}
            {...openProps(item.link)}
            className={`group overflow-hidden rounded-[1.75rem] border hairline ${
              isVisible ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.cover}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="eyebrow">{item.kicker}</p>
              <h3 className="display text-2xl mt-2">{item.name}</h3>
              <p className="mt-3 text-sm muted leading-relaxed">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
