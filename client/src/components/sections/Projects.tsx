import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Responsive Website Project",
    description: "Based on the requirements of client application performance, implemented design, ensured responsiveness with media queries. Two website and commerce architecture showcase.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "linear-gradient(to bottom right, #4c1d95, #8b5cf6)"
  },
  {
    title: "Project 2: Restininoid",
    description: "Based on the review of app application and measures authentication use planning and authentication part successfully and commerce architecture.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "linear-gradient(to bottom right, #0ea5e9, #22d3ee)"
  },
  {
    title: "Project 3: RESTFUL API CRUD",
    description: "Node JS Express API application use Restapi CRUD operations use to build UNIVERSAL REST API JSON and HTTP methods using express.",
    tags: ["API", "Backend", "Database"],
    image: "linear-gradient(to bottom right, #db2777, #f472b6)"
  }
];

export function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading mb-12 flex items-center gap-3"
        >
          <Code className="text-purple-500" />
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div 
                className="h-48 w-full flex items-center justify-center relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <Code className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-white/20 hover:bg-white/10">
                    Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
