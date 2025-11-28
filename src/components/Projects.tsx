import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PhoneMockup from "@/components/PhoneMockup";
import ImageCarousel from "@/components/ImageCarousel";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Play,
  Download,
  Zap,
  Clock,
  ArrowRight,
  Target,
  Wrench,
  Lightbulb
} from "lucide-react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showUnderReviewDialog, setShowUnderReviewDialog] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Huduma360ke",
      description: "A comprehensive service platform designed to streamline access to essential services. Includes features for user onboarding, booking, and tracking of services. Built with React Native (frontend) and Node.js (backend), with a scalable architecture for future integrations.",
      image: "/huduma.jpeg",
      images: ["/huduma.jpeg", "/huduma1.jpeg", "/huduma2.jpeg", "/huduma3.jpeg", "/huduma4.jpeg"],
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "REST API"],
      category: "Mobile Development",
      githubUrl: "https://github.com",
      featured: true,
      isUnderReview: true,
      isMobileApp: true,
      insights: {
        problem: "Limited access to essential services in Kenya, with fragmented platforms making it difficult for users to find and book services efficiently.",
        tools: "React Native for cross-platform mobile development, Node.js for scalable backend, MongoDB for flexible data storage, and Expo for mobile deployment.",
        struggle: "Integrating multiple service providers with different APIs. Solved by creating a unified adapter pattern that standardizes all service interactions."
      }
    },
    {
      id: 2,
      title: "Edu Mashinani Dashboard",
      description: "An admin dashboard designed to manage and display course enrollment records. Includes printing and reporting features for easy administration. Built with PHP and MySQL for robust data management and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      technologies: ["PHP", "MySQL", "Bootstrap", "Chart.js", "jQuery"],
      category: "Web Development",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      isUnderReview: true,
      insights: {
        problem: "Educational institutions needed a centralized system to track course enrollments and generate comprehensive reports for administrative decisions.",
        tools: "PHP for server-side logic, MySQL for robust data management, Chart.js for interactive visualizations, and Bootstrap for responsive design.",
        struggle: "Complex report generation with multiple data relationships. Overcame this by implementing a modular query builder with caching for performance optimization."
      }
    },
    {
      id: 3,
      title: "Food Ordering App",
      description: "A mobile-first food ordering application that allows users to browse menus, place orders, and pay securely via M-Pesa integration. Built with React (frontend) and Node.js (backend), with plans for mobile conversion via Capacitor/React Native.",
      image: "https://images.pexels.com/photos/9461218/pexels-photo-9461218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&crop=center",
      technologies: ["React", "Node.js", "M-Pesa API", "MongoDB", "Capacitor"],
      category: "Mobile Development",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      isUnderReview: true,
      insights: {
        problem: "Local restaurants struggled with online ordering systems, and customers wanted a seamless mobile payment experience using M-Pesa.",
        tools: "React for dynamic UI, Node.js for real-time order processing, M-Pesa API for secure payments, and MongoDB for order management.",
        struggle: "M-Pesa API integration complexities and handling payment callbacks. Solved by implementing a robust webhook system with retry mechanisms and transaction logging."
      }
    },
    {
      id: 4,
      title: "Insurance App (Aminika)",
      description: "A React + Supabase insurance management solution for a startup. Includes a dashboard, insurance products, claims center, get-a-quote system, FAQs, and blog. Features direct email communication to owners via web3Forms integration. Designed for scalability and mobile accessibility.",
      image: "/Aminikal.png",
      images: ["/Aminikal.png", "/Aminikap.png"],
      technologies: ["React", "Supabase", "web3Forms", "PostgreSQL", "REST API"],
      category: "Web Development",
      liveUrl: "https://aminika-trusty-cover-5m51.onrender.com/",
      githubUrl: "https://github.com",
      featured: false,
      isLive: true,
      insights: {
        problem: "Insurance companies needed a modern, web-first platform to streamline policy management and improve customer engagement with direct communication channels.",
        tools: "React for component-based UI, Supabase for backend-as-a-service, web3Forms for seamless email integration, and PostgreSQL for data integrity.",
        struggle: "Implementing seamless email communication while maintaining data security. Solved by integrating web3Forms for reliable email delivery with proper validation and spam protection."
      }
    },
    {
      id: 5,
      title: "PCEA Youth Church App",
      description: "A church youth group application for event management and communication. Features include an events calendar, announcements, and activity tracking. Built as a React app with a mobile-first approach, with integration plans for Capacitor to deliver a native experience.",
      image: "/church.jpeg",
      images: ["/church.jpeg", "/church1.jpeg", "/church2.jpeg", "/church3.jpeg"],
      technologies: ["React", "Capacitor", "Node.js", "MongoDB", "PWA"],
      category: "Mobile Development",
      downloadUrl: "/pcea app.apk",
      githubUrl: "https://github.com",
      featured: false,
      isDownloadable: true,
      isMobileApp: true,
      insights: {
        problem: "Church youth groups lacked a centralized platform for event coordination and member communication, leading to missed activities and poor engagement.",
        tools: "React for component-based UI, Capacitor for native mobile features, Node.js for server logic, and MongoDB for flexible data storage.",
        struggle: "Implementing offline functionality for poor connectivity areas. Solved using service workers and local storage with sync capabilities when online."
      }
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "My personal portfolio website, showcasing my skills and projects. Features include sticky navigation, animated menus, project-only navigation buttons, and interactive contact form. Built with React and Tailwind, with animations powered by Framer Motion.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
      category: "Web Development",
      liveUrl: "https://port-1-t8la.onrender.com/",
      githubUrl: "https://github.com",
      featured: true,
      isLive: true,
      insights: {
        problem: "I needed a professional online presence that showcases my technical skills while providing an engaging user experience for potential clients and employers.",
        tools: "React for component architecture, Tailwind CSS for utility-first styling, Framer Motion for smooth animations, and TypeScript for type safety.",
        struggle: "Balancing visual appeal with performance optimization. I achieved this through lazy loading, optimized animations, and careful bundle size management."
      }
    },
    {
      id: 7,
      title: "ChaamaKe",
      description: "A digital platform for managing chamas (informal savings groups) in Kenya. Enables members to track contributions, access loans, manage investments, and coordinate meetings. Features include automated contribution tracking, loan management, mobile money integration, financial reporting, and real-time notifications. Designed to modernize traditional chama operations while maintaining community trust.",
      image: "/project4.jpeg",
      images: ["/project4.jpeg", "/project44.jpeg"],
      technologies: ["React Native", "Node.js", "MongoDB", "M-Pesa API", "Firebase"],
      category: "Mobile Development",
      downloadUrl: "https://github.com/ErickCoder254ke/port/releases/download/v1.0.0/app-release.apk",
      githubUrl: "https://github.com",
      featured: true,
      isLive: true,
      isDownloadable: true,
      isMobileApp: true,
      insights: {
        problem: "Traditional chamas in Kenya rely on manual record-keeping and cash handling, leading to transparency issues, tracking difficulties, and limited accessibility for members who can't attend physical meetings.",
        tools: "React Native for cross-platform mobile development, Node.js for real-time data processing, MongoDB for flexible member and transaction data, M-Pesa API for seamless mobile money integration, and Firebase for push notifications.",
        struggle: "Building trust in digital transactions within communities accustomed to physical cash handling. Solved by implementing transparent audit trails, multi-signature approvals for large transactions, and offline-first architecture for areas with poor connectivity."
      }
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  const handleProjectAction = () => {
    if (currentProjectData.isDownloadable) {
      const link = document.createElement('a');
      link.href = currentProjectData.downloadUrl;
      link.download = currentProjectData.downloadUrl.split('/').pop() || 'app.apk';
      link.target = '_self';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (currentProjectData.isLive) {
      window.open(currentProjectData.liveUrl, "_blank");
    } else if (currentProjectData.isUnderReview) {
      setShowUnderReviewDialog(true);
    } else {
      window.open(currentProjectData.liveUrl, "_blank");
    }
  };

  // Auto-dismiss dialog after 4 seconds
  useEffect(() => {
    if (showUnderReviewDialog) {
      const timer = setTimeout(() => {
        setShowUnderReviewDialog(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showUnderReviewDialog]);

  const toggleProjectDetails = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web development, 
            mobile applications, and creative digital solutions.
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-glow bg-card">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image or Phone Mockup */}
                  <div className="relative overflow-hidden bg-muted h-96 lg:h-[450px]">
                    {currentProjectData.isMobileApp && currentProjectData.images ? (
                      <PhoneMockup
                        images={currentProjectData.images}
                        alt={currentProjectData.title}
                      />
                    ) : currentProjectData.images && currentProjectData.images.length > 1 ? (
                      <ImageCarousel
                        images={currentProjectData.images}
                        alt={currentProjectData.title}
                      />
                    ) : (
                      <>
                        <img
                          src={currentProjectData.image}
                          alt={currentProjectData.title}
                          className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </>
                    )}
                    <div className="absolute top-4 left-4 space-y-2 z-20">
                      {currentProjectData.featured && (
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                      {currentProjectData.isLive && (
                        <Badge className="bg-green-600 text-white flex items-center gap-1 animate-pulse">
                          <div className="w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
                          LIVE
                        </Badge>
                      )}
                      {currentProjectData.isUnderReview && (
                        <Badge className="bg-orange-600 text-white flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Under Review
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-4 lg:p-6 flex flex-col justify-center">
                    <div className="space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-3">
                          {currentProjectData.category}
                        </Badge>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                          {currentProjectData.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {currentProjectData.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProjectData.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Insights Toggle */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleProjectDetails(currentProjectData.id)}
                          className="p-0 h-auto text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-2"
                        >
                          <Lightbulb className="w-4 h-4" />
                          Project Insights
                          <ArrowRight className={`w-3 h-3 transition-transform ${
                            expandedProject === currentProjectData.id ? 'rotate-90' : ''
                          }`} />
                        </Button>
                        
                        <AnimatePresence>
                          {expandedProject === currentProjectData.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-3 space-y-3"
                            >
                              <div className="grid gap-3">
                                <div className="flex gap-3">
                                  <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-medium text-sm">Problem Solved</h5>
                                    <p className="text-xs text-muted-foreground">{currentProjectData.insights.problem}</p>
                                  </div>
                                </div>
                                <div className="flex gap-3">
                                  <Wrench className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-medium text-sm">Tools & Approach</h5>
                                    <p className="text-xs text-muted-foreground">{currentProjectData.insights.tools}</p>
                                  </div>
                                </div>
                                <div className="flex gap-3">
                                  <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-medium text-sm">Key Challenge</h5>
                                    <p className="text-xs text-muted-foreground">{currentProjectData.insights.struggle}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                          className={`btn-hero group relative ${
                            currentProjectData.isLive
                              ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-green-500/25'
                              : currentProjectData.isUnderReview
                              ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-orange-500/25'
                              : ''
                          }`}
                          onClick={handleProjectAction}
                        >
                          {currentProjectData.isLive && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                          )}
                          {currentProjectData.isDownloadable ? (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Download App
                            </>
                          ) : currentProjectData.isLive ? (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Visit Live Site
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            </>
                          ) : currentProjectData.isUnderReview ? (
                            <>
                              <Clock className="mr-2 h-4 w-4" />
                              Live Preview
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Live Demo
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          className="btn-outline-glow group"
                          onClick={() => window.open(currentProjectData.githubUrl, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="h-12 w-12 rounded-full btn-outline-glow"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="h-12 w-12 rounded-full btn-outline-glow"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-3">
            <span className="text-sm text-muted-foreground">
              {currentProject + 1} of {projects.length}
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            className="btn-outline-glow"
            onClick={() => window.open("https://port-1-t8la.onrender.com/", "_blank")}
          >
            View Full Portfolio
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Futuristic Under Review Dialog */}
      <Dialog open={showUnderReviewDialog} onOpenChange={setShowUnderReviewDialog}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-background via-background to-primary/5 border-primary/20 shadow-glow">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-accent-glow">
                <Clock className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <DialogTitle className="text-xl font-display bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Project Under Review
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              This project is currently under review for live hosting. 
              Please check out the next project while we prepare this one for deployment.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <div className="pt-4">
              <Button
                onClick={() => {
                  setShowUnderReviewDialog(false);
                  nextProject();
                }}
                className="btn-hero bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Next Project
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
