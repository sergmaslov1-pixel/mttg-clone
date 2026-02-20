export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
          © 2013—2025 Нест Капитал. Все права защищены.
        </p>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
          109147, г. Москва, ул. Марксистская, д. 22
        </p>
      </div>
    </footer>
  );
}
