import { ArrowUpRight } from "lucide-react";
import type { Experience } from "../data/experiences";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className={`experience-card experience-card--${experience.accent}`}>
      <div className="card-topline">
        <span className="card-number">{experience.number}</span>
        <img
          className="experience-icon"
          src={experience.icon}
          alt=""
          width="54"
          height="54"
          loading="lazy"
        />
      </div>
      <p className="experience-name">{experience.name}</p>
      <h3>{experience.title}</h3>
      <p className="experience-description">{experience.description}</p>
      {experience.image && (
        <img
          className="experience-image"
          src={experience.image}
          alt={experience.imageAlt ?? ""}
          width="1672"
          height="941"
          loading="lazy"
        />
      )}
      {experience.video && (
        <video
          className={`experience-video${experience.videoPresentation ? ` experience-video--${experience.videoPresentation}` : ""}`}
          aria-label={`Vídeo ${experience.name}`}
          autoPlay={experience.videoPresentation === "ambient"}
          controls={experience.videoPresentation !== "ambient"}
          loop={experience.videoPresentation === "ambient"}
          muted={experience.videoPresentation === "ambient"}
          playsInline
          preload={experience.videoPresentation === "ambient" ? "auto" : "none"}
          poster={experience.videoPoster}
        >
          <source src={experience.video} type="video/mp4" />
          Seu navegador não oferece suporte à reprodução de vídeo.
        </video>
      )}
      <a className="card-link" href="#contato">
        <span>Conheça a experiência</span>
        <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </article>
  );
}
