import Link from 'next/link';
import Image from 'next/image';

// Subtle grid pattern — L-path tiles into a full crossing grid
const GRID_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cpath d='M64 0L0 0 0 64' fill='none' stroke='rgba(255%2C255%2C255%2C0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`;

const metrics = [
  { value: '2013',      label: 'Год основания' },
  { value: '4',         label: 'Актива в портфеле' },
  { value: '5 млрд ₽',  label: 'Крупнейшая сделка' },
  { value: '10+',       label: 'Лет на рынке' },
] as const;

export default function Home() {
  return (
    <div>

      {/* ── Hero ────────────────────────────────────── */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '72px 24px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Background image */}
        <Image
          aria-hidden="true"
          src="/images/hero.png"
          alt=""
          width={1920}
          height={1000}
          priority
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        />

        {/* Dark gradient — top fade from bg color */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '55%',
          background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Dark gradient — bottom fade */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
          background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Multi-layer gradient glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse 900px 550px at 65% -80px, rgba(90,160,240,0.14) 0%, transparent 60%)',
            'radial-gradient(ellipse 700px 450px at -10% 100%, rgba(200,169,110,0.07) 0%, transparent 60%)',
            'radial-gradient(ellipse 400px 300px at 105% 75%, rgba(60,120,220,0.10) 0%, transparent 60%)',
          ].join(', '),
        }} />

        {/* Tech grid overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: GRID_PATTERN,
          backgroundSize: '64px 64px',
        }} />

        {/* Content */}
        <div style={{ maxWidth: 900, width: '100%', position: 'relative', zIndex: 1 }}>

          <p className="animate-in" style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}>
            <span aria-hidden="true" style={{
              display: 'block', width: 28, height: 1,
              background: 'var(--accent)', flexShrink: 0,
            }} />
            Частная инвестиционная группа
          </p>

          <h1 className="animate-in delay-1" style={{
            fontSize: 'clamp(44px, 7.5vw, 88px)',
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            marginBottom: 40,
            color: 'var(--text)',
          }}>
            Инвестиции<br />
            <span style={{ color: 'var(--accent)' }}>в будущее</span>
          </h1>

          <div className="animate-in delay-2" style={{
            width: 56, height: 1, background: 'rgba(200,169,110,0.45)', marginBottom: 40,
          }} />

          <p className="animate-in delay-2" style={{
            fontSize: 16,
            lineHeight: 1.9,
            color: 'var(--text-muted)',
            maxWidth: 640,
            marginBottom: 52,
          }}>
            «Нест Капитал» — частная инвестиционная группа, которая специализируется
            на управлении и развитии бизнес-единиц в различных сегментах рынка,
            представляя успешные решения для частных и корпоративных клиентов.
            «Нест Капитал» ориентирована на работу со зрелым российским и
            международным бизнесом, компаниями из стран Ближнего зарубежья
            в таких сферах, как: телеком, ИТ, колл-центры, ритейл эстейт и др.
            Мы готовы к обсуждению совместных инвестиционных проектов
            и в других интересных областях.
          </p>

          <Link href="/about" className="btn-primary animate-in delay-3">
            О Компании
          </Link>
        </div>
      </section>

{/* ── Metrics ─────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}>
          {metrics.map(({ value, label }, i) => (
            <div key={label} style={{
              padding: '40px 36px',
              textAlign: 'center',
              borderRight: i < metrics.length - 1 ? '1px solid var(--border)' : 'none',
              position: 'relative',
            }}>
              {/* Accent tick at top */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: 1, height: 20, background: 'var(--accent)', opacity: 0.5,
              }} />
              <p style={{
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: 12,
              }}>
                {value}
              </p>
              <p style={{
                fontSize: 10,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 700,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
