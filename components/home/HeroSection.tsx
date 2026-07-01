import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-neutral-900">
      <Image src="/bg.png" alt="Hero background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center text-white">
        <p className="fade-up text-xs font-semibold tracking-[0.2em]" style={{ color: "#ff9a52" }}>
          CREATIVE WEB DESIGN & DEVELOPMENT
        </p>
        <h1 className="fade-up fade-delay-1 mt-5 text-5xl font-black uppercase tracking-wide sm:text-7xl">
          ABDELRAHMAN
        </h1>
        <p className="fade-up fade-delay-2 mt-6 max-w-2xl text-base text-white/90 sm:text-xl">
        I design modern websites and digital experiences for brands that want to look professional and convert better.
        </p>
        <div className="fade-up fade-delay-2 mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded bg-white px-6 py-3 text-xs font-bold tracking-wide text-black transition hover:-translate-y-0.5 hover:bg-white/90 sm:text-sm"
          >
            START A PROJECT
          </a>
          <a
            href="#work"
            className="rounded border border-white px-6 py-3 text-xs font-bold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black sm:text-sm"
          >
            VIEW WORK
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 z-10 text-3xl text-white/70">⌄</div>
    </section>
  );
}
