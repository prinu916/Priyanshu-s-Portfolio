import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";

const Achievements = () => {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest">// 04 — ACHIEVEMENTS</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">
            Milestones & <span className="gradient-text">leadership</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="glass rounded-xl p-5 flex gap-4 items-start hover:border-primary/40 hover:translate-x-1 transition-all"
            >
              <Trophy className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-muted-foreground">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
