
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Our Product", href: "/product" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9dfca] bg-[#fffaf0]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-3xl font-bold tracking-wider text-[#173d2c]">
            ROOH
          </span>
          <span className="text-[9px] font-semibold tracking-[0.3em] text-[#b89543]">
            HERBAL OIL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#465447] transition hover:text-[#b89543]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop WhatsApp Button */}
        <a
          href="https://wa.me/923701993719"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#173d2c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b89543] lg:inline-block"
        >
          Order Now →
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="rounded-lg border border-[#d9c28b] p-2 text-2xl text-[#173d2c] lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#e9dfca] bg-[#fffaf0] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-[#173d2c]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/923701993719"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#173d2c] px-5 py-3 text-center font-semibold text-white"
            >
              Order on WhatsApp →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
