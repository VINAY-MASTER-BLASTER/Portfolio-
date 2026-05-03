import { useInView } from 'react-intersection-observer';
import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import './About.css';

const highlights = [
  {
    icon: <HiCode />,
    title: 'Clean Code',
    description: 'Writing maintainable, well-structured code that scales',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks',
  },
  {
    icon: <HiSparkles />,
    title: 'Detail Oriented',
    description: 'Pixel-perfect implementation with smooth interactions',
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about building <span className="gradient-text">for the web</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className={`about__story reveal ${inView ? 'visible' : ''} reveal-delay-1`}>
            <p className="about__text">
              Hey there! I'm Vinay, a web developer who loves building things that live on the internet. 
              My journey started with curiosity about how websites work, and that curiosity turned into a 
              genuine passion for creating digital experiences.
            </p>
            <p className="about__text">
              I enjoy the entire process of development — from understanding a problem, designing an 
              intuitive interface, to writing clean code that brings it all together. Every project I 
              take on is an opportunity to learn something new and push my skills further.
            </p>
            <p className="about__text">
              Right now, I'm focused on building real-world projects, deepening my React.js expertise, 
              and exploring how modern technologies like AI can enhance the products we build. I believe 
              in shipping work, learning by doing, and continuously improving.
            </p>

            <div className="about__philosophy">
              <div className="about__philosophy-line" />
              <p className="about__philosophy-text">
                "Build. Ship. Learn. Repeat."
              </p>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`about__highlight glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${index + 1}`}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h3 className="about__highlight-title">{item.title}</h3>
                  <p className="about__highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
