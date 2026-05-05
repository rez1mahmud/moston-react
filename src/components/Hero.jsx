import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo-bg">
        <img src={heroImg} alt="Sydney Harbour" />
      </div>
      <div className="hero-geo">
        <svg viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
          <polygon points="500,0 500,280 240,0" fill="#4eb96f" opacity="0.18" />
          <polygon points="500,280 500,560 240,280" fill="#3a9a57" opacity="0.14" />
          <polygon points="240,0 500,280 240,280" fill="#2a8f4d" opacity="0.2" />
          <polygon points="240,280 500,560 240,560" fill="#4eb96f" opacity="0.1" />
          <polygon points="500,560 500,700 360,700 240,560" fill="#3a9a57" opacity="0.12" />
        </svg>
      </div>
      <div className="hero-left">
        <div className="hero-badge">Sydney's Trusted Real Estate Agency</div>
        <h1>Your Property<br />Journey Starts<br /><em>Here</em></h1>
        <p className="hero-sub">
          Moston Property — where professionalism meets personal care. Guided by integrity,
          insight, and commitment to meaningful outcomes for every client.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-green">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Explore Properties
          </a>
          <a href="#contact" className="btn-outline-w">Talk to an Agent</a>
        </div>
      </div>
    </section>
  );
}
