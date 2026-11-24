import { SKILL_GROUPS } from '../data/content';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner reveal">
        <div className="eyebrow">capabilities</div>
        <h2 className="section-title">Skills &amp; tools</h2>
        <div className="skill-groups reveal-stagger">
          {SKILL_GROUPS.map((group) => (
            <div className="reveal-item" id={group.id} key={group.id}>
              <span className="skill-group-label">
                {group.label}
                {group.note && <em> {group.note}</em>}
              </span>
              <div className="chip-row">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
