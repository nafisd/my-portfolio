"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCardAnimated({ title, description, image, link }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;
    el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateZ(4px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.a
      href={link}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="block bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
      data-magnet
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm mt-2 text-gray-700">{description}</p>
        </div>
      </motion.div>
    </motion.a>
  );
}
