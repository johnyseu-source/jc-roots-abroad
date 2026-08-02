export default function Business() {
  const services = [
    { title: 'Hospitality & Retail', description: 'Custom QR codes, branded signage, welcome plaques', accentColor: '#B68A5A' },
    { title: 'Corporate & Office', description: 'Reception signs, door plaques, branded gifts', accentColor: '#DCC982' },
    { title: 'Events & Celebrations', description: 'Custom pieces, place cards, centrepieces', accentColor: '#B68A5A' },
    { title: 'Professional Services', description: 'Custom branding, client appreciation gifts', accentColor: '#DCC982' },
  ];

  return (
    <section style={{backgroundColor: '#F8F6F1', padding: '60px 40px', borderTop: '3px solid #234034'}}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{fontFamily: 'Cormorant Garamond, serif', color: '#234034'}}>
            For Irish Businesses
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl" style={{color: '#2F3437'}}>
            Custom branded signs, corporate gifts, and bespoke pieces that reflect your values. One business client is worth more than dozens of individual orders—and they last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} style={{backgroundColor: '#234034', padding: '24px', borderRadius: '12px', border: `2px solid ${service.accentColor}`, borderTop: `4px solid ${service.accentColor}`}}>
              <h4 className="text-lg font-semibold mb-3" style={{fontFamily: 'Cormorant Garamond, serif', color: service.accentColor}}>
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{color: '#DCC982'}}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
