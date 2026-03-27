'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check, Circle, Clock, AlertCircle, GitBranch, FileText, Search, Monitor, Database, CreditCard, Paintbrush, Video, Code, Terminal, Cloud, Globe, Bug, BarChart2 } from 'lucide-react';

const toolIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'discovery-call': Circle,
    'notion': FileText,
    'research': Search,
    'browser': Monitor,
    'file-system': Database,
    'figma': Paintbrush,
    'brand-kit': Paintbrush,
    'loom': Video,
    'github': GitBranch,
    'vscode': Code,
    'vercel': Cloud,
    'supabase': Database,
    'stripe': CreditCard,
    'api-client': Terminal,
    'playwright': Bug,
    'jest': Bug,
    'browserstack': Globe,
    'cloudflare': Cloud,
    'github-actions': GitBranch,
    'sentry': AlertCircle,
    'vercel-analytics': BarChart2,
    'google-search-console': Search,
    'ga4': BarChart2,
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'completed':
            return <Check className="size-4 text-emerald-500" />;
        case 'in-progress':
            return <Clock className="size-4 text-amber-500" />;
        default:
            return <Circle className="size-4 text-muted-foreground" />;
    }
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'high':
            return 'text-red-500 bg-red-500/10';
        case 'medium':
            return 'text-amber-500 bg-amber-500/10';
        default:
            return 'text-muted-foreground bg-muted';
    }
};

const tasks = [
    {
        id: "1",
        title: "Discovery & Strategy",
        description: "We dig deep to understand your business, audience, and goals before writing a single line of code.",
        status: "completed",
        priority: "high",
        subtasks: [
            { id: "1.1", title: "Stakeholder kick-off call", description: "A focused session to align on vision, timelines, and success metrics.", status: "completed", priority: "high", tools: ["discovery-call", "notion"] },
            { id: "1.2", title: "Competitor & market research", description: "We analyse your competitive landscape to find opportunities and positioning gaps.", status: "completed", priority: "medium", tools: ["research", "browser"] },
            { id: "1.3", title: "Project scope & proposal", description: "A clear written scope, timeline, and pricing document sent for your approval.", status: "completed", priority: "medium", tools: ["notion", "file-system"] },
        ],
    },
    {
        id: "2",
        title: "Design & Prototyping",
        description: "We design your product in high fidelity before any development begins — so you see exactly what you're getting.",
        status: "in-progress",
        priority: "high",
        subtasks: [
            { id: "2.1", title: "Wireframes & user flows", description: "Low-fidelity blueprints that map out every screen and interaction.", status: "completed", priority: "high", tools: ["figma"] },
            { id: "2.2", title: "High-fidelity UI design", description: "Pixel-perfect mockups with your brand colours, fonts, and components.", status: "in-progress", priority: "medium", tools: ["figma", "brand-kit"] },
            { id: "2.3", title: "Interactive prototype & feedback", description: "A clickable prototype shared for your review and sign-off.", status: "pending", priority: "high", tools: ["figma", "loom"] },
        ],
    },
    {
        id: "3",
        title: "Development",
        description: "Our engineers build your product with clean, tested, production-ready code.",
        status: "pending",
        priority: "high",
        subtasks: [
            { id: "3.1", title: "Frontend development", description: "Responsive, performant UI built with Next.js, React, and Tailwind CSS.", status: "pending", priority: "high", tools: ["github", "vscode", "vercel"] },
            { id: "3.2", title: "Backend & integrations", description: "APIs, databases, authentication, and third-party integrations configured.", status: "pending", priority: "high", tools: ["supabase", "stripe", "api-client"] },
            { id: "3.3", title: "QA & testing", description: "Cross-browser, cross-device testing plus automated checks before any release.", status: "pending", priority: "medium", tools: ["playwright", "jest", "browserstack"] },
        ],
    },
    {
        id: "4",
        title: "Launch",
        description: "We handle the full deployment and make sure everything goes live without a hitch.",
        status: "pending",
        priority: "high",
        subtasks: [
            { id: "4.1", title: "Staging environment review", description: "Final review on a staging URL before going public.", status: "pending", priority: "high", tools: ["vercel", "browser"] },
            { id: "4.2", title: "Production deployment", description: "Zero-downtime deployment to your custom domain with SSL and CDN.", status: "pending", priority: "high", tools: ["vercel", "cloudflare", "github-actions"] },
            { id: "4.3", title: "Handoff & training", description: "Video walkthrough and documentation so your team can manage the product confidently.", status: "pending", priority: "medium", tools: ["loom", "notion"] },
        ],
    },
    {
        id: "5",
        title: "Growth & Support",
        description: "We don't disappear after launch. Ongoing support, updates, and growth work keep you ahead.",
        status: "pending",
        priority: "medium",
        subtasks: [
            { id: "5.1", title: "Performance monitoring", description: "Uptime, Core Web Vitals, and error tracking configured from day one.", status: "pending", priority: "medium", tools: ["sentry", "vercel-analytics"] },
            { id: "5.2", title: "SEO & analytics setup", description: "Google Search Console, GA4, and structured data configured for organic growth.", status: "pending", priority: "medium", tools: ["google-search-console", "ga4"] },
            { id: "5.3", title: "Retainer & iteration", description: "Monthly support retainers available for ongoing feature development and optimisation.", status: "pending", priority: "low", tools: ["notion", "github"] },
        ],
    },
];

export default function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="process" className="py-16 md:py-32 px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">How We Work</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                    From Brief to Launch — Our Proven Process
                </h2>
                <p className="text-muted-foreground mt-4 text-base">
                    A transparent, step-by-step workflow so you always know what&apos;s happening and what&apos;s next.
                </p>
            </div>
            <div ref={ref} className="w-full max-w-3xl mx-auto space-y-4">
                {tasks.map((task, taskIndex) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: taskIndex * 0.1 }}
                        className="relative"
                    >
                        <div className="flex items-start gap-4 p-6 rounded-2xl border bg-card">
                            <div className="flex flex-col items-center gap-2">
                                <div className={cn(
                                    "flex size-10 items-center justify-center rounded-full border-2",
                                    task.status === "completed" && "border-emerald-500 bg-emerald-500/10",
                                    task.status === "in-progress" && "border-amber-500 bg-amber-500/10",
                                    task.status === "pending" && "border-muted bg-muted/50"
                                )}>
                                    {getStatusIcon(task.status)}
                                </div>
                                {taskIndex < tasks.length - 1 && <div className="h-full w-px bg-border" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-lg">{task.title}</h3>
                                    <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", getPriorityColor(task.priority))}>
                                        {task.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
                                <div className="space-y-3">
                                    {task.subtasks.map((subtask, subtaskIndex) => {
                                        const ToolIcon = toolIconMap[subtask.tools?.[0] || ''] || Circle;
                                        return (
                                            <motion.div
                                                key={subtask.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                transition={{ duration: 0.3, delay: taskIndex * 0.1 + subtaskIndex * 0.05 }}
                                                className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                                            >
                                                <div className="flex size-6 items-center justify-center rounded-md bg-background shadow-sm">
                                                    {getStatusIcon(subtask.status)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className="text-xs font-mono text-muted-foreground">{subtask.id}</span>
                                                        <h4 className="text-sm font-medium">{subtask.title}</h4>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground">{subtask.description}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {subtask.tools?.map((tool) => {
                                                        const TIcon = toolIconMap[tool] || Circle;
                                                        return (
                                                            <div key={tool} className="flex size-6 items-center justify-center rounded-md bg-background shadow-sm">
                                                                <TIcon className="size-3.5 text-muted-foreground" />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
