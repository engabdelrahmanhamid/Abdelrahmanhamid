import Image from "next/image";
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      <div className="relative h-[420px]">
        <Image src="/bg.png" alt="Workspace background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 text-white sm:px-8">
          <h3 className="text-4xl font-black uppercase sm:text-6xl">Let&apos;s meet!</h3>
          <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
            Ready to build a premium website that reflects your brand and drives results? Let&apos;s start your next
            project.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90">
              Book a Discovery Call
            </a>
            <a
              href="eng.abdelrahman.hamid@gmail.com"
              className="rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-black/10 bg-white px-4 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xl font-black">Abdelrahman.</p>
          <div className="flex items-center gap-4 text-black/70">
            {/* <a href="https://x.com/your-username" target="_blank" rel="noreferrer noopener" aria-label="X">
              <FaXTwitter size={16} />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a> */}
            <a href="eng.abdelrahman.hamid@gmail.com" aria-label="Email">
              <FaEnvelope size={16} />
            </a>
            <a href="https://instagram.com/eng.d7mmy" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="https://wa.me/966564029887" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
          </div>
          <p className="text-xs text-black/50">Copyright © 2026 Abdelrahman Hamid. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
