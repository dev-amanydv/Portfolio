import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiCloudflare, SiMongodb, 
         SiPrisma, SiTypescript, SiJavascript, SiCss3, SiTailwindcss, 
         SiPostgresql, SiHono } from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiCloudflare, name: "Cloudflare Workers", color: "#F38020" },
  { icon: SiHono, name: "Hono", color: "#34E0A1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiCss3, name: "CSS", color: "#1572B6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" }
];

export function TechStack() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-[#64FFDA] font-mono mr-2">02.</span>
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center p-6 rounded-lg bg-[#0A192F] border border-[#233554] hover:border-[#64FFDA] transition-colors">
                <tech.icon 
                  className="w-12 h-12 transition-colors duration-300" 
                  style={{ color: tech.color }}
                />
                <span className="mt-4 text-[#8892B0] group-hover:text-[#64FFDA] font-mono text-sm">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}