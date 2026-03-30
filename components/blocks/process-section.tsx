'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, Circle, Clock, ChevronDown } from 'lucide-react';

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
            { id: "1.1", title: "Stakeholder kick-off call", description: "A focused session to align on vision, timelines, and success metrics.", status: "completed", priority: "high" },
            { id: "1.2", title: "Competitor & market research", description: "We analyse your competitive landscape to find opportunities and positioning gaps.", status: "completed", priority: "medium" },
            { id: "1.3", title: "Project scope & proposal", description: "A clear written scope, timeline, and pricing document sent for your approval.", status: "completed", priority: "medium" },
        ],
    },
    {
        id: "2",
        title: "Design & Prototyping",
        description: "We design your product in high fidelity before any development begins — so you see exactly what you're getting.",
        status: "in-progress",
        priority: "high",
        subtasks: [
            { id: "2.1", title: "Wireframes & user flows", description: "Low-fidelity blueprints that map out every screen and interaction.", status: "completed", priority: "high" },
            { id: "2.2", title: "High-fidelity UI design", description: "Pixel-perfect mockups with your brand colours, fonts, and components.", status: "in-progress", priority: "medium" },
            { id: "2.3", title: "Interactive prototype & feedback", description: "A clickable prototype shared for your review and sign-off.", status: "pending", priority: "high" },
        ],
    },
    {
        id: "3",
        title: "Development",
        description: "Our engineers build your product with clean, tested, production-ready code.",
        status: "pending",
        priority: "high",
        subtasks: [
            { id: "3.1", title: "Frontend development", description: "Responsive, performant UI built with Next.js, React, and Tailwind CSS.", status: "pending", priority: "high" },
            { id: "3.2", title: "Backend & integrations", description: "APIs, databases, authentication, and third-party integrations configured.", status: "pending", priority: "high" },
            { id: "3.3", title: "QA & testing", description: "Cross-browser, cross-device testing plus automated checks before any release.", status: "pending", priority: "medium" },
        ],
    },
    {
        id: "4",
        title: "Launch",
        description: "We handle the full deployment and make sure everything goes live without a hitch.",
        status: "pending",
        priority: "high",
        subtasks: [
            { id: "4.1", title: "Staging environment review", description: "Final review on a staging URL before going public.", status: "pending", priority: "high" },
            { id: "4.2", title: "Production deployment", description: "Zero-downtime deployment to your custom domain with SSL and CDN.", status: "pending", priority: "high" },
            { id: "4.3", title: "Handoff & training", description: "Video walkthrough and documentation so your team can manage the product confidently.", status: "pending", priority: "medium" },
        ],
    },
    {
        id: "5",
        title: "Growth & Support",
        description: "We don't disappear after launch. Ongoing support, updates, and growth work keep you ahead.",
        status: "pending",
        priority: "medium",
        subtasks: [
            { id: "5.1", title: "Performance monitoring", description: "Uptime, Core Web Vitals, and error tracking configured from day one.", status: "pending", priority: "medium" },
            { id: "5.2", title: "SEO & analytics setup", description: "Google Search Console, GA4, and structured data configured for organic growth.", status: "pending", priority: "medium" },
            { id: "5.3", title: "Retainer & iteration", description: "Monthly support retainers available for ongoing feature development and optimisation.", status: "pending", priority: "low" },
        ],
    },
];

export default function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedTask, setExpandedTask] = useState<string | null>(null);

    const toggleTask = (taskId: string) => {
        setExpandedTask(expandedTask === taskId ? null : taskId);
    };

    return (
        <section id="process" className="py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="w-full max-w-3xl mx-auto text-center mb-8 md:mb-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">How We Work</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
                        From Brief to Launch
                    </h2>
                    <p className="text-muted-foreground mt-4 text-sm sm:text-base text-center">
                        Tap each phase to explore our step-by-step workflow.
                    </p>
                </div>
                <div ref={ref} className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                    {tasks.map((task, taskIndex) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: taskIndex * 0.1 }}
                            className="relative"
                        >
                            <button
                                onClick={() => toggleTask(task.id)}
                                className="w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-2xl border bg-card text-left hover:bg-muted/30 transition-colors cursor-pointer"
                            >
                                <div className={cn(
                                    "flex size-8 sm:size-9 md:size-10 items-center justify-center rounded-full border-2 flex-shrink-0 mt-0.5",
                                    task.status === "completed" && "border-emerald-500 bg-emerald-500/10",
                                    task.status === "in-progress" && "border-amber-500 bg-amber-500/10",
                                    task.status === "pending" && "border-muted bg-muted/50"
                                )}>
                                    {getStatusIcon(task.status)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <h3 className="font-semibold text-sm sm:text-base md:text-lg">{task.title}</h3>
                                        <span className={cn("text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium", getPriorityColor(task.priority))}>
                                            {task.priority}
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                                </div>
                                <motion.div
                                    animate={{ rotate: expandedTask === task.id ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 mt-1 sm:mt-2"
                                >
                                    <ChevronDown className="size-4 sm:size-5 text-muted-foreground" />
                                </motion.div>
                            </button>
                            
                            <motion.div
                                initial={false}
                                animate={{
                                    height: expandedTask === task.id ? "auto" : 0,
                                    opacity: expandedTask === task.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-3 sm:pt-4 pb-2 px-1 sm:px-2">
                                    <div className="space-y-2 sm:space-y-3">
                                        {task.subtasks.map((subtask, subtaskIndex) => (
                                            <motion.div
                                                key={subtask.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: subtaskIndex * 0.05 }}
                                                className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                                            >
                                                <div className="flex size-5 sm:size-6 items-center justify-center rounded-md bg-background shadow-sm flex-shrink-0 mt-0.5">
                                                    {getStatusIcon(subtask.status)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                                        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">{subtask.id}</span>
                                                        <h4 className="text-xs sm:text-sm md:text-base font-medium">{subtask.title}</h4>
                                                    </div>
                                                    <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">{subtask.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
