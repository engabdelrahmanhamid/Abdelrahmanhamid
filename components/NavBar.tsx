"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = ["Home", "Work", "Services", "About", "Contact"];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" className="text-xl font-black tracking-tight sm:text-2xl">
          Abdelrahman.
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/85"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="rounded border border-white/30 px-3 py-1 text-xs font-semibold text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/85"
              >
                {item}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
