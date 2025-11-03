"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <nav className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-center gap-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="relative uppercase tracking-widest text-sm text-gray-200 hover:text-white transition"
              data-magnet
            >
              {link.name}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
