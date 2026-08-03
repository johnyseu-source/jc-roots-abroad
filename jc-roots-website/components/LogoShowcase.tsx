'use client';

import Image from 'next/image';

export default function LogoShowcase() {
  const logos = [
    { image: '/logo.jpg', label: 'Primary Logo', description: 'Clean and timeless' },
    { image: '/logo-circle.jpg', label: 'Circle Stamp', description: 'For packaging & branding' }
  ];

  return (
    <section style={{backgroundColor: '#234034', padding: '80px 40px', borderBottom: '3px solid #B68A5A'}}>
      <div className="max-w-6xl mx-auto">
        <h2 
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '48px',
            color: '#F8F6F1',
            textAlign: 'center',
            margin: 0,
            marginBottom: '60px'
          }}
        >
          Our Identity
        </h2>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '40px'}}>
          {logos.map((logo, i) => (
            <div key={i} style={{textAlign: 'center'}}>
              <div 
                style={{
                  backgroundColor: '#F8F6F1',
                  padding: '40px',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  minHeight: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{width: '200px', height: '200px', position: 'relative'}}>
                  <Image
                    src={logo.image}
                    alt={logo.label}
                    width={200}
                    height={200}
                    style={{objectFit: 'contain'}}
                  />
                </div>
              </div>
              <h3 style={{fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#F8F6F1', margin: '0 0 8px'}}>
                {logo.label}
              </h3>
              <p style={{color: '#DCC982', margin: 0, fontSize: '14px'}}>
                {logo.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(184, 138, 90, 0.3)'}}>
          <p style={{color: '#DCC982', fontSize: '16px', margin: 0}}>
            JC Roots Abroad — Est. 2026 | Handcrafted in Ireland | Crafted with Meaning
          </p>
        </div>
      </div>
    </section>
  );
}
