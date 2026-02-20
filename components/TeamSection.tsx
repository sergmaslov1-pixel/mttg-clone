'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Person = {
  name: string;
  role: string;
  photo: string | null;
  photoW: number;
  photoH: number;
  photoPosition?: string; // objectPosition for crop focus, default 'top'
  bio: string[];
};

const team: Person[] = [
  {
    name: 'Евгений Васильев',
    role: 'Генеральный директор «Нест Капитал»',
    photo: '/images/vasiliev.jpg',
    photoW: 1707,
    photoH: 2560,
    photoPosition: '50% 45%',
    bio: [
      'В 1996 г. окончил факультет автоматики и вычислительной техники (ФАВТ) Санкт-Петербургского государственного электротехнического университета (ЛЭТИ). В этом же году получил степень МВА в бизнес-школе «ЛЭТИ-Лованиум».',
      'После окончания университета работал в компании «ПетерСтар», где последовательно занимал должности от специалиста по оборудованию УПАТС до начальника отдела планирования и развития.',
      'В 2000 г. занял должность заместителя директора дивизиона фиксированной связи ОАО «Телекоминвест». С 2003 г. — генеральный директор ЗАО «Нева Лайн». С 2004 г. — генеральный директор ЗАО «Петербург Транзит Телеком».',
      'В апреле 2006 г. назначен заместителем директора Департамента государственной политики в области инфокоммуникационных технологий Мининформсвязи РФ. С 2006 г. по 2008 г. возглавлял ДИКТ Мининформсвязи РФ.',
      'С 2008 г. — генеральный директор ЗАО «ПетерСтар». С июня 2010 г. совмещал с позицией первого заместителя директора Северо-Западного филиала ОАО «МегаФон» по фиксированной связи.',
      'С 2010 г. по 2021 г. — генеральный директор ОАО «МТТ». С ноября 2011 года — генеральный директор «Нест Капитал». С декабря 2018 г. — член Совета директоров «Нест Капитал».',
    ],
  },
  {
    name: 'Денис Широкий',
    role: 'Член Совета директоров «Нест Капитал»',
    photo: '/images/shirokiy.jpg',
    photoW: 1000,
    photoH: 1124,
    bio: [
      'В 2006 году окончил Международный институт экономики права и менеджмента в Нижнем Новгороде.',
      'Получил дополнительное образование в Университете прикладных наук в г. Кельн (Германия) по специальности «Системный анализ и построение сетей» и «Международный бизнес».',
      'С 2006 по 2010 год работал в различных региональных отделениях ОАО «ВымпелКом».',
      'С 2010 года по 2021 г. работал в ОАО «МТТ», где занимал должности коммерческого директора Уральского филиала, директора Южного филиала, руководителя Уральского филиала, коммерческого директора АО «МТТ», а с августа 2013 г. — заместителя генерального директора.',
      'С июля 2021 года — член Совета директоров «Нест Капитал».',
    ],
  },
  {
    name: 'Артур Акопьян',
    role: 'Член и председатель Совета директоров «Нест Капитал»',
    photo: null,
    photoW: 0,
    photoH: 0,
    bio: [
      'В 1995 году окончил Сочинский Государственный Университет по специальности «Экономика». В 2002 году окончил London Business School.',
      'С 1997 г. работает в сфере корпоративного финансирования в секторах телекоммуникаций, IT и медиа.',
      'С 2001 по 2008 год являлся финансовым директором «Петерстар», «Синтерра», «Рамблер Медиа». С 2008 г. — управляющий партнер венчурного фонда NGI.',
      'В 2012 г. присоединился к команде UFG Private Equity в качестве управляющего партнера.',
      'В сентябре 2013 года был избран председателем совета директоров ООО «Нест Капитал», в мае 2015 г. покинул этот пост. В июле 2021 г. вновь избран председателем Совета директоров «Нест Капитал».',
    ],
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<Person | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24,
        marginTop: 48,
      }}>
        {team.map(person => (
          <div key={person.name} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {person.photo ? (
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                overflow: 'hidden', marginBottom: 8, flexShrink: 0,
                border: '2px solid var(--border)',
              }}>
                <Image
                  src={person.photo} alt={person.name}
                  width={72} height={72}
                  style={{ objectFit: 'cover', objectPosition: person.photoPosition ?? 'top', width: '100%', height: '100%' }}
                />
              </div>
            ) : (
              <div style={{
                width: 72, height: 72, background: 'var(--bg-hover)',
                border: '1px solid var(--border)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, fontWeight: 700, color: 'var(--accent)',
                marginBottom: 8, flexShrink: 0,
              }}>
                {person.name.charAt(0)}
              </div>
            )}
            <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
              {person.name}
            </h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, flex: 1 }}>
              {person.role}
            </p>
            <button onClick={() => setSelected(person)} className="btn-outline" style={{ marginTop: 16 }}>
              Биография
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)',
          zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24, backdropFilter: 'blur(4px)',
          animation: 'backdropIn 0.2s ease',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            maxWidth: 600, width: '100%', maxHeight: '90vh', overflowY: 'auto',
            position: 'relative',
            animation: 'panelIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <button onClick={() => setSelected(null)} style={{
              position: 'absolute', top: 16, right: 16, background: 'none',
              border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
              padding: 4, lineHeight: 0, zIndex: 1,
            }} aria-label="Закрыть">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {selected.photo && (
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: 'var(--bg)' }}>
                <Image src={selected.photo} alt={selected.name}
                  width={selected.photoW} height={selected.photoH}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: selected.photoPosition ?? 'top' }}
                />
              </div>
            )}

            <div style={{ padding: '32px 36px 36px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                Биография
              </p>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                {selected.name}
              </h2>
              <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 24 }}>
                {selected.role}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {selected.bio.map((para, i) => (
                  <p key={i} style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
