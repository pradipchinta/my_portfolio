import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10" />
           
           <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Email</p>
                   <p className="font-medium">pradipchinta166@gmail.com</p>
                 </div>
               </div>

               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Mobile</p>
                   <p className="font-medium">+91 7757956537</p>
                 </div>
               </div>

               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Location</p>
                   <p className="font-medium">Solapur, India</p>
                 </div>
               </div>
             </div>

             <div className="flex flex-col justify-center space-y-6">
               <p className="text-lg font-medium">Connect with me</p>
               <div className="flex gap-4">
                 <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center border border-white/10">
                   <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center border border-white/10">
                   <Github className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center border border-white/10">
                   <Twitter className="w-5 h-5" />
                 </a>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
