import Image from "next/image";

const companyLogos = [
  { name: "Salsala", image: "/logos/eng_standardized.png" },
  { name: "Derosa", image: "/logos/derosa_standardized.png" },
  { name: "Rawaq", image: "/logos/rawaq_standardized.png" },
  { name: "Altanfeethiah", image: "/logos/altanfeethiah_standardiz.png" },
  { name: "Digital Link", image: "/logos/digital-link-mark_standardized.png" },
  { name: "Orchestra", image: "/logos/orchestra_standardiz.png" },
];

export default function MarqueeSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-orange-600">
            Trusted By
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-black sm:text-6xl">
            Brands I Worked With
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {companyLogos.map((logo) => (
            <div
              key={logo.name}
              className="group flex h-36 items-center justify-center rounded-3xl border border-black/10 bg-white px-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-24 w-full">
                <Image
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain opacity-100 transition duration-300 group-hover:scale-120"
                  sizes="(max-width: 640px) 50vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}