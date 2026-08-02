'use client';

export default function BrandStory() {
  return (
    <section style={{backgroundColor: '#234034', padding: '100px 40px', borderTop: '3px solid #B68A5A', borderBottom: '3px solid #B68A5A'}}>
      <div className="max-w-5xl mx-auto">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          {/* Text Content */}
          <div>
            <div style={{marginBottom: '32px'}}>
              <p style={{color: '#B68A5A', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px', margin: 0}}>
                Our Story
              </p>
              <h2 
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '42px',
                  color: '#F8F6F1',
                  margin: '12px 0 0',
                  fontWeight: 'bold'
                }}
              >
                Two Roots, One Journey
              </h2>
            </div>

            <p style={{color: '#DCC982', fontSize: '16px', lineHeight: '1.8', margin: '0 0 20px'}}>
              I'm Johnys. I came to Ireland with a dream to build something meaningful. My partner John and I share a vision: to create gifts that matter, pieces that carry stories, and keepsakes that last.
            </p>

            <p style={{color: '#DCC982', fontSize: '16px', lineHeight: '1.8', margin: '0 0 20px'}}>
              Every laser-engraved piece we create is a reflection of our commitment to craftsmanship. No mass production. No shortcuts. Just intentional design and careful attention to detail.
            </p>

            <p style={{color: '#DCC982', fontSize: '16px', lineHeight: '1.8', margin: 0}}>
              JC Roots Abroad isn't just a business—it's a love letter to connection, to the people who build roots far from home, and to the meaning we create together.
            </p>

            <div style={{marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(184, 138, 90, 0.3)'}}>
              <p style={{color: '#B68A5A', fontSize: '14px', fontStyle: 'italic', margin: 0}}>
                — Johnys & John Crawford-Cavalcante
              </p>
            </div>
          </div>

          {/* Visual */}
          <div 
            style={{
              background: 'linear-gradient(135deg, rgba(184, 138, 90, 0.2) 0%, rgba(220, 201, 130, 0.1) 100%)',
              borderRadius: '12px',
              padding: '60px 40px',
              textAlign: 'center',
              border: '2px solid #B68A5A'
            }}
          >
            <p style={{fontSize: '120px', margin: 0}}>🌳</p>
            <h3 style={{fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#B68A5A', margin: '20px 0 0'}}>
              Roots Abroad
            </h3>
            <p style={{color: '#DCC982', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', margin: '8px 0 0'}}>
              Crafted with Meaning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
