import { useState } from "react";
import { teamsConfig } from "../data/teamsConfig";
import ProjectModal from "../components/ProjectModal";
export default function Home() {
  const [selected, setSelected] = useState(null);
  const projects = [...teamsConfig].sort(
    (a, b) => Number(a.number) - Number(b.number),
  );
  return (
    <>
      <section className="portfolio-landing container" id="equipes">
        <div className="portfolio-intro">
          <p className="eyebrow">DESENVOLVIMENTO WEB · UNIFOR</p>
          <h1>
            Projetos da turma.
            <br />
            <span>Seis equipes, novas ideias.</span>
          </h1>
          <p>
            Explore as entregas da turma.
            <br />
            Selecione uma logo para explorar cada experiência.
          </p>
        </div>
        <div className="project-logo-grid">
          {projects.map((project) => (
            <button
              key={project.id}
              className="project-logo-card"
              type="button"
              aria-label={`Conhecer o projeto ${project.name}`}
              aria-haspopup="dialog"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.logo}
                alt={project.name}
                loading="eager"
                draggable="false"
              />
            </button>
          ))}
        </div>
        <p className="portfolio-hint">
          Selecione um projeto para conhecer a proposta.
        </p>
      </section>
      <section id="sobre" className="portfolio-about container">
        <span className="eyebrow">O DESAFIO</span>
        <p>
          Uma turma, diferentes perspectivas. Projetos desenvolvidos em React +
          Vite, com colaboração no GitHub e apoio de inteligência artificial
          durante a criação.
        </p>
      </section>
      {selected && (
        <ProjectModal
          key={selected.id}
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
