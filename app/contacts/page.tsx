import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Контакты — МТТ Групп',
};

export default function ContactsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>

      <p className="section-label">Связаться</p>
      <h1 style={{
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
        marginBottom: 56,
      }}>
        Контакты
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
        gap: 2,
        marginBottom: 80,
      }}>
        <ContactCard
          icon={<IconLocation />}
          label="Адрес"
          value={'109147, Россия, г. Москва,\nул. Марксистская, д. 22, стр. 1'}
        />
        <ContactCard
          icon={<IconPhone />}
          label="Телефон"
          value="+7 (499) 649-71-85"
          href="tel:+74996497185"
        />
        <ContactCard
          icon={<IconMail />}
          label="Электронная почта"
          value="office@mttg.ru"
          href="mailto:office@mttg.ru"
        />
        <ContactCard
          icon={<IconOffice />}
          label="Наименование"
          value="«МТТ Групп»"
        />
        <ContactCard
          icon={<IconClock />}
          label="Режим работы"
          value="Офисный: 9:00 — 18:00"
        />
      </div>

      {/* ── Форма связи ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
        gap: 64,
        alignItems: 'start',
      }}>
        <div>
          <p className="section-label">Форма связи</p>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700,
            letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 12,
          }}>
            Напишите нам
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Оставьте сообщение, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>
        <ContactForm />
      </div>

    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      padding: '32px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}>
      <div style={{ color: 'var(--accent)' }}>{icon}</div>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {label}
      </p>
      {href ? (
        <a href={href} className="contact-link" style={{ whiteSpace: 'pre-line' }}>
          {value}
        </a>
      ) : (
        <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', whiteSpace: 'pre-line' }}>
          {value}
        </p>
      )}
    </div>
  );
}

function IconLocation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.17a16 16 0 006.1 6.1l1.47-1.47a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function IconOffice() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
