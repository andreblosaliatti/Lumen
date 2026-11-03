import { experiences } from "../data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  return (
    <section id="experiencias" className="experiences-section">
      <div className="section-heading">
        <p className="eyebrow">QUATRO CAMINHOS, UMA ESSÊNCIA</p>
        <h2>Encontre a sua experiência na LUMEN.</h2>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.number}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
