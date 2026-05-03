import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiHeart } from 'react-icons/hi';
import './Footer.css';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <SiGithub />, href: 'https://github.com/vinay', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/vinay', label: 'LinkedIn' },
  { icon: <HiOutlineMail />, href: 'mailto:vinay@example.com', label: 'Email' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={(e) => handleClick(e, '#hero')}>
              <span className="footer__logo-symbol">V</span>inay
            </a>
            <p className="footer__tagline">
              Building modern web experiences, one component at a time.
            </p>
          </div>

          <nav className="footer__nav">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__link"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Vinay. Crafted with <HiHeart className="footer__heart" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
}
