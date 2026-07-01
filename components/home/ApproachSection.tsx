import { accentColor } from "./data";

export default function ApproachSection() {
  return (
    <section id="services" className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-8 sm:py-20">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em]" style={{ color: accentColor }}>
          MY APPROACH
        </p>
        <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-5xl">
          Services that combine clarity and results.
        </h3>
      </div>

      <div className="space-y-5">
        <article className="rounded-2xl border border-black/10 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-xs font-semibold tracking-[0.2em]" style={{ color: accentColor }}>
            01
          </p>
          <h4 className="mt-2 text-xl font-black">Brand identity at the core of my approach</h4>
          <p className="mt-2 text-sm text-black/70">
            The website design reflects brand personality and aligns with business goals, not just aesthetics.
          </p>
        </article>
        <article className="rounded-2xl border border-black/10 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-xs font-semibold tracking-[0.2em]" style={{ color: accentColor }}>
            02
          </p>
          <h4 className="mt-2 text-xl font-black">Custom websites, high-performing results</h4>
          <p className="mt-2 text-sm text-black/70">
            Responsive, fast, SEO-ready websites built for conversion and long-term scalability.
          </p>
        </article>
        <article className="rounded-2xl border border-black/10 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-xs font-semibold tracking-[0.2em]" style={{ color: accentColor }}>
            03
          </p>
          <h4 className="mt-2 text-xl font-black">Event-oriented and campaign pages</h4>
          <p className="mt-2 text-sm text-black/70">
            Landing pages for offers, launches, services, and campaigns designed to convert quickly.
          </p>
        </article>
      </div>

      <div className="pointer-events-none absolute -left-6 top-10 hidden h-24 w-24 rounded-2xl bg-black/5 sm:block float-soft" />
      <div className="pointer-events-none absolute right-12 top-36 hidden h-20 w-20 rounded-full bg-[#ff6b00]/15 sm:block float-soft" />
    </section>
  );
}
