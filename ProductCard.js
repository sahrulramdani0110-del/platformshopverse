import { useCart } from '../context/CartContext';
import { useState } from 'react';

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={s <= Math.round(rating) ? '#C9A84C' : 'none'} stroke={s <= Math.round(rating) ? '#C9A84C' : '#D5C9B0'} strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.discountPercentage ? Math.round(product.discountPercentage) : null;

  return (
    <div
      className="card-hover rounded-lg overflow-hidden opacity-0 animate-fade-up"
      style={{
        background: 'white',
        border: '1px solid rgba(26,26,26,0.08)',
        animationDelay: `${index * 0.07}s`,
        animationFillMode: 'forwards',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '220px', background: '#F8F5EF' }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }}
          loading="lazy"
        />
        {discount && (
          <span className="badge absolute top-3 left-3 rounded-full" style={{ background: '#C4491B', color: 'white' }}>
            -{discount}%
          </span>
        )}
        <span className="badge absolute top-3 right-3 rounded" style={{ background: 'rgba(26,26,26,0.7)', color: 'white' }}>
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <Stars rating={product.rating} />
          <span className="text-xs" style={{ color: '#888' }}>({product.rating?.toFixed(1)})</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold" style={{ color: '#C4491B', fontFamily: 'Playfair Display, serif' }}>
              ${product.price}
            </span>
            {discount && (
              <span className="text-xs line-through ml-2" style={{ color: '#999' }}>
                ${(product.price / (1 - discount/100)).toFixed(0)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="btn-primary text-xs rounded"
            style={{ padding: '6px 12px', transition: 'all 0.2s', background: added ? '#4A7C59' : '', borderColor: added ? '#4A7C59' : '' }}
          >
            {added ? '✓ Added' : '+ Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
