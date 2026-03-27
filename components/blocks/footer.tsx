export default function Footer() {
    return (
        <footer className="border-t py-12 px-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Morrix Labs. All rights reserved.</p>
            <div className="mt-4 flex justify-center gap-6">
                <a href="https://github.com/j1kn/Morrix-Labs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                <a href="https://t.me/MorrixLabs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            </div>
        </footer>
    );
}
