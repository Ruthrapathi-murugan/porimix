"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Porimix", href: "#why-porimix" },
    { name: "Location", href: "#location" },
    { name: "Franchise", href: "#franchise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/images/logo.jpeg" alt="Porimix Logo" className="h-12 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark font-black uppercase text-sm hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/917010760433?text=Hi%20Porimix!%20I%20would%20like%20to%20place%20an%20order.%20Please%20share%20today's%20available%20menu."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-dark text-white px-5 py-3 font-black uppercase text-sm transition-colors shadow-sm"
          >
            Order on WhatsApp
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-brand-dark hover:text-brand-orange focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full max-h-[calc(100vh-5rem)] overflow-y-auto flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-black uppercase text-brand-dark hover:text-brand-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
