import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/image_1765110437047.jpeg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-medium text-purple-400 mb-4">Pradip Chinta</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-heading">
            Full Stack <br />
            <span className="text-gradient">Developer</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
            Building modern web applications with React and Node.js. Beginner web
            developer with advanced local knowledge of HTML, CSS, JavaScript,
            TypeScript. Familiar with modern frameworks and Experienced in REST API
            Integrations and MVC architecture.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-4 bg-background rounded-full border-2 border-purple-500/30 flex items-center justify-center overflow-hidden">
               <img 
                src={avatarImage} 
                alt="Pradip Chinta" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Icons Decoration */}
            <div className="absolute -top-4 -right-4 p-3 glass-card rounded-full animate-bounce delay-100">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
            </div>
            <div className="absolute bottom-10 -left-8 p-4 glass-card rounded-full animate-bounce delay-300">
              <div className="w-6 h-6 bg-purple-500 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
