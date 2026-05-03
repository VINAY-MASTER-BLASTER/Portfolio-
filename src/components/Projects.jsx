import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiReact, SiJavascript, SiCss, SiHtml5 } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    title: 'Image Converter',
    description:
      'A powerful image conversion tool that lets users convert images between multiple formats. Supports PNG, JPG, and WebP with advanced size control, batch processing, and file optimization — all right in the browser.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#6c5ce7',
    emoji: '🖼️',
  },
  {
    title: 'AI Video Editor Concept',
    description:
      'An AI-assisted video editing concept focused on simplifying the editing workflow for content creators. Designed to boost productivity with intelligent automation, quick cuts, and creator-first UX thinking.',
    tech: ['React.js', 'AI Workflow', 'UI/UX'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#a78bfa',
    emoji: '🎬',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very website — a modern, responsive portfolio built from scratch with React. Features smooth animations, glassmorphism design, dark theme, and a clean component-based architecture.',
    tech: ['React.js', 'CSS', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#',
    accent: '#c084fc',
    emoji: '💻',
  },
];

const techIcons = {
  'React.js': <SiReact />,
  'JavaScript': <SiJavascript />,
  'CSS': <SiCss />,
  'HTML': <SiHtml5 />,
};

function ProjectCard({ project, index, inView }) {
  return (
    <div className={`project-card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${index + 1}`}>
      <div className="project-card__header">
        <span className="project-card__emoji">{project.emoji}</span>
        <div className="project-card__links">
          <a
            href={project.githubUrl}
            className="project-card__link"
            title="View Source Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiCode />
          </a>
          <a
            href={project.liveUrl}
            className="project-card__link project-card__link--primary"
            title="Live Demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiExternalLink />
          </a>
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t} className="project-card__tech-tag">
            {techIcons[t] && <span className="project-card__tech-icon">{techIcons[t]}</span>}
            {t}
          </span>
        ))}
      </div>

      <div className="project-card__bottom">
        <a
          href={project.liveUrl}
          className="btn btn-primary btn-small"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo <HiExternalLink />
        </a>
        <a
          href={project.githubUrl}
          className="btn btn-secondary btn-small"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiCode /> Source Code
        </a>
      </div>

      <div
        className="project-card__glow"
        style={{ '--project-accent': project.accent }}
      />
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle">
            Real projects where I applied my skills, solved problems, 
            and learned something new with each one.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
