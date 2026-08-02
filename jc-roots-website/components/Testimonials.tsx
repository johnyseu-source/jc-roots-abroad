'use client';

export default function Testimonials() {
  const testimonials = [
    {
      text: "The quality is absolutely stunning. Every detail is perfect, and you can tell how much care went into making our custom piece. We'll treasure it forever.",
      author: "Sarah & Michael",
      role: "Wedding Anniversary",
      rating: 5
    },
    {
      text: "I ordered a personalised item and was blown away by the craftsmanship. The engraving is pristine and the product exceeded my expectations. Highly recommend!",
      author: "Emma O'Connor",
      role: "Gift for Housewarming",
      rating: 5
    },
    {
      text: "As a fellow small business owner, I appreciate the attention to detail and passion that goes into each piece. This is true artisanal craftsmanship.",
      author: "James H.",
      role: "Corporate Client",
      rating: 5
    }
  ];

  return (
    <section style={{backgroundColor: '#FFFFFF', padding: '80px 40px', borderBottom: '3px solid #B68A5A'}}>
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
            Loved by Our Community
          </h2>
          <p style={{color: '#2F3437', fontSize: '16px', margin: 0}}>
            Real feedback from people who've received our handcrafted pieces.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              style={{
                backgroundColor: '#F8F6F1',
                padding: '32px',
                borderRadius: '8px',
                borderLeft: `4px solid #B68A5A`,
                position: 'relative'
              }}
            >
              <div style={{marginBottom: '20px'}}>
                <p style={{color: '#B68A5A', fontSize: '16px', margin: 0}}>
                  {'★ '.repeat(testimonial.rating)}
                </p>
              </div>
              
              <p style={{color: '#2F3437', fontSize: '15px', lineHeight: '1.8', margin: '0 0 20px', fontStyle: 'italic'}}>
                "{testimonial.text}"
              </p>

              <div style={{borderTop: '1px solid rgba(35, 64, 52, 0.1)', paddingTop: '16px'}}>
                <p 
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '16px',
                    color: '#234034',
                    margin: '0 0 4px',
                    fontWeight: 'bold'
                  }}
                >
                  {testimonial.author}
                </p>
                <p style={{color: '#B68A5A', fontSize: '12px', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
