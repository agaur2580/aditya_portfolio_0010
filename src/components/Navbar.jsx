import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const applyTheme = (darkMode) => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.theme = darkMode ? "dark" : "light";
    setIsDark(darkMode);
  };

  useEffect(() => {
    const initialDark =
      localStorage.theme === "light"
        ? false
        : true;
    applyTheme(initialDark);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full max-w-full px-4 sm:px-8 lg:px-12 xl:px-20 py-3 transition-all duration-300 ${
          isScrolled ? "surface backdrop-blur-xl" : "bg-transparent"
        }`}
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="display text-lg sm:text-xl tracking-tight" onClick={() => setIsMenuOpen(false)}>
            AG<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-sm">
            {links.map((link, i) => (
              <li key={link.name}>
                <a href={link.href} className="group flex items-center gap-2 muted hover:text-[var(--fg)] transition-colors">
                  <span className="text-[10px] tracking-widest opacity-50">0{i + 1}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => applyTheme(!document.documentElement.classList.contains("dark"))}
              aria-label="Toggle color theme"
              className="h-10 w-10 rounded-full border hairline flex items-center justify-center"
            >
              <img src={isDark ? "./assets/sun_icon.png" : "./assets/moon_icon.png"} alt="" className="w-4" />
            </button>

            <a href="#contact" className="btn-accent hidden lg:inline-flex !py-2 !px-5 text-xs tracking-wide">
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border hairline"
            >
              <img src="./assets/menu-black.png" alt="" className="w-5 dark:hidden" />
              <img src="./assets/menu-white.png" alt="" className="w-5 hidden dark:block" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-[70] h-dvh w-[min(22rem,88vw)] transition-transform duration-500 lg:hidden p-8 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "var(--bg)",
          paddingTop: "max(2rem, env(safe-area-inset-top))",
          borderLeft: "1px solid var(--line)",
        }}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center"
        >
          <img src="./assets/close-black.png" alt="" className="w-5 dark:hidden" />
          <img src="./assets/close-white.png" alt="" className="w-5 hidden dark:block" />
        </button>

        <p className="eyebrow mt-10">Menu</p>
        <ul className="mt-8 flex flex-col gap-5">
          {links.map((link, i) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="display text-3xl"
              >
                <span className="text-sm muted mr-3">0{i + 1}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
