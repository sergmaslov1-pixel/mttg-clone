import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реквизиты — МТТ Групп',
};

const rows = [
  { label: 'Получатель', value: 'ООО «МТТ Групп»' },
  { label: 'ИНН / КПП', value: '7701884760 / 770901001' },
  { label: 'ОГРН', value: '1107746583460' },
  { label: 'Банк', value: '«Центральный» Банка ВТБ (ПАО) в г. Москве' },
  { label: 'Расчётный счёт', value: '40702810100000270105' },
  { label: 'Корреспондентский счёт', value: '30101810145250000411' },
  { label: 'БИК', value: '044525411' },
  { label: 'Юридический адрес', value: '109147, г. Москва, ул. Марксистская, д. 22, стр. 1, под. 2, эт. 5, комн. 17' },
];

export default function RequisitesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>

      <p className="section-label">Документы</p>
      <h1 style={{
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
        marginBottom: 56,
      }}>
        Реквизиты
      </h1>

      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
      }}>
        {rows.map((row, i) => (
          <div key={row.label} className="req-grid" style={{
            borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div className="req-label" style={{
              padding: '20px 28px',
              background: 'var(--bg-hover)',
              borderRight: '1px solid var(--border)',
              fontSize: 13,
              color: 'var(--text-muted)',
              fontWeight: 500,
            }}>
              {row.label}
            </div>
            <div style={{
              padding: '20px 28px',
              fontSize: 14,
              color: 'var(--text)',
              fontWeight: row.label === 'Получатель' ? 600 : 400,
            }}>
              {row.value}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
