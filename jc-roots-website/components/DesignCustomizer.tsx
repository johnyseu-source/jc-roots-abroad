'use client';

import { useState } from 'react';

export default function DesignCustomizer() {
  const [text, setText] = useState('Your Text Here');
  const [font, setFont] = useState('serif');

  const fontClass = font === 'serif' ? 'font-serif' : font === 'mono' ? 'font-mono' : 'font-sans';

  return (
    <section style={{background: 'linear-gradient(135deg, #234034 0%, #2d5347 100%)', padding: '60px 40px'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{display: 'inline-block', padding: '8px 16px', background: '#B68A5A', borderRadius: '6px', marginBottom: '16px'}}>
              <p className="text-xs font-semibold tracking-widest m-0" style={{color: '#234034', textTransform: 'uppercase'}}>
                Live Customizer
              </p>
            </div>
            <h2 className="text-5xl font-bold mb-6 leading-tight" style={{fontFamily: 'Cormorant Garamond, serif', color: '#F8F6F1', margin: 0}}>
              Design Your Own Gift
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{color: '#DCC982'}}>
              See your creation come to life in real time. Choose your product, add names or dates, select fonts and icons.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{color: '#DCC982'}}>
              With our live preview, you know exactly what you're getting—meaningful, personal, and entirely yours.
            </p>
            <button className="px-9 py-3 font-semibold transition rounded" style={{backgroundColor: '#B68A5A', color: '#234034', fontSize: '16px'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#DCC982'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#B68A5A'}>
              Start Designing
            </button>
          </div>

          <div style={{backgroundColor: '#F8F6F1', padding: '32px', borderRadius: '12px', border: '2px solid #B68A5A'}}>
            <p className="text-xs font-bold tracking-widest mb-6" style={{color: '#B68A5A', textTransform: 'uppercase'}}>Live Preview</p>
            
            <div className="w-full aspect-square rounded mb-6 flex items-center justify-center p-6" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F0EBE5 100%)', border: '2px solid #B68A5A'}}>
              <p className={`text-center ${fontClass} text-3xl font-bold break-words`} style={{color: '#234034'}}>
                {text}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider" style={{color: '#234034'}}>Your Text</label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text..."
                  className="w-full mt-2 p-3 border rounded text-sm focus:outline-none transition"
                  style={{borderColor: '#B68A5A', borderWidth: '2px'}}
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider" style={{color: '#234034'}}>Font Style</label>
                <select
                  value={font}
                  onChange={(e) => setFont(e.target.value)}
                  className="w-full mt-2 p-3 border rounded text-sm focus:outline-none transition"
                  style={{borderColor: '#B68A5A', borderWidth: '2px'}}
                >
                  <option value="serif">Elegant (Serif)</option>
                  <option value="sans">Modern (Sans)</option>
                  <option value="mono">Classic (Mono)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
