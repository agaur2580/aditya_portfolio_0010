import { useEffect, useRef, useState } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      num: "01",
      name: "Frontend engineering",
      description:
        "React applications with real performance, clean architecture, and interfaces that hold up in production.",
    },
    {
      num: "02",
      name: "Backend & API development",
      description:
        "Node.js services and RESTful APIs with JWT/OAuth auth, built for scalable, reliable data handling.",
    },
    {
      num: "03",
      name: "Database design",
      description:
        "Schema design and querying across MySQL and MongoDB — data modeled to match how the product actually uses it.",
    },
    {
      num: "04",
      name: "UI implementation",
      description:
        "Pixel-faithful, accessible builds from Figma — motion, spacing, and typography treated as part of the product.",
    },
    {
      num: "05",
      name: "Full-stack integration",
      description:
        "Frontend, backend, and database working as one system — REST flows, auth, and state that stay predictable end to end.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="section-pad">
      <div className={isVisible ? "rise" : "opacity-0"}>
        <p className="eyebrow">04 — Services</p>
        <h2 className="display text-4xl sm:text-5xl lg:text-7xl mt-3">
          How I can
          <br />
          help you ship.
        </h2>
      </div>

      <div className="mt-12 lg:mt-16 divide-y" style={{ borderColor: "var(--line)" }}>
        {services.map((service, index) => (
          <article
            key={service.name}
            className={`grid md:grid-cols-[auto_1fr] gap-4 md:gap-10 py-8 sm:py-10 group ${
              isVisible ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 80}ms`, borderColor: "var(--line)" }}
          >
            <p className="display text-4xl sm:text-5xl" style={{ color: "var(--accent)" }}>
              {service.num}
            </p>
            <div className="md:flex md:items-end md:justify-between gap-8">
              <div>
                <h3 className="display text-3xl sm:text-4xl">{service.name}</h3>
                <p className="mt-3 max-w-xl muted">{service.description}</p>
              </div>
              <a href="#contact" className="btn-ghost mt-5 md:mt-0 shrink-0">
                Inquire
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
