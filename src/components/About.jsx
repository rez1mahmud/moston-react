import aboutImg from '../assets/about.jpg';

const values = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    title: 'Integrity First',
    desc: 'Every decision we make is guided by honesty and transparency with our clients.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
    title: 'Deep Local Insight',
    desc: 'Years of Sydney market expertise working for your advantage.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
    title: 'Personal Attention',
    desc: 'Dedicated support from your very first enquiry to final settlement.',
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-vis fade-up">
          <div className="about-img" style={{ paddingBottom: 0, height: '100%', minHeight: 400, borderRadius: 18, overflow: 'hidden', position: 'relative' }}>
            <img
              src={aboutImg}
              alt="Sydney Harbour — Moston Property"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, display: 'block' }}
            />
          </div>
          <div className="about-cert">
            <div className="cert-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <div className="cert-t">Licensed Agency</div>
              <div className="cert-s">NSW Fair Trading</div>
            </div>
          </div>
        </div>

        <div className="fade-up">
          <div className="lbl">About Us</div>
          <h2 className="ttl">Where Professionalism<br />Meets <span>Personal Care</span></h2>
          <p className="dsc">
            Moston Property is a Sydney-based real estate agency guided by integrity, insight, and a commitment
            to achieving meaningful outcomes for every client. Every interaction is built on trust, attention to
            detail, and dedication to making your property journey seamless and rewarding.
          </p>
          <div className="about-vals">
            {values.map((v) => (
              <div key={v.title} className="about-val">
                <div className="val-ico">{v.icon}</div>
                <div>
                  <div className="val-t">{v.title}</div>
                  <div className="val-d">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
