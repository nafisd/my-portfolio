import AnimatedHero from "@/components/AnimatedHero";
import ProjectCardAnimated from "@/components/ProjectCardAnimated";

export default function HomePage() {
  const projects = [
    {
      title: "Tempatkita.cafe",
      description:
        "A website built during semester 3 to help a friend's café business go online, developed using HTML, CSS, and JavaScript as the frontend stack.",
      image: "/images/project1.png",
      link: "#",
    },
    {
      title: "Golden Chick",
      description:
        "A competition project aimed at helping poultry farmers perform forecasting. Though not selected, the project continued as a personal exploration in web tech.",
      image: "/images/project2.png",
      link: "#",
    },
    {
      title: "Tajwidku",
      description:
        "A mobile app built with Expo (React Native) and Gluestack.io to assist users in learning Tajwid. The project received recognition from lecturers.",
      image: "/images/project3.png",
      link: "#",
    },
  ];

  return (
    <div className="space-y-20">
      <AnimatedHero />
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCardAnimated key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
