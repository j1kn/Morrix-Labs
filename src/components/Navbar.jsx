import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '24px 0',
                transition: 'all 0.3s ease-out',
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.7)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Logo */}
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none'
                    }}>
                        <div style={{
                            height: '24px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="/logo.png"
                                alt="Morrix Labs"
                                style={{
                                    height: '80px', // Larger height to allow cropping
                                    width: 'auto',
                                    display: 'block',
                                    marginTop: '2px' // Small adjustment to center the wordmark
                                }}
                            />
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div style={{ display: 'none' }} className="desktop-nav">
                        <div style={{
                            display: 'flex',
                            gap: '32px',
                            alignItems: 'center',
                            fontSize: '14px',
                            color: 'var(--text-secondary)'
                        }}>
                            <a href="#work" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Work</a>
                            <a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Services</a>
                            <a href="#stack" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Stack</a>
                            <a href="#about" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>About</a>

                            <a href="#cta" className="btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }}>
                                Start a Project
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ display: 'block', color: 'var(--text-primary)' }}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'var(--bg-color)',
                    zIndex: 90,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '32px',
                    fontSize: '24px',
                    fontFamily: 'var(--font-heading)'
                }}>
                    <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#stack" onClick={() => setMobileMenuOpen(false)}>Stack</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#cta" onClick={() => setMobileMenuOpen(false)} style={{
                        marginTop: '24px',
                        padding: '12px 24px',
                        border: '1px solid var(--border-color)',
                        fontSize: '16px',
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase'
                    }}>Start a Project</a>
                </div>
            )}
            <style>{`
        @media (max-width: 767px) {
          nav {
            padding: 16px 0 !important;
          }
        }
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </>
    );
}
