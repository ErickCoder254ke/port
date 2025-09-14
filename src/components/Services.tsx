import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Settings, 
  Palette, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React.js, TypeScript, and responsive design principles.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-Friendly",
        "Modern Frameworks"
      ],
      color: "from-primary to-primary-glow"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Cross-platform mobile applications using Flutter and React Native, delivering native performance with a single codebase.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "UI/UX Design",
        "App Store Deployment"
      ],
      color: "from-accent to-accent-glow"
    },
    {
      icon: Settings,
      title: "System Support",
      description: "Comprehensive IT support including system optimization, troubleshooting, and technical consulting for businesses and individuals.",
      features: [
        "System Optimization",
        "Troubleshooting",
        "Technical Consulting",
        "Maintenance Plans"
      ],
      color: "from-primary to-accent"
    },
    {
      icon: Palette,
      title: "Creative Editing",
      description: "Professional photo editing, video production, and motion graphics using Adobe Creative Suite for compelling visual content.",
      features: [
        "Photo Enhancement",
        "Video Production",
        "Motion Graphics",
        "Brand Design"
      ],
      color: "from-accent to-primary"
    },
    {
      icon: GraduationCap,
      title: "Tech Tutoring",
      description: "Personalized technology education covering programming, web development, and digital literacy for students and professionals.",
      features: [
        "Programming Basics",
        "Web Development",
        "One-on-One Sessions",
        "Curriculum Design"
      ],
      color: "from-primary-glow to-accent-glow"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your digital needs, 
            from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full card-hover bg-card shadow-card group">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full btn-outline-glow group/btn"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-hero border-none shadow-glow">
            <h3 className="text-2xl font-display font-semibold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. I'm here to help you 
              achieve your digital goals with innovative solutions.
            </p>
            <Button
              onClick={scrollToContact}
              className="btn-hero"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;