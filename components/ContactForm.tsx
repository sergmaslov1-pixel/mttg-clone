'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderLeft: '3px solid var(--accent)',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Сообщение отправлено</p>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
          Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label style={{
          display: 'block', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: 8,
        }}>
          Имя *
        </label>
        <input
          type="text"
          required
          placeholder="Ваше имя"
          className="form-input"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div>
        <label style={{
          display: 'block', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: 8,
        }}>
          E-mail *
        </label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="form-input"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <label style={{
          display: 'block', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: 8,
        }}>
          Сообщение *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Расскажите о вашем запросе..."
          className="form-input"
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>
      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
        Отправить
      </button>
    </form>
  );
}
