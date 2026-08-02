export default function Products() {
  const products = [
    { id: 1, name: 'Personalised Chopping Board', price: '€34.95', icon: '🪵', accentColor: '#B68A5A' },
    { id: 2, name: 'Mirror Sign', price: '€24.95', icon: '🪞', accentColor: '#DCC982' },
    { id: 3, name: 'Wine Glass Markers', price: '€18.95', icon: '🍷', accentColor: '#B68A5A' },
    { id: 4, name: 'Keepsake Box', price: '€28.95', icon: '🎀', accentColor: '#DCC982' },
  ];

  return (
    <section style={{backgroundColor: '#F8F6F1', padding: '60px 40px', borderTop: '3px solid #B68A5A'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16" style={{fontFamily: 'Cormorant Garamond, serif', color: '#234034'}}>
          Handcrafted Personalised Gifts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded overflow-hidden transition hover:shadow-2xl" style={{borderTop: `4px solid ${product.accentColor}`}}>
              <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                {product.icon}
              </div>
              <div className="p-5">
                <p className="text-sm font-medium mb-2" style={{color: '#234034'}}>{product.name}</p>
                <p className="text-lg font-semibold" style={{fontFamily: 'Cormorant Garamond, serif', color: product.accentColor}}>
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
