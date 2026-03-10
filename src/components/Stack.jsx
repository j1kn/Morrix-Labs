import React from 'react';

const techBrands = [
    "Next.js", "React", "Figma", "TypeScript", "Tailwind",
    "Framer", "Webflow", "Node.js", "Prisma", "Vercel", "Supabase"
];

const allTech = [...techBrands, ...techBrands, ...techBrands]; // triple for infinite scroll

export default function Stack() {
    return (
        <section id="stack" className="reveal" style={{ padding: '80px 0', borderTop: '1px solid #1E1E1E' }}>
            <div className="section-label">— Built With —</div>
            <h2 className="section-heading" style={{ marginBottom: '48px' }}>The Stack Behind the Craft</h2>

            <div style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                position: 'relative',
                display: 'flex',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div className="marquee">
                    {allTech.map((tech, i) => (
                        <div key={i} className="tech-item">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        .tech-item {
          padding: 0 40px;
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          transition: var(--transition);
          cursor: default;
        }

        .tech-item:hover {
          color: rgba(255, 255, 255, 1);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
      `}</style>
        </section>
    );
}
