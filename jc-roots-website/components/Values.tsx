export default function Values() {
  const values = [
    { icon: '◆', title: 'Meaning', description: 'Every gift carries intention and purpose', color: '#B68A5A' },
    { icon: '◆', title: 'Connection', description: 'Linking hearts across distance', color: '#DCC982' },
    { icon: '◆', title: 'Craftsmanship', description: 'Built with care, no shortcuts', color: '#B68A5A' },
    { icon: '◆', title: 'Belonging', description: 'Creating home wherever you are', color: '#DCC982' },
  ];

  return (
    <section style={{backgroundColor: '#234034', padding: '60px 40px', borderTop: '2px solid #B68A5A'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div key={i} className="text-center" style={{padding: '24px', backgroundColor: 'rgba(248, 246, 241, 0.05)', borderRadius: '12px', border: `2px solid ${value.color}`}}>
              <div className="text-4xl mb-4" style={{color: value.color}}>{value.icon}</div>
              <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'Cormorant Garamond, serif', color: '#F8F6F1'}}>
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{color: '#DCC982'}}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
