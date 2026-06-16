import { workdeskData } from "../../data/mockData";
import { ContentCard } from "../ContentCard";

export function WorkdeskSection() {
  return (
    <div className="section-grid workdesk-grid">
      <ContentCard className="projects-card" label="01" title="Current projects">
        <div className="project-list">
          {workdeskData.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <span>{project.category}</span>
                <strong>{project.title}</strong>
              </div>
              <em>{project.status}</em>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </ContentCard>

      <ContentCard className="research-card" label="02" title="Research / technical work">
        <div className="research-list">
          {workdeskData.research.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      </ContentCard>

      <ContentCard className="timeline-card" label="03" title="Timeline">
        <ol className="timeline">
          {workdeskData.timeline.map(([time, text]) => (
            <li key={time}>
              <span>{time}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </ContentCard>

      <ContentCard className="skills-card" label="04" title="Skills and tools">
        <div className="skill-tags">
          {workdeskData.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </ContentCard>
    </div>
  );
}
