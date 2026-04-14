import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Users, Lightbulb, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0c0c] text-white px-6 md:px-12 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono mb-8">
            <Sparkles className="w-3 h-3" />
            <span>ABOUT GLMR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Simplifying digital growth for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">ambitious businesses</span>.</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We are a team of innovators dedicated to empowering businesses through cutting-edge digital solutions and strategic IT consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-[#111] p-8 rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium">Our Mission</h3>
            </div>
            <p className="text-white/60 leading-relaxed">
              To bridge the gap between complex technology and business goals, delivering scalable, secure, and intuitive digital experiences that drive growth and efficiency for our clients worldwide.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-[#111] p-8 rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium">Our Values</h3>
            </div>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3"><span className="text-emerald-400">•</span> Integrity in every interaction.</li>
              <li className="flex gap-3"><span className="text-emerald-400">•</span> Innovation that challenges the status quo.</li>
              <li className="flex gap-3"><span className="text-emerald-400">•</span> Excellence in execution and delivery.</li>
              <li className="flex gap-3"><span className="text-emerald-400">•</span> Client-centric approach to problem solving.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] p-12 rounded-3xl border border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium">Our Team</h3>
          </div>
          <p className="text-white/60 leading-relaxed">
            Our team is comprised of seasoned developers, creative designers, and strategic thinkers. We believe that great technology is built by great people working together with a shared vision. We are constantly learning, evolving, and pushing the boundaries of what is possible in the digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
