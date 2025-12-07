import { motion } from "framer-motion";
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiGit, SiGithub, SiDocker } from "react-icons/si";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-white" },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit, color: "text-red-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ]
  }
];

export function Skills() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-2">
            <span className="text-purple-500">const</span> 
            Technical Skills
            <span className="text-purple-500">=</span>
            <span className="text-yellow-400">{"{"}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-right text-yellow-400 text-3xl font-bold font-heading opacity-50">
          {"}"}
        </div>
      </div>
    </section>
  );
}
