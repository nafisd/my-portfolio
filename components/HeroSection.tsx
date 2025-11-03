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
        A passionate developer focused on building clean, functional, and delightful applications —
        combining technology, AI, and user experience.
      </p>
      <div className="flex space-x-4 mt-4">
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
    </section>
  );
}
