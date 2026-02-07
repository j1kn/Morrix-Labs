import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl text-secondary mb-8">Page not found</p>
          <p className="text-secondary mb-12 max-w-md mx-auto">
            Sorry, the page you are looking for does not exist. Please check the URL or return to the home page.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
