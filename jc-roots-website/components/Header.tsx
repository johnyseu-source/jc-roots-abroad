'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header style={{backgroundColor: '#234034', borderBottom: '1px solid #1a2f28'}}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <a href="/" className="flex items-center gap-4 hover:opacity-90 transition">
          <div className="w-14 h-14 relative">
            <Image
              src="/logo.jpg"
              alt="JC Roots Abroad"
              width={56}
              height={56}
              className="rounded-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold" style={{fontFamily: 'Cormorant Garamond, serif', color: '#F8F6F1'}}>
              JC Roots Abroad
            </h1>
            <p className="text-xs font-semibold tracking-widest" style={{color: '#B68A5A'}}>CRAFTED WITH MEANING</p>
          </div>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-sm font-medium transition" style={{color: '#DCC982', borderBottom: '2px solid transparent'}} onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #B68A5A'} onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}>Shop</a>
            <a href="#" className="text-sm font-medium transition" style={{color: '#DCC982', borderBottom: '2px solid transparent'}} onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #B68A5A'} onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}>Design</a>
            <a href="#" className="text-sm font-medium transition" style={{color: '#DCC982', borderBottom: '2px solid transparent'}} onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #B68A5A'} onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}>Business</a>
            <a href="#" className="text-sm font-medium transition" style={{color: '#DCC982', borderBottom: '2px solid transparent'}} onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #B68A5A'} onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}>About</a>
          </nav>

          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/jc_roots_abroad/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl transition"
            style={{color: '#B68A5A'}}
            title="Follow us on Instagram"
          >
            📷
          </a>
        </div>
      </div>
    </header>
  );
}
