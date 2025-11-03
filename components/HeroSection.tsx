export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
      />
      <h1 className="text-4xl font-bold tracking-tight">Nafis Difaudin</h1>
      <p className="max-w-xl text-gray-300">
        Nafis is a developer with a background in engineering university, bringing understanding in work ethic and profesional prosedur. Nafis is a Front-End Developer focused on building modern, responsive, and user-friendly applications for both web and mobile platforms. Nafis use Laravel (Blade templating) to craft dynamic and maintainable website interfaces, and Flutter to develop high-performance mobile apps for Android and iOS.
With a strong eye for UI/UX and a solid understanding of full-stack workflows, Nafis enjoy turning design ideas into functional interfaces that are both elegant and scalable.
      </p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com/nafisd"
          className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href="mailto:nafisdifaudin97@gmail.com"
          className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
