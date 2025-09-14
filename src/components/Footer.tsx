import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Globe,
      href: "https://port-1-t8la.onrender.com/",
      label: "Portfolio"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <button
              onClick={scrollToTop}
              className="font-display font-bold text-2xl text-gradient hover:scale-105 transition-transform duration-300"
            >
              Erick.dev
            </button>
            <p className="text-muted-foreground mt-2">
              IT Professional & Creative Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Erick. Made with
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              and passion
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border"
        >
          <p className="text-center text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS. Powered by passion for technology.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;