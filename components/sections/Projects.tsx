import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PROJECTS } from '@/lib/constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 border-t border-subtle">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected work</h2>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <Card className="cursor-pointer hover:bg-secondary/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-secondary">{project.description}</p>
                  </div>
                  <div className="text-secondary group-hover:text-primary transition">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6v12h12v-6m0 0l4.586-4.586a2 2 0 112.828 2.828L19.414 14"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
