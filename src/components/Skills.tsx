import { motion } from "framer-motion";
import { Code2, Database, Paintbrush, Smartphone, Monitor, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 85 },
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "Supabase", level: 85 },
        { name: "API Integration", level: 90 },
        { name: "Node.js", level: 75 },
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "React Native", level: 80 },
        { name: "iOS Development", level: 70 },
        { name: "Android Development", level: 75 },
      ]
    },
    {
      icon: Paintbrush,
      title: "Creative & Design",
      skills: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "After Effects", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Video Editing", level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web technologies, mobile development, 
            and creative design tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="tech-icon mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1, 
                      duration: 0.5 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 text-gradient">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Flutter", icon: "📱" },
              { name: "Firebase", icon: "🔥" },
              { name: "Supabase", icon: "⚡" },
              { name: "TypeScript", icon: "📘" },
              { name: "Photoshop", icon: "🎨" },
              { name: "After Effects", icon: "🎬" },
              { name: "Tailwind", icon: "💨" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="tech-icon group cursor-default"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs bg-card px-2 py-1 rounded border border-border whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Skills;