import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Application",
    school: "P. A. H. Solapur University",
    status: "Ongoing",
    tags: ["CGPA: 8.5", "Computer Science"]
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Hirachand Nemchand College of Commerce",
    status: "Completed",
    tags: ["CGPA: 8.9", "First Class with Dist."]
  }
];

export function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading mb-12 flex items-center gap-3"
        >
          <GraduationCap className="text-purple-500" />
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
              
              <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-muted-foreground mb-4">{edu.school}</p>
              
              <div className="flex flex-wrap gap-2">
                {edu.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
