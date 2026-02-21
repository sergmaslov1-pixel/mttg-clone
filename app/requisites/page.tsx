import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реквизиты — Нест Капитал',
};

const rows = [
  { label: 'Полное наименование (рус.)', value: 'Общество с ограниченной ответственностью «Нест Капитал» (ООО «Нест Капитал»)' },
  { label: 'Полное наименование (англ.)', value: 'Nest Capital Limited Liability Company (Nest Capital LLC)' },
  { label: 'ИНН', value: '7701884760' },
  { label: 'КПП', value: '770901001' },
  { label: 'ОГРН / дата регистрации', value: '1107746583460 / 23.07.2010' },
  { label: 'ОКПО', value: '66920392' },
  { label: 'Юридический / почтовый адрес', value: '109147, г. Москва, ул. Марксистская, д. 22, стр. 1, под. 2, эт. 5, комн. 17' },
  { label: 'Телефон / E-mail', value: '(499) 649-71-85 / office@mttg.ru' },
  { label: 'Банк', value: 'Филиал «Центральный» Банка ВТБ (ПАО) в г. Москве' },
  { label: 'БИК', value: '044525411' },
  { label: 'Корреспондентский счёт', value: '30101810145250000411' },
  { label: 'Расчётный счёт', value: '40702810100000270105' },
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
              fontWeight: row.label === 'Полное наименование (рус.)' ? 600 : 400,
            }}>
              {row.value}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
