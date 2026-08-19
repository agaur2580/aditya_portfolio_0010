import { useEffect, useMemo, useRef, useState } from "react";

export default function Skill() {
  const skillCategories = useMemo(
    () => [
      {
        title: "Languages",
        skills: [
          { name: "JavaScript (ES6+)", level: 85 },
          { name: "Java", level: 80 },
          { name: "Python", level: 70 },
        ],
      },
      {
        title: "Frontend",
        skills: [
          { name: "HTML5 / CSS3", level: 90 },
          { name: "React.js", level: 82 },
          { name: "Tailwind CSS", level: 80 },
          { name: "Next.js", level: 60 },
        ],
      },
      {
        title: "Data & tools",
        skills: [
          { name: "SQL / MongoDB", level: 74 },
          { name: "Git & GitHub", level: 80 },
          { name: "Postman", level: 72 },
          { name: "Figma / Vercel", level: 70 },
        ],
      },
    ],
    []
  );

  const tools = useMemo(
    () => [
      { name: "VS Code", icon: "./assets/vscode.png" },
      { name: "Git", icon: "./assets/git.png" },
      { name: "GitHub", icon: "./assets/github.png" },
      { name: "Postman", icon: "./assets/postman.png" },
      { name: "Figma", icon: "./assets/figma.png" },
      { name: "MongoDB", icon: "./assets/mongodb.png" },
    ],
    []
  );

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

  return (
    <section id="skills" ref={sectionRef} className="section-pad">
      <div className={isVisible ? "rise" : "opacity-0"}>
        <p className="eyebrow">03 — Capabilities</p>
        <h2 className="display text-4xl sm:text-5xl lg:text-7xl mt-3">
          A stack I
          <br />
          actually ship with.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, i) => (
          <div
            key={category.title}
            className={`surface rounded-[1.75rem] p-6 sm:p-8 ${isVisible ? "rise" : "opacity-0"}`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <p className="eyebrow">{category.title}</p>
            <ul className="mt-6 space-y-5">
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span>{skill.name}</span>
                    <span className="muted">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-[3px] w-full rounded-full" style={{ background: "var(--line)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        background: "var(--accent)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className={`mt-8 flex flex-wrap gap-3 ${isVisible ? "rise" : "opacity-0"}`}>
        {tools.map((tool) => (
          <li
            key={tool.name}
            className="flex items-center gap-2 rounded-full border hairline px-4 py-2 text-sm"
          >
            <img src={tool.icon} alt="" className="w-5 h-5 object-contain" />
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
