'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';

const transitionVariants = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1.5 } },
    },
};

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const MorrixLogo = ({ className }: { className?: string }) => (
    <span className={cn('font-bold text-lg tracking-tight bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7] bg-clip-text text-transparent', className)}>
        Morrix Labs
    </span>
);

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-4 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <MorrixLogo />
                            </Link>
                            <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="m-auto size-6 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 duration-200">
                                    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-6 xl:gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-4 lg:mb-0 hidden w-full flex-wrap items-center justify-end space-y-4 rounded-3xl border p-4 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150" onClick={() => setMenuState(false)}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-2 lg:gap-3">
                                <Link href="https://github.com/morrixlabs" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </Link>
                                <Link href="https://t.me/morrixlabs" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                    </svg>
                                </Link>
                                <Link href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-black dark:bg-white text-white dark:text-black h-8 px-4 text-xs sm:h-9 sm:px-5">
                                    <span>Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const techLogos = [
    { name: 'React', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { name: 'Next.js', svg: 'M12 2L2 19.5h20L12 2z' },
    { name: 'TypeScript', svg: 'M3 3h18v18H3V3zm16.5 16.5v-9l-7.5 9-7.5-9v9h15z' },
    { name: 'Node.js', svg: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'Tailwind', svg: 'M12 2L2 12l10 10 10-10L12 2z' },
    { name: 'Python', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
];

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div aria-hidden className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36 pb-12 md:pb-20">
                        <AnimatedGroup className="absolute inset-0 -z-20" variants={{ container: { visible: { transition: { delayChildren: 1 } } }, item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 2 } } } }}>
                            <img src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120" alt="background" className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block" width="3276" height="4095" />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-4 sm:px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link href="#services" className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-xs sm:text-sm">Now offering AI-powered web solutions</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                                                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <h1 className="mt-6 sm:mt-8 max-w-4xl mx-auto text-balance text-4xl sm:text-5xl md:text-6xl lg:mt-16 xl:text-[4rem]">
                                        We Build Digital Experiences That Move Businesses Forward
                                    </h1>
                                    <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg px-4">
                                        Morrix Labs crafts high-performance web apps, stunning websites, and bold brand identities — built to scale, designed to convert.
                                    </p>
                                </AnimatedGroup>
                                <AnimatedGroup variants={{ container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } }, ...transitionVariants }} className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 md:flex-row">
                                    <Link href="#contact" className="inline-flex items-center justify-center rounded-xl border border-transparent bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto">
                                        <span className="text-nowrap">Start Your Project</span>
                                    </Link>
                                    <Link href="#process" className="inline-flex items-center justify-center rounded-xl border border-border bg-transparent hover:bg-muted text-foreground text-sm sm:text-base font-medium h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto">
                                        <span className="text-nowrap">Our Process</span>
                                    </Link>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-16">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-center text-xs sm:text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">Technologies We Work With</p>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
                            {techLogos.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-muted/50 border border-dashed flex items-center justify-center group-hover:bg-muted transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                                            <path d={tech.svg} />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
