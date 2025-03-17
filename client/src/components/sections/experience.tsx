/*import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    company: "Google",
    title: "Software Engineer",
    period: "2020 - Present",
    achievements: [
      "Developed and shipped highly interactive web applications using React.js",
      "Built and shipped the Google Search Console API v2",
      "Architected and implemented the front-end of Google's internal CMS"
    ]
  },
  {
    company: "Facebook",
    title: "Software Engineer",
    period: "2018 - 2020",
    achievements: [
      "Worked with a team of engineers to build Facebook's new privacy dashboard",
      "Implemented automated testing with Jest and React Testing Library",
      "Collaborated with designers to implement new features"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-[#64FFDA] font-mono mr-2">03.</span>
          Where I've Worked
        </h2>

        <Tabs defaultValue={experiences[0].company} className="max-w-2xl">
          <TabsList className="bg-[#0A192F] border-b border-[#233554]">
            {experiences.map((exp) => (
              <TabsTrigger
                key={exp.company}
                value={exp.company}
                className="data-[state=active]:text-[#64FFDA] data-[state=active]:border-[#64FFDA]"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          {experiences.map((exp) => (
            <TabsContent key={exp.company} value={exp.company}>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-1">
                  {exp.title} <span className="text-[#64FFDA]">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-[#8892B0] mb-4">{exp.period}</p>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex text-[#8892B0]">
                      <span className="text-[#64FFDA] mr-2">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}
  */