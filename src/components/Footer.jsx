export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 lg:px-12 xl:px-20 py-8 border-t hairline">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="display text-lg">
          AG<span style={{ color: "var(--accent)" }}>.</span>
        </p>
        <p className="text-sm muted">
          © {new Date().getFullYear()} Aditya Singh Gaur — designed to be remembered.
        </p>
        <a href="#top" className="text-sm font-medium">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
