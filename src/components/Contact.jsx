import sketchImg from '../assets/sketch.png';

const contacts = [
  {
    label: 'Phone', value: '+61 434 287 170',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4db56f" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>,
  },
  {
    label: 'Email', value: 'hello@moston.com.au',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4db56f" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: 'Website', value: 'www.mostonproperty.com',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4db56f" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>,
  },
  {
    label: 'Location', value: 'Sydney, NSW, Australia',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4db56f" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 0, overflow: 'hidden', position: 'relative', minHeight: 560 }}>
      {/* Background sketch */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={sketchImg}
          alt="Property sketch"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,39,68,0.96) 0%, rgba(26,39,68,0.85) 38%, rgba(26,39,68,0.3) 65%, rgba(26,39,68,0.0) 100%)' }} />
      </div>

      {/* Contact info */}
      <div className="fade-up" style={{ position: 'relative', zIndex: 2, padding: '80px 60px', maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 560 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 28, height: 2, background: '#6dd48a', display: 'inline-block' }} />
          <span style={{ color: '#6dd48a', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Get in Touch</span>
        </div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
          Let's Start Your<br />Property <span style={{ color: '#4db56f' }}>Journey</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 40, maxWidth: 420 }}>
          We would love to hear from you. Whether you are buying, selling, renting, leasing, or relocating,
          we offer personalised guidance and attentive support at every step.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {contacts.map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(77,181,111,0.18)', border: '1px solid rgba(77,181,111,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>{c.label}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
