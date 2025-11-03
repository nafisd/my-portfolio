export default function HeroSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10">
      {/* Profile Image */}
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-lg"
      />

      {/* Text Content */}
      <div className="flex-1 text-left space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Nafis Difaudin</h1>
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Nafis is a Front-End Developer with an engineering background, passionate about crafting
          modern, responsive, and user-friendly applications. Skilled in Laravel (Blade) and Flutter,
          he builds scalable web and mobile interfaces with a strong focus on clean UI/UX and
          maintainable design.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://github.com/yourusername"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
