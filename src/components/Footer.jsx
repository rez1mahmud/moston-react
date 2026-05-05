import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <a className="logo-link" href="#"><img className="logo-footer" src={logo} alt="Moston Property" /></a>
          <p className="footer-tagline">The Door Open For All. Sydney's trusted real estate agency — where professionalism meets personal care.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Buy</a></li>
            <li><a href="#services">Sell</a></li>
            <li><a href="#rent">Rent</a></li>
            <li><a href="#commercial">Commercial</a></li>
            <li><a href="#commercial">Relocation</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+61434287170">+61 434 287 170</a></li>
            <li><a href="mailto:hello@moston.com.au">hello@moston.com.au</a></li>
            <li><a href="#">mostonproperty.com</a></li>
            <li><a href="#">Sydney, NSW</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Moston Property. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
