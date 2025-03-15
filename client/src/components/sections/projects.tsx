import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    tech: ["React", "Node.js", "Spotify API"],
    github: "https://github.com",
    external: "https://example.com"
  },
  {
    title: "Project Two",
    description: "A minimal, dark theme template for VS Code, Sublime Text, Atom, iTerm, and more.",
    tech: ["VS Code", "Sublime Text", "Atom"],
    github: "https://github.com",
    external: "https://example.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-[#64FFDA] font-mono mr-2">03.</span>
          Some Things I've Built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-[#0A192F] border-[#233554] h-full">
                <CardHeader>
                  <CardTitle className="text-[#CCD6F6]">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8892B0] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[#64FFDA] font-mono text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#CCD6F6] hover:text-[#64FFDA]"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#CCD6F6] hover:text-[#64FFDA]"
                      asChild
                    >
                      <a href={project.external} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
