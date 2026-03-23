import { Bot, Coins, Briefcase, MousePointerClick, Workflow, PenTool, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/ui/hero-section-dark";
import { AboutSection } from "@/components/sections/about";
import { BentoGrid } from "@/components/ui/bento-grid";
import { SkillGrid } from "@/components/ui/glowing-effect";
import { ContactSection } from "@/components/sections/contact";

const timeline = [
  {
    year: "2024",
    title: "Intern @ LC Labs",
    description: "Landing page, branding, marketing research, social media & automation tools",
  },
  {
    year: "2024",
    title: "Launched PrimePick",
    description: "Crypto raffle platform — 1,000+ users, smart contracts, wallet connect",
  },
  {
    year: "2024",
    title: "Built Agent X",
    description: "AI social media automation tool — content gen, scheduling, autopilot posting",
  },
  {
    year: "2023",
    title: "Started Business Management",
    description: "Coventry University — blending business thinking with technical execution",
  },
];

const stats = [
  { value: "1000+", label: "Users on PrimePick" },
  { value: "2+", label: "Live Products" },
  { value: "∞", label: "Passion for Building" },
];

const projectCards = [
  {
    name: "Agent X",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    icon: <Bot className="w-6 h-6" />,
    description: "AI-powered social media automation — connect all your platforms, generate text posts & images, schedule content, and run on full autopilot. Built solo. Available on GitHub.",
    features: ["AI content & image generation", "Multi-platform connect", "Scheduling & autopilot"],
    href: "https://github.com",
    cta: "View on GitHub",
    backgroundImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=60",
  },
  {
    name: "PrimePick",
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    icon: <Coins className="w-6 h-6" />,
    description: "Crypto raffle platform built from scratch — 1,000+ users, smart contract buying, and a buttery-smooth wallet connect experience. 100% solo build.",
    features: ["Smart contract integration", "Wallet connect", "1,000+ users"],
    href: "https://github.com",
    cta: "View on GitHub",
    backgroundImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=60",
  },
  {
    name: "LC Labs — Internship",
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Designed the landing page, led brand identity, ran marketing research, managed social media, and built internal automation tools — all in one internship.",
    features: ["Landing page & branding", "Marketing research", "Automation tools"],
    href: "#contact",
    cta: "Get in touch",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=60",
  },
];

const skillItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Bot className="w-6 h-6" />,
    title: "Claude Code",
    description: "AI-first development. I use Claude Code to architect, build, and ship entire products at speed.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Cursor",
    description: "My go-to AI code editor. Pair programming with AI at every step.",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Workflow className="w-6 h-6" />,
    title: "n8n",
    description: "Workflow automation powerhouse. I build no-code and low-code automations that save hours every week.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <PenTool className="w-6 h-6" />,
    title: "Figma + Stitch",
    description: "From wireframe to pixel-perfect design. I design before I code, always.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Zap className="w-6 h-6" />,
    title: "Antigravity & More",
    description: "Always exploring new tools — Antigravity, v0, Bolt and whatever ships next. The vibe coder stays current.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection timeline={timeline} stats={stats} />
        <BentoGrid cards={projectCards} />
        <SkillGrid gridItems={skillItems} />
        <ContactSection />
      </main>
      <footer className="py-8 text-center">
        <p className="text-sm text-zinc-400">
          Designed & built by Jaskaran Singh · Coventry, UK
        </p>
      </footer>
    </div>
  );
}
