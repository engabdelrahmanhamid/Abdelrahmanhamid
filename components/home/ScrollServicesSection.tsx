"use client";

import { useEffect, useRef, useState } from "react";
import { accentColor, scrollServices } from "./data";

export default function ScrollServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.55,
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services-scroll"
      className="relative overflow-hidden bg-[#f8f8f8]"
    >
      {/* Top label */}
      <div className="sticky top-0 z-30 flex h-16 items-center justify-center bg-[#f8f8f8]/90 backdrop-blur-sm sm:h-20">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.32em] sm:text-xs"
          style={{ color: accentColor }}
        >
          Services
        </p>
      </div>

      {/* Services */}
      <div className="relative">
        {scrollServices.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
              className="relative flex min-h-[78svh] items-center justify-center px-5 py-10 sm:min-h-screen sm:px-8"
            >
              <article
                className="relative mx-auto w-full max-w-[980px] text-center transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.35,
                  transform: isActive
                    ? "translateY(0px) scale(1)"
                    : "translateY(34px) scale(0.96)",
                }}
              >
                <p
                  className="text-[11px] font-black tracking-[0.28em] sm:text-xs"
                  style={{ color: accentColor }}
                >
                  {service.number}
                </p>

                <h2 className="mx-auto mt-3 max-w-[92vw] text-center text-[clamp(34px,12vw,68px)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-black sm:max-w-[1100px] sm:text-[clamp(60px,8vw,120px)]">
                  {service.title}
                </h2>

                <p
                  className="mx-auto mt-4 max-w-[340px] text-center text-[14px] leading-6 text-neutral-600 transition-all duration-500 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0px)"
                      : "translateY(16px)",
                  }}
                >
                  {service.description}
                </p>

                <p
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(54px,16vw,110px)] font-black uppercase leading-none tracking-[-0.07em] text-black/[0.035] sm:text-[clamp(90px,11vw,160px)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {service.title.split(" ").slice(0, 2).join(" ")}
                </p>
              </article>
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="sticky bottom-6 z-30 flex justify-center pb-6">
        <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-md">
          {scrollServices.map((service, index) => {
            const active = activeIndex === index;

            return (
              <span
                key={service.number}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: active ? 24 : 7,
                  backgroundColor: active ? accentColor : "rgba(0,0,0,0.18)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
