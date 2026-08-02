'use client';

export default function HeroRefined() {
  return (
    <section style={{background: 'linear-gradient(180deg, #F8F6F1 0%, #FFFFFF 100%)', padding: '100px 40px', textAlign: 'center'}}>
      <div className="max-w-5xl mx-auto">
        {/* Main Headline */}
        <div style={{marginBottom: '40px'}}>
          <h1 
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#234034',
              lineHeight: '1.2',
              margin: 0,
              marginBottom: '20px'
            }}
          >
            More Than Gifts
          </h1>
          <p 
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '42px',
              color: '#B68A5A',
              fontStyle: 'italic',
              margin: 0,
              fontWeight: '400'
            }}
          >
            Pieces That Tell Your Story
          </p>
        </div>

        {/* Subheading */}
        <p 
          style={{
            fontSize: '18px',
            color: '#2F3437',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto 50px',
            fontWeight: '400'
          }}
        >
          Handcrafted in Ireland. Personalised with meaning. Laser-engraved to perfection. Each piece carries the story of connection, craft, and care.
        </p>

        {/* CTA Buttons */}
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button
            style={{
              backgroundColor: '#234034',
              color: '#F8F6F1',
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#B68A5A';
              e.target.style.color = '#234034';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#234034';
              e.target.style.color = '#F8F6F1';
            }}
          >
            Shop Personalised Gifts
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#234034',
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid #234034',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#234034';
              e.target.style.color = '#F8F6F1';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#234034';
            }}
          >
            Custom Commission
          </button>
        </div>
      </div>
    </section>
  );
}
