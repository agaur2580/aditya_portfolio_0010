import { useState } from 'react';

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
      setResult("✅ Message sent successfully. I will reply soon!");
      event.target.reset();
    } else {
      setResult(data.message || "❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-20 px-6 sm:px-10 lg:px-16" id="contact">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-3xl relative">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Send a message</h2>
          <p className="mt-4 text-slate-300">
            Want to collaborate or ask a question? Fill out the form below and I&apos;ll get back to you quickly.
          </p>
        </div>

        <form onSubmit={onSubmit} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-300">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="text-sm text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="your@email.com"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm text-slate-300">Message</span>
            <textarea
              name="message"
              required
              rows="6"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              placeholder="Write your message..."
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.7)] focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          >
            Submit Form
          </button>

          {result && (
            <p className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-center text-sm text-slate-100">
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
