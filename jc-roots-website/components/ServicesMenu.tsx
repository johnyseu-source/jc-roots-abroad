'use client';

export default function ServicesMenu() {
  const services = [
    {
      title: "Hospitality & Retail",
      description: "Custom branded signs, welcome plaques, and bespoke retail displays",
      icon: "🏨"
    },
    {
      title: "Corporate Gifts",
      description: "Personalised gifts for clients, employees, and key business relationships",
      icon: "💼"
    },
    {
      title: "Events & Celebrations",
      description: "Custom pieces for weddings, anniversaries, and milestone celebrations",
      icon: "💍"
    },
    {
      title: "Professional Services",
      description: "Reception signage, office plaques, and branded materials",
      icon: "🏢"
    }
  ];

  return (
    <section style={{backgroundColor: '#F8F6F1', padding: '80px 40px', borderBottom: '3px solid #234034'}}>
      <div className="max-w-6xl mx-auto">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <p style={{color: '#B68A5A', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px', margin: 0}}>
            B2B Services
          </p>
          <h2 
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px',
              color: '#234034',
              margin: '12px 0 16px'
            }}
          >
            Built for Business
          </h2>
          <p style={{color: '#2F3437', fontSize: '16px', margin: 0}}>
            One quality client is worth more than dozens of one-off orders. We create lasting partnerships.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px'}}>
          {services.map((service, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: '#234034',
                padding: '32px',
                borderRadius: '8px',
                borderTop: `4px solid ${i % 2 === 0 ? '#B68A5A' : '#DCC982'}`
              }}
            >
              <p style={{fontSize: '48px', margin: '0 0 16px'}}>{service.icon}</p>
              <h3 
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '18px',
                  color: i % 2 === 0 ? '#B68A5A' : '#DCC982',
                  margin: '0 0 12px',
                  fontWeight: 'bold'
                }}
              >
                {service.title}
              </h3>
              <p style={{color: '#DCC982', fontSize: '14px', lineHeight: '1.6', margin: 0}}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '60px'}}>
          <p style={{color: '#2F3437', fontSize: '16px', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px'}}>
            Ready to commission a custom project? Let's discuss your vision and create something meaningful for your business.
          </p>
          <button
            style={{
              backgroundColor: '#234034',
              color: '#F8F6F1',
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#B68A5A'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#234034'}
          >
            Enquire About Custom Orders
          </button>
        </div>
      </div>
    </section>
  );
}
