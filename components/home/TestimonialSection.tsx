import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-8 sm:py-20">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="relative h-56">
          <Image src="/bg.png" alt="Client testimonial" fill className="object-cover" />
        </div>
        <div className="p-5">
          <p className="text-sm text-black/70">
            &ldquo;Working with Abdelrahman transformed our online image. The site looks premium and performs extremely
            well.&rdquo;
          </p>
          <p className="mt-4 text-sm font-bold">Sarah M. - Founder, Atelier Nova</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-black uppercase leading-tight sm:text-5xl">Your satisfaction comes first</h3>
        <p className="mt-4 max-w-md text-sm text-black/70 sm:text-base">
          From strategy to handoff, every detail is crafted to make your digital presence clear, refined, and ready to
          convert.
        </p>
      </div>
    </section>
  );
}
