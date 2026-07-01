import Image from "next/image";

export default function VisualBannerSection() {
  return (
    <section className="relative h-[300px] sm:h-[380px]">
      <Image src="/bg.png" alt="Visual banner" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <h3 className="text-3xl font-black uppercase text-white sm:text-5xl">Your business are in safe hands</h3>
      </div>
    </section>
  );
}
