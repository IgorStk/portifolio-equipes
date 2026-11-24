import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const opener = document.activeElement;
    const overflow = document.body.style.overflow;
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      aria-describedby="project-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== ref.current) return;
        const bounds = ref.current.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          onClose();
      }}
    >
      <div className="project-dialog-content">
        <button
          className="dialog-close"
          type="button"
          aria-label="Fechar projeto"
          onClick={onClose}
          autoFocus
        >
          ×
        </button>
        <img className="dialog-logo" src={project.logo} alt="" />
        <p className="eyebrow">{project.category}</p>
        <h2 id="project-title">
          {project.titleLogo ? (
            <img
              src={project.titleLogo}
              alt={project.name}
              style={{ display: "block", height: "3.4rem", width: "auto", maxWidth: "100%" }}
            />
          ) : (
            project.name
          )}
        </h2>
        <p id="project-description">{project.description}</p>
        <figure className="prototype-figure">
          {project.prototype ? (
            <>
              <img
                src={project.prototype}
                alt={project.prototypeAlt || `Protótipo de ${project.name}`}
              />
              {project.prototypeCaption && (
                <figcaption>{project.prototypeCaption}</figcaption>
              )}
            </>
          ) : (
            <div className="prototype-placeholder">
              <span aria-hidden="true">▧</span>
              <p>Imagem do protótipo em breve.</p>
            </div>
          )}
        </figure>
        <div className="project-actions">
          {project.deployUrl ? (
            <a
              className="button"
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
            >
              Acessar o site
            </a>
          ) : (
            <button className="button" disabled>
              Deploy em breve
            </button>
          )}
          <Link to={`/equipes/${project.id}`} onClick={onClose}>
            Conhecer a equipe
          </Link>
        </div>
      </div>
    </dialog>
  );
}
