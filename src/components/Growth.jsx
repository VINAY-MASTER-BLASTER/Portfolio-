import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLightBulb, HiCube, HiTrendingUp } from 'react-icons/hi';
import './Growth.css';

const growthItems = [
  {
    icon: <HiAcademicCap />,
    title: 'Deepening React.js Skills',
    description:
      'Building more complex applications, exploring hooks patterns, context, performance optimization, and component design that scales.',
    status: 'In Progress',
  },
  {
    icon: <HiLightBulb />,
    title: 'Exploring AI-Assisted Development',
    description:
      'Investigating how artificial intelligence can speed up development workflows, improve code quality, and create smarter product experiences.',
    status: 'Exploring',
  },
  {
    icon: <HiCube />,
    title: 'Learning to Build SaaS Products',
    description:
      'Understanding the full lifecycle of building software-as-a-service — from ideation to architecture to delivering value to real users.',
    status: 'Learning',
  },
  {
    icon: <HiTrendingUp />,
    title: 'Building Real-World Projects',
    description:
      'Actively shipping projects that solve real problems. Every project is a chance to practice decision-making, debugging, and delivering production-quality work.',
    status: 'Ongoing',
  },
];

export default function Growth() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section growth" id="growth" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Growth</span>
          <h2 className="section-title">
            Always <span className="gradient-text">learning & growing</span>
          </h2>
          <p className="section-subtitle">
            Development is a continuous journey. Here's what I'm 
            currently focused on to level up my skills.
          </p>
        </div>

        <div className="growth__grid">
          {growthItems.map((item, index) => (
            <div
              key={item.title}
              className={`growth__card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${index + 1}`}
            >
              <div className="growth__card-top">
                <div className="growth__icon">{item.icon}</div>
                <span className="growth__status">{item.status}</span>
              </div>
              <h3 className="growth__title">{item.title}</h3>
              <p className="growth__desc">{item.description}</p>
              <div className="growth__progress">
                <div
                  className="growth__progress-bar"
                  style={{ '--progress-delay': `${0.5 + index * 0.15}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
