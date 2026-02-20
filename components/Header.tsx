'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      background: 'rgba(246, 244, 239, 0.92)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/images/logo.svg"
            alt="MTT-Group"
            width={148}
            height={16}
            priority
            style={{ filter: 'brightness(0)', height: 16, width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          flexWrap: 'wrap',
        }} className="desktop-nav">
          <Link href="/about" className={`nav-link${pathname === '/about' ? ' active' : ''}`}>О компании</Link>
          <Link href="/requisites" className={`nav-link${pathname === '/requisites' ? ' active' : ''}`}>Реквизиты</Link>
          <Link href="/contacts" className={`nav-link${pathname === '/contacts' ? ' active' : ''}`}>Контакты</Link>
          <a href="tel:84996497185" style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text)',
            whiteSpace: 'nowrap',
          }}>
            8-499 649-71-85
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text)',
            padding: 10,
          }}
          className="burger-btn"
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }} className="mobile-menu">
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontSize: 15, color: 'var(--text-muted)' }}>О компании</Link>
          <Link href="/requisites" onClick={() => setMenuOpen(false)} style={{ fontSize: 15, color: 'var(--text-muted)' }}>Реквизиты</Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)} style={{ fontSize: 15, color: 'var(--text-muted)' }}>Контакты</Link>
          <a href="tel:84996497185" style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>8-499 649-71-85</a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
