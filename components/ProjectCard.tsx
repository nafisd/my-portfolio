interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: Project) {
  return (
    <a
      href={link}
      target="_blank"
      className="block bg-white text-black rounded-2xl overflow-hidden hover:scale-105 transition shadow-md"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-gray-700">{description}</p>
      </div>
    </a>
  );
}
