export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-32 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Start Your Project</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
                Ready to build something great? Reach out on{" "}
                <a href="https://t.me/morrixlabs" target="_blank" rel="noopener noreferrer" className="underline">
                    Telegram
                </a>.
            </p>
        </section>
    );
}
