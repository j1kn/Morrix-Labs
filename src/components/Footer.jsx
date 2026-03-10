import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid #222',
            padding: '120px 24px 40px 24px',
            backgroundColor: '#0a0a0a'
        }}>
            <div className="container">
                {/* Top Wordmark */}
                <h1 style={{
                    fontSize: 'clamp(64px, 12vw, 180px)',
                    lineHeight: '0.8',
                    letterSpacing: '-0.04em',
                    color: '#fff',
                    marginBottom: '80px',
                    textAlign: 'center'
                }}>
                    Morrix Labs
                </h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    paddingBottom: '80px',
                    borderBottom: '1px solid #1e1e1e'
                }}>
                    {/* Left */}
                    <div>
                        <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '8px' }}>Studio</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                            Digital Craft. <br />Uncompromised.
                        </p>
                    </div>

                    {/* Middle */}
                    <div>
                        <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                            <li><a href="#work" className="footer-link">Work</a></li>
                            <li><a href="#services" className="footer-link">Services</a></li>
                            <li><a href="#about" className="footer-link">Philosophy</a></li>
                            <li><a href="#cta" className="footer-link">Start a Project</a></li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div>
                        <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>Connect</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                            <li><a href="#" className="footer-link">Twitter / X</a></li>
                            <li><a href="#" className="footer-link">LinkedIn</a></li>
                            <li><a href="#" className="footer-link">Dribbble</a></li>
                            <li><a href="#" className="footer-link">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '24px',
                    paddingTop: '32px',
                    fontSize: '13px',
                    color: 'var(--text-secondary)'
                }}>
                    <div>© 2025 Morrix Labs. All rights reserved.</div>
                    <div>
                        <a href="mailto:hello@morrixlabs.com" className="footer-link">hello@morrixlabs.com</a>
                    </div>
                </div>
            </div>

            <style>{`
        .footer-link {
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #fff;
        }
      `}</style>
        </footer>
    );
}
