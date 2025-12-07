import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Katare Informatics",
    period: "Feb 2023 - Aug 2023",
    description: [
      "Designed and developed responsive websites using HTML, CSS, JavaScript, and TypeScript.",
      "Worked with REST APIs for data fetching and display.",
      "Improved website performance and speed through optimization techniques."
    ]
  },
  {
    role: "Backend Developer",
    company: "NewtSoft Solution",
    period: "Aug 2023 - Present",
    description: [
      "Worked with MVC frameworks to develop robust and scalable backends.",
      "Troubleshoot and fixed bugs and issues in the backend to ensure smooth operation of applications."
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading mb-12 flex items-center gap-3"
        >
          <Briefcase className="text-purple-500" />
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                </div>
                <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground flex items-center gap-2 w-fit">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
