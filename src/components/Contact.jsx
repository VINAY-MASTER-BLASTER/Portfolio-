import { useInView } from 'react-intersection-observer';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const socials = [
  {
    name: 'Email',
    icon: <HiOutlineMail />,
    value: 'vinaytoppo145@gamil.com',
    href: 'mailto:vinaytoppo145@gamil.com',
    color: '#f59e0b',
  },
  {
    name: 'GitHub',
    icon: <SiGithub />,
    value: 'github.com/vinay',
    href: 'https://github.com/VINAY-MASTER-BLASTER',
    color: '#c9d1d9',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    value: 'linkedin.com/in/vinay',
    href: 'https://linkedin.com/in/v',
    color: '#0a66c2',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__wrapper">
          <div className={`contact__content reveal ${inView ? 'visible' : ''}`}>
            <span className="section-label">Contact</span>
            <h2 className="contact__title">
              Let's build something <span className="gradient-text">great together</span>
            </h2>
            <p className="contact__subtitle">
              I'm always open to new opportunities, collaborations, or just a 
              friendly conversation about web development. Feel free to reach out!
            </p>

            <a
              href="mailto:vinay@example.com"
              className="btn btn-primary contact__cta"
            >
              Say Hello <HiArrowRight />
            </a>
          </div>

          <div className={`contact__cards reveal ${inView ? 'visible' : ''} reveal-delay-2`}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="contact__card glass-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="contact__card-icon"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </div>
                <div className="contact__card-info">
                  <span className="contact__card-name">{social.name}</span>
                  <span className="contact__card-value">{social.value}</span>
                </div>
                <HiArrowRight className="contact__card-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
