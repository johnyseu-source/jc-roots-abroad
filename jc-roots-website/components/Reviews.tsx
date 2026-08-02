export default function Reviews() {
  const reviews = [
    {
      stars: 5,
      text: "The personalization is flawless. This was a gift for our anniversary and we'll treasure it forever. Real craftsmanship.",
      author: 'Sarah & Michael',
      accentColor: '#B68A5A'
    },
    {
      stars: 5,
      text: "My dog's name has never looked so good. The quality is outstanding and it arrived beautifully packaged. Worth every euro.",
      author: 'Lucy P.',
      accentColor: '#DCC982'
    },
    {
      stars: 5,
      text: "Gave this as a housewarming gift and they displayed it immediately. Honest craftsmanship shines through.",
      author: 'James H.',
      accentColor: '#B68A5A'
    },
  ];

  return (
    <section style={{backgroundColor: '#234034', padding: '60px 40px', borderTop: '3px solid #B68A5A'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16" style={{fontFamily: 'Cormorant Garamond, serif', color: '#F8F6F1'}}>
          Loved by Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} style={{backgroundColor: 'rgba(248, 246, 241, 0.05)', padding: '24px', borderRadius: '12px', border: `2px solid ${review.accentColor}`, borderLeft: `4px solid ${review.accentColor}`}}>
              <div className="text-lg mb-4 tracking-wider" style={{color: review.accentColor}}>
                {'★ '.repeat(review.stars)}
              </div>
              <p className="leading-relaxed mb-6" style={{color: '#DCC982'}}>
                "{review.text}"
              </p>
              <p className="text-sm font-semibold tracking-wide" style={{color: review.accentColor}}>
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
