import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  MapPin, Phone, Mail, Github, Code2, Wrench, ShieldCheck,
  Server, Smartphone, CreditCard, Cloud, Bug, Briefcase, GraduationCap,
  ArrowDown, ArrowUpRight, Sparkles, Terminal, Award, Star, Sun, Coffee, Send,
  Download, ExternalLink, ChevronDown, BookOpen, Users,
} from "lucide-react";
import profileImg from "@/assets/profile.png";
import ErickBot from "@/components/ErickBot";
import PhoneShowcase from "@/components/PhoneShowcase";
import LaptopShowcase from "@/components/LaptopShowcase";

const localProScreens = [
  "/local1.jpeg",
  "/local2.jpeg",
  "/local3.jpeg",
  "/local4.jpeg",
  "/local5.jpeg",
  "/local6.jpeg",
  "/local7.jpeg",
  "/local8.jpeg",
  "/local9.jpeg",
  "/local10.jpeg",
];

const examOsScreens = [
  "/exam1.jpeg",
  "/exam2.jpeg",
  "/exam3.jpeg",
  "/exam4.jpeg",
  "/exam5.jpeg",
  "/exam6.jpeg",
  "/exam7.jpeg",
  "/exam8.jpeg",
  "/exam9.jpeg",
  "/exam10.jpeg",
  "/exam11.jpeg",
];

const aminikaPhoneScreen = "/Aminikap.png";
const chaamaKeScreens = ["/chama.jpeg", "/chamaa2.jpeg"];

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Erick Chege Gathemba — Builder, Integrator, Operator" },
      { name: "description", content: "Editorial portfolio of Erick Chege Gathemba — full-stack developer & IT operator from Nairobi. Products that ship, systems that stay up." },
      { property: "og:title", content: "Erick Chege Gathemba — Portfolio" },
      { property: "og:description", content: "Building digital products, integrating payments, keeping systems quiet." },
    ],
  }),
});

const skills = [
  { name: "React", icon: Code2 }, { name: "TypeScript", icon: Code2 },
  { name: "React Native", icon: Smartphone }, { name: "Python", icon: Code2 },
  { name: "Node.js", icon: Server }, { name: "Fastify", icon: Server },
  { name: "REST APIs", icon: Terminal }, { name: "M-Pesa", icon: CreditCard },
  { name: "Cloudflare", icon: Cloud }, { name: "Cloudinary", icon: Cloud },
  { name: "Microsoft 365", icon: Wrench }, { name: "Networking", icon: Server },
  { name: "QA Testing", icon: Bug }, { name: "Git/GitHub", icon: Github },
];

type Project = {
  n: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  stack: string[];
  icon: typeof Smartphone;
  accent: string;
  link?: { href: string; label: string; kind: "view" | "download" };
  insights: { problem: string; tools: string; challenge: string };
  screens?: string[];
  laptopScreens?: string[];
};

const projects: Project[] = [
  {
    n: "01",
    title: "Wajose Smart Wear",
    tag: "Commerce · Flagship",
    year: "2025",
    blurb: "Full-stack commerce ecosystem with M-Pesa, AI shopping assistance, WhatsApp workflows, and seller management — production-ready on Cloudflare.",
    stack: ["React", "TypeScript", "Fastify", "M-Pesa", "Cloudflare"],
    icon: Smartphone,
    accent: "var(--primary)",
    link: { href: "https://wajosesmartwear.co.ke/", label: "Visit site", kind: "view" },
    insights: {
      problem: "Local fashion sellers needed a unified online storefront with mobile payments and conversational support that real Kenyan shoppers actually use.",
      tools: "React + TypeScript frontend, Fastify backend, M-Pesa Daraja for payments, WhatsApp workflows for support, Cloudinary for media, deployed on Cloudflare.",
      challenge: "Wiring M-Pesa STK callbacks reliably under spotty networks. Solved with idempotent webhooks, queued retries, and an AI shopping assistant that recovers abandoned carts via WhatsApp.",
    },
  },
  {
    n: "02",
    title: "LocalPro KE",
    tag: "Mobile · Marketplace",
    year: "2024",
    blurb: "Mobile app connecting Kenyan customers with vetted local service providers. Booking, provider profiles, in-app messaging, and payments.",
    stack: ["React Native", "Node.js", "REST APIs", "Expo"],
    icon: Briefcase,
    accent: "var(--accent)",
    link: { href: "https://expo.dev/accounts/erickdev999/projects/petsoko/builds/0010abc7-2ead-402d-a5e2-a630c1f8bf65", label: "Download app", kind: "download" },
    insights: {
      problem: "Finding trustworthy local service providers in Kenya is fragmented across WhatsApp groups and word of mouth, with no accountability.",
      tools: "React Native (Expo) for cross-platform mobile, Node.js REST API backend, provider verification flow, and in-app booking & messaging.",
      challenge: "Building a two-sided marketplace that works on low-end Android devices. Solved with optimistic UI, offline-first caching, and lightweight Expo builds.",
    },
    screens: localProScreens,
  },
  {
    n: "03",
    title: "Aminika Insurance",
    tag: "Insurance · Workflow",
    year: "2024",
    blurb: "Digital insurance platform covering onboarding, products, quotations and claims with automation-first UX.",
    stack: ["React", "TypeScript", "Workflow"],
    icon: ShieldCheck,
    accent: "var(--sun)",
    link: { href: "https://www.amika-insurance.abrdns.com/", label: "Visit site", kind: "view" },
    insights: {
      problem: "Insurance onboarding and claims in Kenya are still paper-heavy, slow, and frustrating for both customers and agents.",
      tools: "React + TypeScript frontend, workflow engine for quotations and claims, document upload pipeline, and role-based agent dashboards.",
      challenge: "Modelling insurance product rules without hard-coding them. Solved with a configurable rules layer so new products ship without redeploying the app.",
    },
    screens: [aminikaPhoneScreen],
  },
  {
    n: "04",
    title: "Exam OS",
    tag: "EdTech · AI",
    year: "2025",
    blurb: "AI-powered study platform that turns uploaded notes into structured exams, quizzes, and summaries — passive notes become active practice.",
    stack: ["Flutter", "Python", "MongoDB", "Brevo OTP", "Vector Search"],
    icon: BookOpen,
    accent: "var(--accent)",
    link: { href: "#", label: "Download (coming soon)", kind: "download" },
    insights: {
      problem: "Students rely on static notes that are hard to convert into effective, exam-ready practice — leading to passive revision and inconsistent preparation.",
      tools: "Flutter mobile frontend, Python backend handling auth, file processing, AI prompt orchestration, Brevo OTP delivery, and subscription workflows backed by MongoDB.",
      challenge: "Maintaining fast, relevant generation across varied note uploads. Solved with a MongoDB vector search index for semantic retrieval and structured AI prompt pipelines for consistent outputs.",
    },
    screens: examOsScreens,
  },
  {
    n: "05",
    title: "ChaamaKe",
    tag: "FinTech · Community",
    year: "2025",
    blurb: "Digital platform for managing Kenyan chamas — contribution tracking, loans, investments, meetings, and M-Pesa integration in one place.",
    stack: ["React Native", "Node.js", "MongoDB", "M-Pesa API", "Firebase"],
    icon: Users,
    accent: "var(--primary)",
    link: { href: "https://github.com/ErickCoder254ke/port/releases/download/v1.0.0/app-release.apk", label: "Download APK", kind: "download" },
    insights: {
      problem: "Traditional chamas rely on manual ledgers and trust alone, making contributions, loans, and investments hard to track at scale.",
      tools: "React Native mobile app, Node.js + MongoDB backend, M-Pesa API for contributions and disbursements, Firebase for realtime notifications.",
      challenge: "Preserving community trust while digitising money flows. Solved with transparent member ledgers, role-based approvals, and automated financial reporting.",
    },
    screens: chaamaKeScreens,
  },
];


const experience = [
  {
    role: "ICT Support Technician & Computer Studies Tutor",
    org: "Turi Secondary School",
    date: "Mar 2024 — Jan 2026",
    points: [
      "Tier 1 ICT support across hardware, software, networking and classroom tech",
      "Maintained infrastructure supporting 500+ users",
      "Administered Microsoft 365, devices and access controls",
      "Troubleshot DNS, DHCP, Wi-Fi, auth and endpoint issues",
    ],
  },
  {
    role: "IT Support Intern",
    org: "Pioneer Insurance Holdings",
    date: "Mar 2023 — Jul 2023",
    points: [
      "Frontline workstation, printer and end-user support",
      "Supported ERP users and ICT infrastructure",
      "Documented troubleshooting procedures and solutions",
    ],
  },
];

const tickerItems = [
  "★ AVAILABLE FOR WORK", "Nairobi · Kenya · GMT+3", "React / TypeScript / Node",
  "M-Pesa integrations", "★ 500+ users supported", "Edition Nº 04 · 2026",
  "IT operator + product builder", "Let's build something",
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b-2 border-ink bg-background/85 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-display text-2xl italic-serif">
            <span className="relative inline-block size-9 rounded-full overflow-hidden border-2 border-ink shadow-[2px_2px_0_0_var(--ink)]" style={{ background: "var(--sun)" }}>
              <img src={profileImg} alt="Erick" className="absolute inset-0 w-full h-full object-cover scale-110" />
            </span>
            erick<span style={{ color: "var(--primary)" }}>.</span>
          </a>

          <div className="hidden md:flex gap-7 text-xs uppercase tracking-[0.18em] font-medium">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Stack</a>
            <a href="#journey" className="hover:text-primary transition">Road</a>
            <a href="#experience" className="hover:text-primary transition">Work</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <a href="#contact" className="text-xs uppercase tracking-wider font-semibold px-4 py-2 border-2 border-ink bg-primary text-primary-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_var(--ink)] transition-all">
            Hire me ↗
          </a>
        </div>
      </nav>

      {/* TICKER */}
      <div className="ticker relative z-40 py-2 mt-[60px] text-xs font-mono uppercase">
        <div className="animate-marquee inline-flex">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                {t}
              </span>
            ))}
          </div>
          <div className="ticker-track" aria-hidden>
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={`b${i}`} className="inline-flex items-center gap-3">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section id="top" className="relative pt-24 pb-24 px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Masthead */}
          <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-10 text-xs font-mono uppercase tracking-wider">
            <span>The Gathemba Gazette</span>
            <span className="hidden sm:inline">Vol. IV · Issue 26</span>
            <span>Mon · May 25 · 2026</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 stamp mb-8 animate-wobble">
                <span className="size-2 rounded-full inline-block" style={{ background: "var(--accent)" }} />
                Now Open for Commissions
              </div>
              <h1 className="font-display text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.88] tracking-tighter">
                Builder,<br />
                <span className="italic-serif text-gradient">integrator,</span><br />
                operator.
              </h1>
              <p className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed text-muted-foreground">
                I'm <span className="text-foreground font-semibold">Erick Chege Gathemba</span> — a full-stack developer and IT professional from Nairobi. I ship products that survive real users, real networks, and real payment rails like <span className="scribble font-medium">M-Pesa</span>.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#journey" className="group inline-flex items-center gap-2 px-6 py-3.5 border-2 border-ink bg-ink text-background font-medium hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_var(--primary)] transition-all">
                  Walk the road <ArrowDown className="size-4 group-hover:translate-y-0.5 transition" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-ink bg-background hover:bg-secondary transition-all">
                  Send a postcard <Mail className="size-4" />
                </a>
              </div>
            </div>

            {/* Right column: stacked editorial cards */}
            <div className="lg:col-span-4 space-y-4 animate-fade-up">
              {/* Portrait moved to nav header */}


              <div className="card-brut p-5 rotate-[1.5deg]">

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Field Note Nº 01</div>
                    <div className="font-display italic-serif text-2xl mt-1">The Operator's Diary</div>
                  </div>
                  <Sun className="size-5" style={{ color: "var(--primary)" }} />
                </div>
                <p className="text-sm leading-relaxed">
                  "Two screens, one terminal. Coffee gone cold. Build green, deploy clean — go again."
                </p>
                <div className="mt-3 pt-3 border-t border-dashed border-ink/30 flex items-center gap-2 text-xs font-mono">
                  <Coffee className="size-3" /> 06:42 · Nairobi
                </div>
              </div>

              <div className="card-brut p-5 -rotate-[1.5deg]" style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Receipts</div>
                <div className="font-display text-5xl mt-2">500+</div>
                <div className="text-xs mt-1 opacity-90">users supported across enterprise IT</div>
                <div className="mt-3 h-px bg-current opacity-30" />
                <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                  <div><div className="font-display text-2xl leading-none">3</div><div className="opacity-80 mt-1">Platforms shipped</div></div>
                  <div><div className="font-display text-2xl leading-none">∞</div><div className="opacity-80 mt-1">Tickets closed</div></div>
                </div>
              </div>

              <div className="card-brut p-4 rotate-[0.5deg] font-mono text-[11px]">
                <div className="flex gap-1.5 mb-2">
                  <span className="size-2.5 rounded-full bg-destructive border border-ink" />
                  <span className="size-2.5 rounded-full border border-ink" style={{ background: "var(--sun)" }} />
                  <span className="size-2.5 rounded-full border border-ink" style={{ background: "var(--accent)" }} />
                </div>
                <p><span style={{ color: "var(--primary)" }}>$</span> whoami</p>
                <p className="text-muted-foreground">→ builder · debugger · integrator</p>
                <p className="mt-1"><span style={{ color: "var(--primary)" }}>$</span> ls stack/</p>
                <p className="text-muted-foreground">react ts node fastify mpesa cf<span className="animate-blink">▍</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* decorative star */}
        <Star className="hidden md:block absolute top-32 right-12 size-14 animate-float" style={{ color: "var(--sun)", fill: "var(--sun)" }} />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink/60">
          <ArrowDown className="size-5 animate-bounce" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 border-t-2 border-ink">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <div className="stamp inline-block mb-6">§ 01 · About</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Two worlds.<br />
              <span className="italic-serif text-primary">One operator.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="font-display italic-serif text-3xl md:text-4xl leading-tight">
              "I live in the seam between IT operations and software engineering — and that seam is where the most interesting work happens."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By day I keep enterprise environments quiet — Microsoft 365, networks, endpoints, the lot. By night I ship full-stack products with React, TypeScript and Node. That dual lens means I build things that don't just look good in demo. They survive contact with real users.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { k: "500+", v: "Users supported" },
                { k: "20–30", v: "Tickets / week" },
                { k: "3", v: "Production platforms" },
              ].map((s) => (
                <div key={s.k} className="card-brut p-5">
                  <div className="font-display text-4xl text-primary">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 border-t-2 border-ink" style={{ background: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="stamp inline-block mb-4">§ 02 · Stack</div>
              <h2 className="font-display text-5xl md:text-6xl">Tools of the <span className="italic-serif text-primary">trade.</span></h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">Pinned to the workshop wall. Pick one up — they all have stories.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="card-brut p-5 flex flex-col items-center justify-center gap-3 aspect-square"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.6}deg)` }}
                >
                  <Icon className="size-7" style={{ color: i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--accent)" : "var(--ink)" }} />
                  <span className="text-xs font-mono uppercase tracking-wider text-center">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY / ROAD */}
      <section id="journey" className="py-32 px-6 border-t-2 border-ink relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="stamp inline-block mb-4">§ 03 · The Road</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Projects along the<br />
              <span className="italic-serif text-gradient">scenic route.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Each pin is a deployed product. Follow the dashed line south — mind the potholes.
            </p>
          </div>

          {/* ROAD */}
          <div className="relative">
            <svg
              className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[280px] md:w-[420px] pointer-events-none"
              viewBox="0 0 400 1400"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* shadow */}
              <path
                d="M205 5 C 85 205, 325 385, 205 565 S 85 885, 205 1085 S 325 1285, 205 1405"
                stroke="oklch(0.20 0.025 30 / 0.15)"
                strokeWidth="64"
                strokeLinecap="round"
                fill="none"
              />
              {/* asphalt — soft warm grey to fit palette */}
              <path
                d="M200 0 C 80 200, 320 380, 200 560 S 80 880, 200 1080 S 320 1280, 200 1400"
                stroke="oklch(0.32 0.02 40)"
                strokeWidth="62"
                strokeLinecap="round"
                fill="none"
              />
              {/* edge highlight */}
              <path
                d="M200 0 C 80 200, 320 380, 200 560 S 80 880, 200 1080 S 320 1280, 200 1400"
                stroke="oklch(0.45 0.03 40)"
                strokeWidth="60"
                strokeLinecap="round"
                fill="none"
              />
              {/* dashed center line — warm sun */}
              <path
                d="M200 0 C 80 200, 320 380, 200 560 S 80 880, 200 1080 S 320 1280, 200 1400"
                stroke="oklch(0.82 0.15 75)"
                strokeWidth="3"
                strokeDasharray="16 22"
                strokeLinecap="round"
                fill="none"
                className="road-dash"
              />
            </svg>

            {/* Mile markers along the side */}
            <div className="absolute -left-2 top-10 hidden lg:block text-[10px] font-mono uppercase tracking-widest text-muted-foreground rotate-[-90deg] origin-left">
              KM 000 — start
            </div>

            <div className="relative space-y-32 md:space-y-44">
              {projects.map((p, i) => {
                const Icon = p.icon;
                const left = i % 2 === 0;
                return (
                  <div key={p.title} className="relative z-0 grid md:grid-cols-2 gap-6 items-center has-[.z-40]:z-30">
                    {/* Card */}
                    <div className={`${left ? "md:order-1 md:pr-24 md:text-right" : "md:order-2 md:pl-24"}`}>
                      <ProjectCard p={p} left={left} />
                    </div>

                    {/* spacer for the other column */}
                    <div className={left ? "md:order-2" : "md:order-1"} />


                    {/* Pin on the road */}
                    <div className="flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                        <div
                          className="relative size-20 md:size-24 rounded-full border-[3px] border-ink flex items-center justify-center"
                          style={{ background: p.accent, boxShadow: "4px 4px 0 0 var(--ink)" }}
                        >
                          <Icon className="size-9 md:size-10 text-background" style={{ color: "var(--background)" }} />
                        </div>
                        {/* pin stem */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-1 h-4 bg-ink" />
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 size-2 rounded-full bg-ink" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Finish */}
              <div className="relative flex justify-center pt-10">
                <div className="card-brut p-8 text-center max-w-sm" style={{ background: "var(--sun)" }}>
                  <Sparkles className="size-7 mx-auto mb-3" />
                  <p className="text-[10px] uppercase tracking-[0.25em] font-mono">Next Stop</p>
                  <p className="font-display text-3xl mt-2">Your project.</p>
                  <a href="#contact" className="inline-flex items-center gap-1 mt-4 font-medium border-b-2 border-ink hover:gap-2 transition-all">
                    Plot the route <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 border-t-2 border-ink" style={{ background: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="stamp inline-block mb-4">§ 04 · Experience</div>
          <h2 className="font-display text-5xl md:text-6xl mb-12">Where I've <span className="italic-serif text-primary">operated.</span></h2>
          <div className="space-y-5">
            {experience.map((e, i) => (
              <div key={e.role} className="card-brut grid md:grid-cols-12 gap-6 p-6 md:p-8" style={{ transform: `rotate(${i % 2 === 0 ? -0.3 : 0.3}deg)` }}>
                <div className="md:col-span-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{e.date}</div>
                  <h3 className="font-display text-2xl leading-tight">{e.role}</h3>
                  <p className="text-primary mt-1 font-medium">{e.org}</p>
                </div>
                <ul className="md:col-span-8 space-y-2.5 text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="text-primary mt-1.5 font-bold">✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="card-brut p-6">
              <GraduationCap className="size-7 text-primary mb-3" />
              <h4 className="font-display text-2xl">BSc Information Technology</h4>
              <p className="text-sm text-muted-foreground mt-1">Machakos University · 2019 – 2025</p>
              <div className="mt-4 pt-4 border-t border-dashed border-ink/30">
                <p className="text-sm text-muted-foreground">KCSE · Naivasha High School · 2014 – 2018</p>
              </div>
            </div>
            <div className="card-brut p-6" style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}>
              <Award className="size-7 mb-3" />
              <h4 className="font-display text-2xl">Intro to Cyber Security</h4>
              <p className="text-sm opacity-90 mt-1">Coursera Certification</p>
              <div className="mt-4 pt-4 border-t border-dashed border-current opacity-40" />
              <p className="text-sm opacity-90">Languages: English · Swahili (Professional)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 border-t-2 border-ink relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="stamp inline-block mb-6">§ 05 · Contact</div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            Let's <span className="italic-serif text-gradient">build</span><br />something good.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            A product to ship, an integration to wire, an IT environment to tame — pick one. I'll bring the coffee.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {[
              { href: "mailto:erickchegegathemba@gmail.com", icon: Mail, label: "Email", value: "erickchegegathemba@gmail.com", bg: "var(--primary)", fg: "var(--primary-foreground)" },
              { href: "tel:+254114090740", icon: Phone, label: "Phone", value: "+254 114 090 740", bg: "var(--card)", fg: "var(--ink)" },
              { href: "https://github.com/ErickCoder254ke", icon: Github, label: "GitHub", value: "ErickCoder254ke", bg: "var(--card)", fg: "var(--ink)" },
              { href: null, icon: MapPin, label: "Based in", value: "Nairobi, Kenya", bg: "var(--accent)", fg: "var(--accent-foreground)" },
            ].map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div className="card-brut p-5 flex items-center gap-4 group" style={{ background: c.bg, color: c.fg, transform: `rotate(${(i % 2 === 0 ? -0.6 : 0.6)}deg)` }}>
                  <div className="size-12 rounded-full border-2 border-current flex items-center justify-center shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">{c.label}</div>
                    <div className="font-medium truncate">{c.value}</div>
                  </div>
                  {c.href && <ArrowUpRight className="size-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          {/* CONTACT FORM */}
          <ContactForm />

          {/* Signature */}
          <div className="mt-20 inline-block">
            <p className="font-display italic-serif text-4xl text-primary -rotate-3">— Erick.</p>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">signed, sealed, ready</div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink py-8 px-6 bg-ink text-background">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
          <p>© 2026 Erick Chege Gathemba</p>
          <p className="opacity-70">Set in Instrument Serif & Inter</p>
          <p>Made in Nairobi · Edition Nº 04</p>
        </div>
      </footer>

      <ErickBot />
    </main>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sending");
    const subject = encodeURIComponent(form.subject || `New message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:erickchegegathemba@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <div className="mt-16 max-w-3xl mx-auto text-left">
      <div className="card-brut p-6 md:p-10" style={{ background: "var(--card)" }}>
        <div className="flex items-end justify-between border-b-2 border-ink pb-3 mb-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Postcard · Field Form
            </div>
            <h3 className="font-display text-3xl md:text-4xl mt-1">
              Write me a <span className="italic-serif text-primary">note.</span>
            </h3>
          </div>
          <Send className="size-6 hidden sm:block" style={{ color: "var(--primary)" }} />
        </div>

        <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Your name</span>
            <input
              required maxLength={80} value={form.name} onChange={update("name")}
              className="mt-1 w-full bg-background border-2 border-ink px-3 py-2.5 font-medium outline-none focus:shadow-[3px_3px_0_0_var(--primary)] transition"
              placeholder="Jane Doe"
            />
          </label>
          <label className="block">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</span>
            <input
              required type="email" maxLength={120} value={form.email} onChange={update("email")}
              className="mt-1 w-full bg-background border-2 border-ink px-3 py-2.5 font-medium outline-none focus:shadow-[3px_3px_0_0_var(--primary)] transition"
              placeholder="you@studio.com"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Subject</span>
            <input
              maxLength={120} value={form.subject} onChange={update("subject")}
              className="mt-1 w-full bg-background border-2 border-ink px-3 py-2.5 font-medium outline-none focus:shadow-[3px_3px_0_0_var(--primary)] transition"
              placeholder="A small project, a big idea…"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea
              required maxLength={2000} rows={5} value={form.message} onChange={update("message")}
              className="mt-1 w-full bg-background border-2 border-ink px-3 py-2.5 font-medium outline-none focus:shadow-[3px_3px_0_0_var(--primary)] transition resize-y"
              placeholder="Tell me what you're building…"
            />
          </label>
          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              ↳ Opens your email client · replies within 24h
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink bg-primary text-primary-foreground font-medium hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_var(--ink)] transition-all disabled:opacity-60"
            >
              {status === "sent" ? "Sent ✓" : status === "sending" ? "Sending…" : (<>Send postcard <Send className="size-4" /></>)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ProjectCard({ p, left }: { p: Project; left: boolean }) {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isDownload = p.link?.kind === "download";
  const LinkIcon = isDownload ? Download : ExternalLink;
  const hasDetailPanel = showcaseOpen || insightsOpen;

  useEffect(() => {
    if (!hasDetailPanel || !cardRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowcaseOpen(false);
          setInsightsOpen(false);
        }
      },
      {
        threshold: 0.55,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasDetailPanel]);

  return (
    <div
      ref={cardRef}
      className={`relative card-brut p-6 md:p-8 inline-block text-left max-w-md align-top overflow-visible ${
        hasDetailPanel ? "z-40" : "z-10"
      }`}
      style={{ transform: `rotate(${left ? -0.8 : 0.8}deg)` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-5xl text-primary leading-none">{p.n}</span>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Milestone<br />- {p.year} -
        </div>
      </div>
      <h3 className="font-display text-3xl md:text-4xl leading-tight mb-1">{p.title}</h3>
      <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--accent)" }}>{p.tag}</p>

      <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{p.blurb}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.stack.map((s) => (
          <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-ink bg-background">
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {p.link && (
          <a
            href={p.link.href}
            target={p.link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ink bg-ink text-background text-xs font-mono uppercase tracking-wider hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_var(--primary)] transition-all"
          >
            {p.link.label} <LinkIcon className="size-3.5" />
          </a>
        )}
        {((p.screens && p.screens.length > 0) || (p.laptopScreens && p.laptopScreens.length > 0)) && (
          <button
            type="button"
            onClick={() => {
              setShowcaseOpen((o) => {
                const next = !o;
                if (next) setInsightsOpen(false);
                return next;
              });
            }}
            aria-expanded={showcaseOpen}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ink bg-background text-xs font-mono uppercase tracking-wider hover:bg-secondary transition"
          >
            {showcaseOpen ? "Hide showcase" : "Showcase"}
            <ChevronDown className={`size-3.5 transition-transform ${showcaseOpen ? "rotate-180" : ""}`} />
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setInsightsOpen((o) => {
              const next = !o;
              if (next) setShowcaseOpen(false);
              return next;
            });
          }}
          aria-expanded={insightsOpen}
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ink bg-background text-xs font-mono uppercase tracking-wider hover:bg-secondary transition"
        >
          {insightsOpen ? "Hide insights" : "Insights"}
          <ChevronDown className={`size-3.5 transition-transform ${insightsOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {hasDetailPanel && (
        <div
          className={`relative left-1/2 w-[min(92vw,24rem)] -translate-x-1/2 mt-5 pt-5 border-t-2 border-dashed border-ink/40 animate-fade-up md:left-auto md:w-[min(28rem,calc(100vw-7rem))] md:translate-x-0 md:mt-0 md:pt-0 md:border-t-0 md:absolute md:top-2 md:z-20 md:-translate-x-6 ${
            left ? "md:left-[calc(100%+4rem)]" : "md:right-[calc(100%+4rem)]"
          }`}
        >
          <div
            className={`relative card-brut p-4 md:p-5 isolate ${left ? "md:rotate-[0.6deg]" : "md:-rotate-[0.6deg]"}`}
            style={{
              background: "color-mix(in oklab, var(--card) 92%, white)",
              boxShadow: "0 18px 40px -14px oklch(0.20 0.025 30 / 0.38), 8px 8px 0 0 var(--ink)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,oklch(1_0_0_/_0.24),transparent_55%)]" />
            {showcaseOpen && (
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  Project Showcase
                </div>
                <div className="space-y-6 rounded-[1.5rem] bg-background/55 p-1">
                  {p.screens && p.screens.length > 0 && (
                    <div className="relative flex justify-center">
                      <PhoneShowcase images={p.screens} accent={p.accent} alt={p.title} />
                    </div>
                  )}
                  {p.laptopScreens && p.laptopScreens.length > 0 && (
                    <div className="relative flex justify-center">
                      <LaptopShowcase images={p.laptopScreens} accent={p.accent} alt={p.title} />
                    </div>
                  )}
                </div>
              </div>
            )}

            {insightsOpen && (
              <div className={showcaseOpen ? "mt-5 pt-5 border-t-2 border-dashed border-ink/40 space-y-4" : "space-y-4"}>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  Project Insights
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary mb-1">Problem solved</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.insights.problem}</p>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary mb-1">Tools & approach</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.insights.tools}</p>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-primary mb-1">Key challenge</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.insights.challenge}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
