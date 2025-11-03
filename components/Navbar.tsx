import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-white/20 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="font-bold text-xl">Nafis Difaudin</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
