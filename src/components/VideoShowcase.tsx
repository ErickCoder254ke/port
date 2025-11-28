import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const VideoShowcase = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const codeLines = [
    "// Transforming Ideas",
    "const innovation = {",
    "  vision: 'AI-powered',",
    "  mission: 'Automation',",
    "};",
    "// Build the future"
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    codeLines.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, index * 400);
      timers.push(timer);
    });

    const resetTimer = setTimeout(() => {
      setVisibleLines([]);
    }, codeLines.length * 400 + 3000);
    timers.push(resetTimer);

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [visibleLines.length === 0]);

  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="max-w-2xl mx-auto relative overflow-hidden backdrop-blur-md bg-gradient-to-br from-card/60 to-card/40 border border-primary/20 rounded-lg p-4 shadow-card"
        >
          {/* Rotated Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            style={{ transform: 'rotate(90deg)', willChange: 'transform' }}
          >
            <source src="/AI Workflow Automation Platform & Tools.mp4" type="video/mp4" />
          </video>

          {/* Code Block Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                innovation.ts
              </span>
            </div>

            <div className="space-y-1 font-mono text-xs md:text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: visibleLines.includes(index) ? 1 : 0,
                    x: visibleLines.includes(index) ? 0 : -20
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-muted-foreground/50 w-6 select-none text-xs">
                    {line && (index + 1)}
                  </span>
                  <span className={`
                    ${line.startsWith('//') ? 'text-accent italic' : ''}
                    ${line.includes('const') ? 'text-primary' : ''}
                    ${line.includes("'") ? 'text-green-400' : ''}
                    ${!line.startsWith('//') && !line.includes('const') && !line.includes("'") && line.length > 0 ? 'text-foreground' : ''}
                  `}>
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {visibleLines.length > 0 && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-1.5 h-4 bg-primary ml-1 mt-1"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
