export default function Commercial() {
  return (
    <div className="extra-wrap" id="commercial">
      <div className="extra-card comm fade-up">
        <div className="extra-bg">
          <svg viewBox="0 0 160 160" fill="white">
            <rect x="10" y="10" width="60" height="140" />
            <rect x="90" y="50" width="60" height="100" />
            <rect x="10" y="10" width="140" height="8" />
          </svg>
        </div>
        <div className="extra-lbl">Commercial</div>
        <h3>Office, Retail &amp;<br />Commercial Spaces</h3>
        <p>Tailored solutions for commercial landlords and tenants across Sydney. Expert guidance, strategic leasing support, and personalised service for the commercial market.</p>
        <a href="#contact">Enquire Now →</a>
      </div>

      <div className="extra-card reloc fade-up">
        <div className="extra-bg">
          <svg viewBox="0 0 160 160" fill="white">
            <circle cx="80" cy="65" r="42" />
            <path d="M38 140 Q80 110 122 140" />
          </svg>
        </div>
        <div className="extra-lbl">Relocation to Sydney</div>
        <h3>Start Your New<br />Sydney Chapter</h3>
        <p>Moving to Sydney is exciting — we make it simple and stress-free. Customised relocation services from finding the perfect neighbourhood to securing the right property.</p>
        <a href="#contact">Plan Your Move →</a>
      </div>
    </div>
  );
}
