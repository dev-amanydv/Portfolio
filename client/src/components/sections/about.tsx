import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-[#64FFDA] font-mono mr-2">01.</span>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-[#8892B0]">
            <p className="mb-4">
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try 
              editing custom Tumblr themes — turns out hacking together a custom reblog 
              button taught me a lot about HTML & CSS!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an 
              advertising agency, a start-up, a huge corporation, and a student-led 
              design studio.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-[#64FFDA] mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <Card className="aspect-square bg-[#0A192F] border-[#64FFDA]/20">
            <div className="w-full h-full bg-[#64FFDA]/5 hover:bg-transparent transition-colors relative group">
              <div className="absolute inset-0 border-2 border-[#64FFDA] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
