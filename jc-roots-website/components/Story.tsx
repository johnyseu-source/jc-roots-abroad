'use client';

export default function Story() {
  return (
    <section style={{backgroundColor: '#F8F6F1', padding: '60px 40px', borderTop: '3px solid #234034'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{display: 'inline-block', paddingBottom: '12px', borderBottom: '3px solid #B68A5A', marginBottom: '24px'}}>
              <h2 className="text-5xl font-bold" style={{fontFamily: 'Cormorant Garamond, serif', color: '#234034', margin: 0}}>
                Why We Create
              </h2>
            </div>
            <p className="text-lg leading-relaxed mb-6 mt-6" style={{color: '#2F3437'}}>
              I'm Johnys. I came to Ireland to build something meaningful. My partner John and I share a vision: gifts that matter.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{color: '#2F3437'}}>
              We understand what it means to have roots in multiple places, to honor connections across distance, to create keepsakes that last.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{color: '#2F3437'}}>
              Every piece is inspected, tested, packed with intention. No shortcuts. Just thoughtful craftsmanship.
            </p>
            <div style={{padding: '20px', backgroundColor: '#234034', borderRadius: '12px', borderLeft: '4px solid #B68A5A'}}>
              <p className="text-xl italic mb-0" style={{fontFamily: 'Cormorant Garamond, serif', color: '#DCC982'}}>
                "More than gifts, pieces that tell your story."
              </p>
            </div>
          </div>

          <div className="rounded flex items-center justify-center h-96" style={{background: 'linear-gradient(135deg, #234034 0%, #2d5347 100%)', borderRadius: '20px', border: '3px solid #B68A5A'}}>
            <div className="text-9xl">🌳</div>
          </div>
        </div>
      </div>
    </section>
  );
}
