import type { Metadata } from 'next';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';
import NewsSection from '@/components/NewsSection';

export const metadata: Metadata = {
  title: 'О компании — Нест Капитал',
};

const assets = [
  {
    name: 'LPTracker',
    url: 'https://mylptracker.ru',
    logo: '/images/lptracker.png',
    logoW: 160,
    logoH: 48,
    category: 'CRM / Автоматизация',
    description: 'Многофункциональный сервис автоматизации продаж.',
    services: [
      'CRM-система', 'Виртуальная АТС', 'CallBack за 6 секунд',
      'CallTracking звонков', 'Виртуальные номера', 'Захват профилей ВК',
      'Геолокация посетителя', 'API Яндекс', 'Аналитика рекламы',
      'Распределение доступов', 'Запись звонков', 'Воронка продаж',
    ],
  },
  {
    name: 'АО «Аудиотеле»',
    url: 'https://audiotele.ru',
    logo: '/images/audiotele.png',
    logoW: 160,
    logoH: 48,
    category: 'Колл-центры',
    description: 'Один из лидеров рынка аутсорсинговых колл-центров в России, обладатель награды «Хрустальная гарнитура». Первый лицензированный оператор услуг интеллектуальной сети связи в РФ.',
    services: [],
  },
  {
    name: 'MightyCall',
    url: 'https://mightycall.ru',
    logo: '/images/mightycall.svg',
    logoW: 160,
    logoH: 48,
    category: 'Телеком / ПО',
    description: 'Российская компания, разрабатывает ПО для контакт-центров. 35 000+ клиентов.',
    services: ['MightyCall Enterprise', 'MightyCall Cloud'],
  },
  {
    name: 'Экспанта',
    url: 'https://expanta.ru',
    logo: '/images/expanta.svg',
    logoW: 160,
    logoH: 48,
    category: 'Промышленный ИТ',
    description: 'Российская мультивендорная компания, цифровые решения для нефтегазовой, нефтехимической, горнодобывающей и машиностроительной отраслей.',
    services: [],
  },
];

const headingStyle: React.CSSProperties = {
  fontSize: 'clamp(28px, 4vw, 44px)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: 'var(--text)',
  lineHeight: 1.15,
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>

      {/* ── Anchor Nav ── */}
      <nav style={{
        display: 'flex',
        gap: 32,
        borderBottom: '1px solid var(--border)',
        marginBottom: 72,
        overflowX: 'auto',
      }}>
        <a href="#team"      className="anchor-tab">Команда</a>
        <a href="#portfolio" className="anchor-tab">Портфель</a>
        <a href="#news"      className="anchor-tab">Новости</a>
      </nav>

      {/* ── КОМАНДА ── */}
      <section id="team" style={{ marginBottom: 96, scrollMarginTop: 80 }}>
        <p className="section-label">Команда</p>
        <h2 style={headingStyle}>Руководство компании</h2>
        <TeamSection />
      </section>

      {/* ── АКТИВЫ ── */}
      <section id="portfolio" style={{ marginBottom: 96, scrollMarginTop: 80 }}>
        <p className="section-label">Портфель</p>
        <h2 style={headingStyle}>Активы группы</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          marginTop: 48,
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {assets.map(asset => (
            <div key={asset.name} className="card-hover" style={{
              background: 'var(--bg-card)',
              border: '1px solid transparent',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}>
              {/* Category badge */}
              <span style={{
                alignSelf: 'flex-start',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
                padding: '3px 10px',
              }}>
                {asset.category}
              </span>

              {/* Logo */}
              <a href={asset.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: 72,
                  overflow: 'hidden',
                }}>
                  <Image
                    src={asset.logo}
                    alt={asset.name}
                    width={asset.logoW}
                    height={asset.logoH}
                    style={{ objectFit: 'contain', maxHeight: 44, width: 'auto' }}
                  />
                </div>
              </a>

              {/* Name + external link icon */}
              <a href={asset.url} target="_blank" rel="noopener noreferrer" className="asset-link">
                {asset.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" style={{ opacity: 0.45, flexShrink: 0 }}>
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>

              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {asset.description}
              </p>

              {asset.services.length > 0 && (
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 6, listStyle: 'none', marginTop: 'auto' }}>
                  {asset.services.map(s => (
                    <li key={s} style={{
                      fontSize: 10,
                      padding: '3px 10px',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em',
                    }}>
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── НОВОСТИ ── */}
      <section id="news" style={{ scrollMarginTop: 80 }}>
        <p className="section-label">Пресс-центр</p>
        <h2 style={headingStyle}>Новости</h2>
        <NewsSection />
      </section>

    </div>
  );
}
