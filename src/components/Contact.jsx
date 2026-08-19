import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "34ee5db2-ab29-4c3f-83dc-2a59d9bc1453");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent. I will reply soon.");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  const field =
    "mt-2 w-full rounded-2xl border hairline bg-transparent px-4 py-3 outline-none transition focus:border-[var(--accent)]";

  return (
    <section id="contact" className="section-pad">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="eyebrow">05 — Contact</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-7xl mt-3">
            Let&apos;s make
            <br />
            something sharp.
          </h2>
          <p className="mt-6 muted max-w-md">
            Open to internships, freelance, and full-time frontend roles. Remotely available.
          </p>
          <a href="mailto:agaur4348@gmail.com" className="display text-xl sm:text-2xl mt-10 inline-block underline-offset-4 hover:underline">
            agaur4348@gmail.com
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/agaur2580" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/psitaditya0010/" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface rounded-[1.75rem] p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              Name
              <input type="text" name="name" required className={field} placeholder="Your name" />
            </label>
            <label className="block text-sm">
              Email
              <input type="email" name="email" required className={field} placeholder="you@email.com" />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            Message
            <textarea name="message" required rows="5" className={`${field} rounded-3xl`} placeholder="Tell me about the role or project..." />
          </label>
          <button type="submit" className="btn-accent mt-6 w-full">
            Send message
          </button>
          {result && <p className="mt-4 text-sm muted text-center">{result}</p>}
        </form>
      </div>
    </section>
  );
}
