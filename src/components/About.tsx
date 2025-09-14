import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  Film, 
  GraduationCap,
  Zap,
  Globe
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "React Native", "Android", "iOS"]
    },
    {
      category: "Backend & Database",
      icon: Database,
      skills: ["Firebase", "Supabase", "API Integration", "Node.js"]
    },
    {
      category: "Creative Suite",
      icon: Palette,
      skills: ["Adobe Photoshop", "After Effects", "UI/UX Design"]
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: GraduationCap,
      title: "Tech Educator",
      description: "Sharing knowledge through tutoring and mentoring"
    },
    {
      icon: Zap,
      title: "System Support",
      description: "Providing technical support and system optimization"
    },
    {
      icon: Film,
      title: "Creative Professional",
      description: "Bringing ideas to life through visual storytelling"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate IT professional with a creative edge, dedicated to delivering 
            exceptional digital experiences through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-foreground">
              Bridging Technology & Creativity
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a deep passion for technology and an eye for creative design, I specialize 
                in crafting digital solutions that not only function flawlessly but also 
                provide exceptional user experiences.
              </p>
              <p>
                My expertise spans across full-stack web development, mobile app creation, 
                and creative content production. I believe in the power of technology to 
                transform ideas into reality, and I'm committed to staying at the forefront 
                of emerging technologies.
              </p>
              <p>
                When I'm not coding, you'll find me mentoring aspiring developers, creating 
                visual content, or exploring the latest trends in tech innovation.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover bg-card shadow-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;