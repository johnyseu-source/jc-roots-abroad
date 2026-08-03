'use client';

export default function Hero() {
  return (
    <section style={{background: 'linear-gradient(135deg, #234034 0%, #2d5347 100%)', padding: '80px 40px'}}>
      <div className="max-w-4xl mx-auto text-center">
        <div style={{display: 'inline-block', padding: '12px 24px', background: '#B68A5A', borderRadius: '50px', marginBottom: '24px'}}>
          <p className="text-xs font-semibold tracking-widest m-0" style={{color: '#F8F6F1', textTransform: 'uppercase'}}>
            Handcrafted Since 2026
          </p>
        </div>
        
        <h1 
          className="mb-6 leading-tight"
          style={{fontFamily: 'Cormorant Garamond, serif', fontSize: '72px', fontWeight: 'bold', color: '#F8F6F1', margin: 0}}
        >
          Gifts That Carry Meaning
        </h1>
        
        <p className="text-xl mb-10 leading-relaxed" style={{color: '#DCC982', margin: 0}}>
          Handcrafted in Ireland by two people building roots abroad. Every piece tells a story.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <button className="px-9 py-4 font-semibold transition rounded" style={{backgroundColor: '#B68A5A', color: '#234034', fontSize: '16px'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#DCC982'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#B68A5A'}>
            Shop Now
          </button>
          <button className="px-9 py-4 font-semibold transition rounded" style={{backgroundColor: 'transparent', color: '#F8F6F1', border: '2px solid #B68A5A', fontSize: '16px'}} onMouseEnter={(e) => {(e.target as HTMLButtonElement).style.backgroundColor = '#B68A5A'; (e.target as HTMLButtonElement).style.color = '#234034'}} onMouseLeave={(e) => {(e.target as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.target as HTMLButtonElement).style.color = '#F8F6F1'}}>
            Design Your Own
          </button>
        </div>
      </div>
    </section>
  );
}
