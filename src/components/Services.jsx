import buyImg from '../assets/buy.jpg';
import sellImg from '../assets/sell.jpg';
import relocImg from '../assets/relocation.jpg';

const services = [
  {
    img: buyImg, alt: 'Buy Property in Sydney', dark: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Buy',
    desc: "Buying a property is more than a transaction — it's a milestone. We provide thoughtful guidance and deep local market knowledge to help you find a home that truly aligns with your needs and aspirations.",
    cta: 'Start your search →',
  },
  {
    img: sellImg, alt: 'Sell Property in Sydney', dark: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
      </svg>
    ),
    title: 'Sell',
    desc: 'Your property deserves to be presented at its best. We create tailored marketing strategies that showcase its unique qualities, attract discerning buyers, and achieve outstanding results.',
    cta: 'Get a market appraisal →',
  },
  {
    img: relocImg, alt: 'Relocate to Sydney', dark: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: 'Relocation to Sydney',
    desc: 'Moving to Sydney is the start of a new chapter. We offer customised relocation services designed to meet your unique needs — from finding the perfect neighbourhood to securing the right property.',
    cta: 'Plan your move →',
  },
];

export default function Services() {
  return (
    <section className="services-bg" id="services">
      <div className="srv-header fade-up">
        <div>
          <div className="lbl">Our Services</div>
          <h2 className="ttl">Everything You Need to<br /><span>Buy or Sell</span></h2>
        </div>
        <p className="dsc" style={{ marginTop: 0, maxWidth: 380 }}>
          From first enquiry to settlement, we guide you with clarity, care, and confidence every step of the way.
        </p>
      </div>
      <div className="srv-grid">
        {services.map((s) => (
          <div key={s.title} className={`srv-card fade-up${s.dark ? ' dark' : ''}`}>
            <img className="srv-card-photo" src={s.img} alt={s.alt} />
            <div className="srv-card-body">
              <div className="srv-ico">{s.icon}</div>
              <div className="srv-title">{s.title}</div>
              <p className="srv-desc">{s.desc}</p>
              <a href="#contact" className="srv-link">{s.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
