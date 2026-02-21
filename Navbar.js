import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: '#1A1A1A', borderBottom: '2px solid #C4491B' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F5F0E8', letterSpacing: '-0.02em' }}>
          Shop<span style={{ color: '#C4491B' }}>Verse</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#F5F0E8' }}>Home</Link>
          <Link href="/products" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#F5F0E8' }}>Products (CSR)</Link>
          <Link href="/categories" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#F5F0E8' }}>Categories (SSG)</Link>
          <Link href="/trending" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#F5F0E8' }}>Trending (SSR)</Link>
        </div>

        {/* Cart */}
        <Link href="/cart" className="relative flex items-center gap-2 btn-primary text-sm" style={{ textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: '#C9A84C', color: '#1A1A1A' }}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Rendering labels bar */}
      <div className="max-w-7xl mx-auto px-4 pb-2 flex gap-4 overflow-x-auto">
        <span className="badge rounded-full" style={{ background: '#4A7C59', color: 'white' }}>SSR: Trending</span>
        <span className="badge rounded-full" style={{ background: '#C4491B', color: 'white' }}>CSR: Products</span>
        <span className="badge rounded-full" style={{ background: '#C9A84C', color: '#1A1A1A' }}>SSG: Categories</span>
        <span className="badge rounded-full" style={{ background: '#7C4A7C', color: 'white' }}>Context API: Cart</span>
      </div>
    </nav>
  );
}
