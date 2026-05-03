import { useInView } from 'react-intersection-observer';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiGit, SiGithub, SiVscodium,
  SiExpress, 
  SiNodedotjs,
  SiTailwindcss,
  SiNpm,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiReactrouter
} from 'react-icons/si';
import {
  HiDeviceMobile, HiCube, HiGlobeAlt, HiDatabase, HiEye,
} from 'react-icons/hi';
import './Skills.css';
import { SlCallIn, SlInfo } from 'react-icons/sl';

const skillGroups = [
  {
    category: 'FullStack',
    skills: [
      { name: 'HTML', icon: <SiHtml5 />, color: '#e34f26' },
      { name: 'CSS', icon: <SiCss />, color: '#1572b6' },
      { name: 'Tailwindcss ', icon: <SiTailwindcss />, color: '#06B6D4 ' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'React.js', icon: <SiReact />, color: '#61dafb' },
      { name: 'React Router ', icon: <SiReactrouter />, color: '#CA4242' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      { name: 'Node.JS', icon: <SiNodedotjs/>, color: '#339933 ' },
      { name: 'Express.js', icon: <SiExpress  />, color: '#8b8b8b ' },
      { name: 'MongoDB', icon: <SiMongodb  />, color: '#00ED64 ' },
      { name: 'Mongoose ', icon: <SiMongoose />, color: '#880000  ' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#c9d1d9' },
      { name: 'VS Code', icon: <SiVscodium />, color: '#007acc' },
      { name: 'NPM', icon: <SiNpm/>, color: '#CC3534 ' },
    ],
  },
  {
    category: 'Concepts',
    skills: [
      { name: 'Responsive Design', icon: <HiDeviceMobile />, color: '#a78bfa' },
      { name: 'Component Architecture', icon: <HiCube />, color: '#6c5ce7' },
      { name: 'API Integration', icon: <HiGlobeAlt />, color: '#22c55e' },
      { name: 'State Management', icon: <HiDatabase />, color: '#f59e0b' },
      { name: 'UI/UX Thinking', icon: <HiEye />, color: '#ec4899' },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">concepts I work with</span>
          </h2>
          <p className="section-subtitle">
            A constantly growing toolkit — focused on building modern, 
            maintainable, and user-centric web applications.
          </p>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group, gIndex) => (
            <div
              key={group.category}
              className={`skills__group reveal ${inView ? 'visible' : ''} reveal-delay-${gIndex + 1}`}
            >
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skills__card glass-card">
                    <div
                      className="skills__icon"
                      style={{ color: skill.color, '--skill-color': skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
