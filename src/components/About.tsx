import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Heart } from "lucide-react";
import { education, profile } from "@/data/portfolio";

const stats = [
  { icon: Rocket, label: "Projects Built", value: "12+" },
  { icon: Code2, label: "Technologies", value: "20+" },
  { icon: GraduationCap, label: "CGPA", value: "7.78" },
  { icon: Heart, label: "Hackathons", value: "5+" },
];

const About = () => {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest">// 01 — ABOUT</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">
            Crafting <span className="gradient-text">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 shadow-card"
          >
            <h3 className="font-display text-2xl font-bold mb-4">Who I am</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                I love turning ideas into elegant interfaces and intelligent systems —
                blending clean code, thoughtful UX, and a touch of AI magic.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>
            {education.map((e, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-semibold">{e.degree}</h4>
                  <span className="text-xs font-mono text-primary whitespace-nowrap">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="text-sm mt-2 text-foreground/80">{e.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <Icon className="mx-auto mb-3 text-primary" size={24} />
              <div className="font-display font-bold text-3xl gradient-text">{value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
