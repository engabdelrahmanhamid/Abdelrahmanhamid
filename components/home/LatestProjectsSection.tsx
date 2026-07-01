"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { works } from "./worksData";

const accentColor = "#ff6a00";

function getMobileHeight(size: string) {
  if (size === "tall") return "h-[250px]";
  if (size === "large") return "h-[230px]";
  if (size === "wide") return "h-[180px]";
  return "h-[205px]";
}

function getDesktopHeight(size: string) {
  if (size === "tall") return "h-[540px]";
  if (size === "large") return "h-[440px]";
  if (size === "wide") return "h-[330px]";
  return "h-[380px]";
}

export default function WorksSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.45,
  });

  const titleY = useTransform(smoothProgress, [0, 0.35], [80, 0]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const titleScale = useTransform(smoothProgress, [0, 0.45], [0.92, 1]);

  const bgTextX = useTransform(smoothProgress, [0, 1], ["-8%", "8%"]);

  const colOneY = useTransform(smoothProgress, [0, 1], [120, -160]);
  const colTwoY = useTransform(smoothProgress, [0, 1], [-80, 180]);
  const colThreeY = useTransform(smoothProgress, [0, 1], [160, -120]);

  const mobileLeftX = useTransform(smoothProgress, [0, 1], ["-10%", "8%"]);
  const mobileRightX = useTransform(smoothProgress, [0, 1], ["8%", "-10%"]);
  const mobileY = useTransform(smoothProgress, [0, 1], [60, -80]);

  const columns = [
    works.filter((_, index) => index % 3 === 0),
    works.filter((_, index) => index % 3 === 1),
    works.filter((_, index) => index % 3 === 2),
  ];

  const columnMotion = [colOneY, colTwoY, colThreeY];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden bg-[#f8f8f8] py-20 sm:py-28"
    >
      <motion.p
        style={{ x: bgTextX }}
        className="pointer-events-none absolute left-0 top-24 hidden whitespace-nowrap text-[15vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.025] lg:block"
      >
        Selected Work Selected Work Selected Work
      </motion.p>

      <div className="relative z-10 mx-auto max-w-[1550px] px-4 sm:px-8">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
            scale: titleScale,
          }}
          className="mb-12 flex flex-col gap-5 sm:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: accentColor }}
            >
              Selected Work
            </p>

            <h2 className="max-w-4xl text-[46px] font-black uppercase leading-[0.88] tracking-[-0.065em] text-black sm:text-7xl lg:text-[120px]">
              Latest Projects
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-600 sm:text-base">
            A visual collection of websites, stores, and digital experiences
            built with clean layouts, strong direction, and smooth interaction.
          </p>
        </motion.div>

        {/* Desktop Apple/Wix Style Motion Grid */}
        <div className="hidden min-h-[1250px] grid-cols-3 gap-7 lg:grid">
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              style={{ y: columnMotion[columnIndex] }}
              className={columnIndex === 1 ? "pt-28" : columnIndex === 2 ? "pt-10" : ""}
            >
              {column.map((work, index) => (
                <ProjectCard
                  key={work.title}
                  work={work}
                  index={columnIndex + index * 3}
                  desktop
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden columns-2 gap-6 sm:block lg:hidden">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 80, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 break-inside-avoid"
            >
              <ProjectCard work={work} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Apple-like moving gallery */}
        <motion.div style={{ y: mobileY }} className="grid grid-cols-2 gap-3 sm:hidden">
          {works.map((work, index) => {
            const isRight = index % 2 === 1;

            return (
              <motion.div
                key={work.title}
                style={{
                  x: isRight ? mobileRightX : mobileLeftX,
                }}
                initial={{ opacity: 0, scale: 0.92, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={isRight ? "mt-12" : ""}
              >
                <MobileProjectCard work={work} index={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  work,
  index,
  desktop = false,
}: {
  work: {
    title: string;
    category: string;
    image: string;
    link: string;
    size: string;
  };
  index: number;
  desktop?: boolean;
}) {
  return (
    <Link
      href={work.link}
      className="group mb-7 block overflow-hidden rounded-[30px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]"
    >
      <motion.div
        whileHover={{
          y: -12,
          scale: 0.985,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative overflow-hidden ${getDesktopHeight(work.size)}`}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes={desktop ? "33vw" : "50vw"}
        />

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

        <div className="absolute left-5 top-5 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-black backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="absolute bottom-5 left-5 right-5 translate-y-6 rounded-3xl bg-white/85 p-5 opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em]"
            style={{ color: accentColor }}
          >
            {work.category}
          </p>

          <h3 className="text-2xl font-black uppercase leading-[0.95] tracking-[-0.045em] text-black">
            {work.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}

function MobileProjectCard({
  work,
  index,
}: {
  work: {
    title: string;
    category: string;
    image: string;
    link: string;
    size: string;
  };
  index: number;
}) {
  return (
    <Link
      href={work.link}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[0_14px_35px_rgba(0,0,0,0.1)]"
    >
      <motion.div
        whileTap={{ scale: 0.97 }}
        className={`relative overflow-hidden ${getMobileHeight(work.size)}`}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition duration-700 group-active:scale-105"
          sizes="50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold text-black backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <p
            className="mb-1 text-[8px] font-bold uppercase tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            {work.category}
          </p>

          <h3 className="text-[16px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white">
            {work.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}