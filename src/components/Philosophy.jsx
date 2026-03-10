import React from 'react';

export default function Philosophy() {
    return (
        <section id="about" className="container reveal" style={{ padding: '160px 24px' }}>
            <div className="section-label" style={{ textAlign: 'left', marginBottom: '40px' }}>— Our Philosophy —</div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 1fr)',
                gap: '64px',
                alignItems: 'start'
            }} className="philosophy-grid">

                <div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 56px)',
                        lineHeight: 1.1,
                        fontWeight: 400,
                        marginBottom: '32px'
                    }}>
                        Premium is a Standard,<br />Not a Tier.
                    </h2>
                    <p style={{
                        fontSize: '24px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        fontWeight: 400
                    }}>
                        We believe that every pixel matters. In an ocean of templates, we craft bespoke digital experiences engineered for performance and aesthetic perfection.
                    </p>
                </div>

                <div style={{ paddingTop: '12px' }}>
                    <p style={{
                        fontSize: '16px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '24px'
                    }}>
                        Morrix Labs was founded on a simple premise: digital products should look
                        extraordinary and perform flawlessly. Our mission is to elevate companies
                        by building websites, apps, and brands that command attention.
                    </p>
                    <p style={{
                        fontSize: '16px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8
                    }}>
                        We work with ambitious founders who refuse to settle. No shortcuts.
                        No generic solutions. Just pure digital craft.
                    </p>

                    <div style={{
                        marginTop: '48px',
                        height: '240px',
                        background: 'linear-gradient(180deg, #111 0%, #050505 100%)',
                        border: '1px solid #1e1e1e',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#333',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        <span style={{ fontStyle: 'italic' }}>Morrix Labs Studio</span>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
}
