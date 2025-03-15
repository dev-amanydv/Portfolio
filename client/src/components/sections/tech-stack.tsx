import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiCloudflare, SiMongodb, 
         SiPrisma, SiTypescript, SiJavascript, SiCss3, SiTailwindcss, 
         SiPostgresql, SiHono } from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiCloudflare, name: "Cloudflare Workers" },
  { icon: SiHono, name: "Hono" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiPostgresql, name: "PostgreSQL" }
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
                <tech.icon className="w-12 h-12 text-[#8892B0] group-hover:text-[#64FFDA] transition-colors" />
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