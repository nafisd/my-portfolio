"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const bgOpacity = useTransform(scrollY, [0, 200], [0.05, 0.15]);
  const blurValue = useTransform(scrollY, [0, 200], ["blur(8px)", "blur(16px)"]);

  return (
    <motion.header
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        backdropFilter: blurValue,
      }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.03)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.15)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 text-sm uppercase tracking-widest text-gray-300">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-white hover:opacity-80 transition"
          data-magnet
        >
          Nafis.dev
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`transition ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                  data-magnet
                >
                  {link.name}
                </Link>

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Hover underline */}
                {!isActive && (
                  <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1px] bg-white/60 transition-all duration-300"></span>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
