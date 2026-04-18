import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest">// 02 — PROJECTS</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of projects spanning AI, web platforms, and experimental ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 shadow-card flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity" />

              <div className="flex items-start justify-between mb-4 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <FolderGit2 size={20} />
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold mb-2 relative">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 relative">{p.description}</p>

              <ul className="space-y-1.5 mb-5 relative flex-1">
                {p.bullets.map((b, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 relative">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
