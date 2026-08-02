'use client';

export default function CraftProcess() {
  const steps = [
    {
      number: '01',
      title: 'Design',
      description: 'You create the vision. We bring it to life.',
      color: '#B68A5A'
    },
    {
      number: '02',
      title: 'Engrave',
      description: 'Laser-precision craftsmanship on every piece.',
      color: '#DCC982'
    },
    {
      number: '03',
      title: 'Inspect',
      description: 'Each piece checked for perfection.',
      color: '#B68A5A'
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Beautifully packaged, ready for gifting.',
      color: '#DCC982'
    }
  ];

  return (
    <section style={{backgroundColor: '#F8F6F1', padding: '80px 40px'}}>
      <div className="max-w-6xl mx-auto">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px',
              color: '#234034',
              margin: '0 0 16px'
            }}
          >
            The Craft Process
          </h2>
          <p style={{color: '#2F3437', fontSize: '16px', margin: 0}}>
            Four steps to creating something truly meaningful.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', position: 'relative'}}>
          {steps.map((step, i) => (
            <div key={i} style={{textAlign: 'center'}}>
              <div 
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 24px',
                  backgroundColor: '#234034',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTop: `4px solid ${step.color}`,
                  position: 'relative'
                }}
              >
                <p 
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '42px',
                    color: step.color,
                    margin: 0,
                    fontWeight: 'bold'
                  }}
                >
                  {step.number}
                </p>
              </div>
              <h3 
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  color: '#234034',
                  margin: '0 0 8px'
                }}
              >
                {step.title}
              </h3>
              <p style={{color: '#2F3437', fontSize: '14px', margin: 0, lineHeight: '1.6'}}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
