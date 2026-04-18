import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";
import { useLeetCodeStats } from "@/hooks/useLeetCodeStats";
import { currentlyWorking } from "@/data/portfolio";

const CurrentlyWorking = () => {
  const { data: leetCodeStats, isLoading } = useLeetCodeStats();
  
  const dsaItem = {
    title: "LeetCode Score",
    description: "Loading...",
    progress: 45,
    tags: ["LeetCode", "Real-time", "Competitive"],
  };
  
  const dsaProgress = leetCodeStats ? (leetCodeStats.solved / 3920) * 100 : 45;
  const dsaDescription = leetCodeStats 
    ? `${leetCodeStats.solved}/3920 solved | Coins: ${leetCodeStats.coins || 'N/A'} | Rank: ${leetCodeStats.rank}`
    : "Loading LeetCode stats...";
  
  const dynamicDSA = {
    ...dsaItem,
    progress: Math.min(dsaProgress, 100),
    description: dsaDescription,
  };

  const updatedWorking = [
    currentlyWorking[0],
    dynamicDSA,
    currentlyWorking[2],
  ];

  return (
    <section id="working-on" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest">// 02.5 — IN PROGRESS</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Currently <span className="gradient-text">working on</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A peek at what's brewing in my dev lab right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {updatedWorking.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/50 transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Loader2 size={16} className={`animate-spin ${item.title === "LeetCode Score" ? "text-yellow-500" : ""}`} style={{ animationDuration: "3s" }} />
                  </div>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">Live</span>
                </div>

                <h3 className="font-display font-bold text-xl mb-2 flex items-center gap-2">
                  {item.title}
                  <Sparkles size={14} className="text-accent" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary">{Math.floor(item.progress)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-secondary/60 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorking;

