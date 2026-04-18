import { motion } from "framer-motion";
import { Code2, ArrowDown, Sparkles, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Glow blob */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-6xl w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <Sparkles size={12} className="text-primary" />
            Available for opportunities
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            Hi, I'm <span className="gradient-text animate-gradient bg-gradient-primary bg-[length:200%_auto]">Priyanshu</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl">building the web, smart.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            {profile.bio[0]} {profile.bio[1]} {profile.bio[2]}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-secondary/80 hover:border-primary/40 transition-all"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-secondary/80 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
              { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Code2, href: profile.socials.leetcode, label: "LeetCode" },
              { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-primary animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center">
              <img
                src={profile.avatar}
                alt={profile.name}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
                className="w-full h-full object-cover"
              />
              <div
                className="hidden w-full h-full items-center justify-center font-display text-7xl gradient-text"
              >
                PS
              </div>
            </div>
          </div>
          {/* Floating tech chips */}
          {["React", "AI", "Node", "Python"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="absolute glass px-3 py-1.5 rounded-full text-xs font-mono"
              style={{
                top: `${[10, 20, 70, 80][i]}%`,
                left: `${[80, -5, -10, 85][i]}%`,
              }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
