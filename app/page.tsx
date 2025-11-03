import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const projects = [
    {
      title: "SIBI Gesture Recognition",
      description: "AI-powered sign language recognition app using CNN & MediaPipe.",
      image: "/images/project1.png",
      link: "#",
    },
    {
      title: "Kamus SIBI App",
      description: "A Flutter app that helps users learn and quiz sign language gestures.",
      image: "/images/project2.png",
      link: "#",
    },
    {
      title: "Realtime Voice AI",
      description: "A Node.js app streaming voice responses from OpenAI in realtime.",
      image: "/images/project3.png",
      link: "#",
    },
  ];

  return (
    <div className="space-y-20">
      <HeroSection />

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
