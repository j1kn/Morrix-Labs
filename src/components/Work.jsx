import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "LC Labs",
        category: "Web App · Design",
        link: "https://lclabs.org",
        image: "/lclabs.jpg",
        gradient: "linear-gradient(135deg, #1f1f1f, #0a0a0a)"
    },
    {
        title: "Vishy",
        category: "E-commerce · Branding",
        link: "https://www.vishy.co.uk",
        image: "/vishy.jpg",
        gradient: "linear-gradient(135deg, #101010, #222222)"
    },
    {
        title: "HJM Transportation",
        category: "Corporate Site · SEO",
        link: "https://hjmtransportation.uk",
        image: "/hjm.jpg",
        gradient: "linear-gradient(135deg, #050505, #1a1a1a)"
    }
];

export default function Work() {
    return (
        <section id="work" className="container reveal">
            <div className="section-label">— Our Work —</div>
            <h2 className="section-heading">Projects That Speak</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '32px',
                marginBottom: '64px'
            }}>
                {projects.map((proj, i) => (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" key={i} className="work-card" style={{ cursor: 'pointer', display: 'block' }}>
                        {/* Image Layer */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            background: proj.image ? `url(${proj.image}) center/cover no-repeat` : proj.gradient,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: '24px',
                            border: '1px solid #1E1E1E'
                        }}>
                            {/* Dark gradient overlay to ensure text stands out if there was text inside but mostly for blending */}
                            <div className="image-overlay" style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                background: proj.image ? 'linear-gradient(to bottom, rgba(10,10,10,0.2), rgba(10,10,10,0.8))' : 'rgba(255,255,255,0.02)',
                                transition: 'transform 0.5s ease-out'
                            }}></div>
                            <div className="hover-line" style={{
                                position: 'absolute',
                                bottom: 0, left: 0, height: '2px', width: '0%',
                                backgroundColor: '#fff',
                                transition: 'width 0.4s ease-out'
                            }}></div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{proj.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{proj.category}</p>
                            </div>
                            <div className="view-link" style={{
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '14px',
                                transition: 'var(--transition)'
                            }}>
                                Visit <ArrowRight size={14} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="#" className="btn-ghost">
                    See All Projects <ArrowRight size={16} />
                </a>
            </div>

            <style>{`
        .work-card:hover .image-overlay {
          transform: scale(1.05);
        }
        .work-card:hover .hover-line {
          width: 100%;
        }
        .work-card:hover .view-link {
          color: #fff !important;
        }
      `}</style>
        </section>
    );
}
