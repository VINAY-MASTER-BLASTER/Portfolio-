import { useEffect, useState } from 'react';
import { HiArrowRight, HiOutlineMail } from 'react-icons/hi';
import './Hero.css';

const roles = ['Web Developer', 'React Developer', 'UI Builder', 'Problem Solver', 'Front-End Developer', 'Back-End Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero__title">
          Hi, I'm <span className="hero__name">Vinay</span>
        </h1>

        <div className="hero__role-wrapper">
          <span className="hero__role-prefix">I'm a </span>
          <span className="hero__role">
            {displayText}
            <span className="hero__cursor">|</span>
          </span>
        </div>

        <p className="hero__description">
          I build modern, responsive, and user-friendly web applications. 
          Passionate about turning ideas into real products and creating 
          experiences that users genuinely enjoy.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View Projects <HiArrowRight />
          </a>
          <a href="#contact" className="btn btn-secondary">
            <HiOutlineMail /> Contact Me
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Projects Built</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">8+</span>
            <span className="hero__stat-label">Technologies</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">∞</span>
            <span className="hero__stat-label">Curiosity</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
