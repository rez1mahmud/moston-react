const rentCards = [
  {
    cls: 'll',
    tag: 'For Landlords',
    title: 'Protect & Maximise Your Investment',
    desc: 'We manage your investment with diligence and care. Through careful tenant selection, attentive management, and proactive oversight, we protect its value while maximising performance.',
    items: [
      'Thorough tenant screening & selection',
      'Rent collection & financial reporting',
      'Routine property inspections',
      'Proactive lease renewal management',
      'Dedicated property manager assigned',
    ],
    cta: 'Enquire as a landlord →',
  },
  {
    cls: 'tn',
    tag: 'For Tenants',
    title: 'Find Your Perfect Rental Home',
    desc: 'Renting should feel effortless and secure. We provide quality homes, clear guidance, and ongoing support to ensure your experience is smooth, comfortable, and stress-free.',
    items: [
      'Wide selection of quality Sydney homes',
      'Transparent rental application process',
      'Responsive maintenance request handling',
      'Clear lease documentation & guidance',
      'Ongoing tenancy support team',
    ],
    cta: 'Search rental homes →',
  },
];

export default function Rent() {
  return (
    <section className="rent-bg" id="rent">
      <div className="fade-up" style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 8px' }}>
        <div className="lbl" style={{ justifyContent: 'center' }}>Rental Services</div>
        <h2 className="ttl" style={{ textAlign: 'center' }}>Renting Made <span>Simple</span></h2>
        <p className="dsc" style={{ margin: '14px auto 0', textAlign: 'center' }}>
          Whether you're a landlord protecting your investment or a tenant seeking a quality home, we're here for you.
        </p>
      </div>
      <div className="rent-grid">
        {rentCards.map((c) => (
          <div key={c.cls} className={`rent-card ${c.cls} fade-up`}>
            <div className="rent-tag">{c.tag}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <ul className="rent-list">
              {c.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href="#contact" className="rent-cta">{c.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
