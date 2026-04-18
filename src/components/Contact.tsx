
"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Code2, ArrowUpRight, Loader2, CheckCircle, Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await emailjs.sendForm(
"service_io0ur2e",
"template_6b25qzd",
        formRef.current!,
        "lMH2Ow_EM0wwHPHBg"
      );
      toast({
        title: "Sent!",
        description: "Thanks, I'll reply soon.",
      });
      setSent(true);
      form.reset();
    } catch {
      toast({
        title: "Error",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const links = [
    { icon: FaGithub, label: "GitHub", value: "@prinu916", href: profile.socials.github },
    { icon: FaLinkedin, label: "LinkedIn", value: "Priyanshu Singh", href: profile.socials.linkedin },
    { icon: Code2, label: "LeetCode", value: "PriyanshuSingh916", href: profile.socials.leetcode },
    { icon: FaInstagram, label: "Instagram", value: "@hy_prinu_singh", href: profile.socials.instagram },
  ];

  if (sent) {
    return (
      <section id="contact" className="section-pad relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-elegant"
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p className="text-muted-foreground">I'll reply soon.</p>
            <Button onClick={() => setSent(false)} className="mt-6">Send another</Button>
            <div className="mt-12 pt-12 border-t border-border grid sm:grid-cols-2 gap-3 text-left">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-secondary/40 border border-border hover:border-primary/50 hover:bg-secondary transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                      <div className="text-sm font-medium truncate">{value}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all flex-shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-elegant"
        >
          <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />

          <div className="relative">
            <p className="text-sm font-mono text-primary mb-3 tracking-widest">// 05 — CONTACT</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
              Let's <span className="gradient-text">build</span> something
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Have an idea or opportunity? Send a message.
            </p>

            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 mb-12">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me more..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>

            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-secondary/40 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                      <div className="text-sm font-medium truncate">{value}</div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Priyanshu Singh. Crafted with passion & purple ✨</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

