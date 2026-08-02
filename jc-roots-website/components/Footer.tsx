'use client';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#234034', borderTop: '3px solid #B68A5A'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px'}}>
        {/* Top Section */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(184, 138, 90, 0.3)'}}>
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-2" style={{fontFamily: 'Cormorant Garamond, serif', color: '#F8F6F1', margin: 0}}>
              JC Roots Abroad
            </h3>
            <p className="text-xs tracking-widest uppercase mb-4" style={{color: '#B68A5A', margin: 0}}>
              Crafted with meaning
            </p>
            <p className="text-sm leading-relaxed" style={{color: '#DCC982'}}>
              Premium personalised gifts and home decor, handmade in Ireland with intention and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{color: '#B68A5A', margin: 0}}>
              Explore
            </h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '12px'}}><a href="#" className="text-sm transition" style={{color: '#DCC982', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = '#B68A5A'} onMouseLeave={(e) => e.target.style.color = '#DCC982'}>Shop</a></li>
              <li style={{marginBottom: '12px'}}><a href="#" className="text-sm transition" style={{color: '#DCC982', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = '#B68A5A'} onMouseLeave={(e) => e.target.style.color = '#DCC982'}>Design Your Own</a></li>
              <li style={{marginBottom: '12px'}}><a href="#" className="text-sm transition" style={{color: '#DCC982', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = '#B68A5A'} onMouseLeave={(e) => e.target.style.color = '#DCC982'}>For Businesses</a></li>
              <li><a href="#" className="text-sm transition" style={{color: '#DCC982', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.color = '#B68A5A'} onMouseLeave={(e) => e.target.style.color = '#DCC982'}>About Us</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{color: '#B68A5A', margin: 0}}>
              Connect
            </h4>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
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
              <span className="text-sm" style={{color: '#DCC982'}}>@jc_roots_abroad</span>
            </div>
            <p className="text-xs leading-relaxed" style={{color: '#B68A5A', margin: 0}}>
              Follow us for inspiration, new designs, and behind-the-scenes craftsmanship.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{textAlign: 'center', paddingTop: '24px'}}>
          <p className="text-xs" style={{color: 'rgba(220, 201, 130, 0.7)', margin: 0}}>
            © 2024 JC Roots Abroad. All rights reserved. Handmade in Ireland with meaning.
          </p>
        </div>
      </div>
    </footer>
  );
}
