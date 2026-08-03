'use client';

export default function ProductGallery() {
  const products = [
    {
      id: 1,
      name: 'Personalised Chopping Board',
      category: 'Home & Kitchen',
      price: '€34.95',
      image: '🪵',
      description: 'Stunning wooden chopping board, laser-engraved with your custom text',
      featured: true
    },
    {
      id: 2,
      name: 'Mirror Sign',
      category: 'Wall Art',
      price: '€24.95',
      image: '🪞',
      description: 'Modern mirror sign with elegant engraving, perfect for any room',
      featured: true
    },
    {
      id: 3,
      name: 'Wine Glass Markers',
      category: 'Entertaining',
      price: '€18.95',
      image: '🍷',
      description: 'Set of handcrafted markers to personalise your wine glasses',
      featured: false
    },
    {
      id: 4,
      name: 'Keepsake Box',
      category: 'Gifts',
      price: '€28.95',
      image: '🎀',
      description: 'Beautiful wooden box for storing memories and treasured items',
      featured: false
    },
  ];

  return (
    <section style={{backgroundColor: '#FFFFFF', padding: '80px 40px', borderBottom: '3px solid #234034'}}>
      <div className="max-w-7xl mx-auto">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px',
              color: '#234034',
              margin: '0 0 16px',
              fontWeight: 'bold'
            }}
          >
            Handcrafted Collections
          </h2>
          <p style={{color: '#2F3437', fontSize: '16px', margin: 0}}>
            Each piece laser-engraved with precision and care. Completely personalised for you.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px'}}>
          {products.map((product) => (
            <div 
              key={product.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: `2px solid ${product.featured ? '#B68A5A' : '#DCC9821A'}`,
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(35, 64, 52, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Product Image */}
              <div 
                style={{
                  backgroundColor: 'linear-gradient(135deg, #F8F6F1 0%, #DCC98220 100%)',
                  padding: '60px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  borderBottom: '2px solid #F0EBE5'
                }}
              >
                {product.image}
              </div>

              {/* Product Info */}
              <div style={{padding: '24px'}}>
                <p style={{color: '#B68A5A', fontSize: '12px', margin: '0 0 8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px'}}>
                  {product.category}
                </p>
                <h3 
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    color: '#234034',
                    margin: '0 0 8px',
                    fontWeight: 'bold'
                  }}
                >
                  {product.name}
                </h3>
                <p style={{color: '#2F3437', fontSize: '13px', margin: '0 0 16px', lineHeight: '1.6'}}>
                  {product.description}
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p 
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '24px',
                      color: '#B68A5A',
                      margin: 0,
                      fontWeight: 'bold'
                    }}
                  >
                    {product.price}
                  </p>
                  <button
                    style={{
                      backgroundColor: '#234034',
                      color: '#F8F6F1',
                      border: 'none',
                      padding: '8px 16px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#B68A5A'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#234034'}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '60px'}}>
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
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#B68A5A'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#234034'}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
