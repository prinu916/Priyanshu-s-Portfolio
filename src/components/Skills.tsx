import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Code, Palette, Server, Database, Wrench } from "lucide-react";

const icons: Record<string, any> = {
  Languages: Code,
  Frontend: Palette,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest">// 03 — SKILLS</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">
            My <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([cat, list], i) => {
            const Icon = icons[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-bold text-lg">{cat}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary/60 hover:bg-primary/20 hover:text-primary transition-all border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
