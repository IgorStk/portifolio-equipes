import { useState } from "react";
import { Link } from "react-router-dom";
import { teamsConfig } from "../data/teamsConfig";
export default function Home() {
  const [search, setSearch] = useState("");
  const filtered = teamsConfig.filter((team) =>
    `${team.name} ${team.number} ${team.description} ${team.category}`
      .toLocaleLowerCase("pt-BR")
      .includes(search.toLocaleLowerCase("pt-BR")),
  );
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-square" /> DESAFIO INTEGRADOR ·
            DESENVOLVIMENTO WEB
          </p>
          <h1>
            Ideias diferentes.
            <br />
            Um espaço <em>em comum.</em>
          </h1>
          <p className="hero-description">
            Um portfólio feito pela turma, para mostrar o que acontece quando
            criatividade, tecnologia e colaboração se encontram.
          </p>
          <a className="button" href="#equipes">
            Conhecer as equipes <span aria-hidden="true">+</span>
          </a>
          <div className="hero-note">
            <span className="avatar-stack" aria-hidden="true">
              <i>R</i>
              <i>V</i>
              <i>G</i>
            </span>
            <span>Várias perspectivas. Uma construção coletiva.</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="art-card art-card-back">
            <span>IDEIA + CÓDIGO</span>
            <b>
              Juntos,
              <br />
              faz sentido.
            </b>
            <div className="art-circle" />
          </div>
          <div className="art-card art-card-front">
            <span className="art-label">PORTFÓLIO COLETIVO</span>
            <div className="art-symbol">✳</div>
            <div className="art-card-bottom">
              <b>
                Feito em
                <br />
                equipe.
              </b>
              <span>
                REACT
                <br />+ VITE
              </span>
            </div>
          </div>
          <span className="art-sticker">
            criar.
            <br />
            conectar.
            <br />
            compartilhar.
          </span>
        </div>
      </section>
      <div className="principles">
        <div className="container principles-inner">
          <span>React + Vite</span>
          <span>Colaboração no GitHub</span>
          <span>Criatividade com IA</span>
          <span>Publicação na Vercel</span>
        </div>
      </div>
      <section id="equipes" className="container teams-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">QUEM FAZ ACONTECER</p>
            <h2>
              Conheça as equipes<span>.</span>
            </h2>
            <p>
              Cada equipe, uma ideia. Explore os projetos e as pessoas por trás
              deles.
            </p>
          </div>
          <label className="search-label">
            Buscar equipe
            <input
              type="search"
              placeholder="Nome, número ou tema"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
        <div className="team-grid">
          {filtered.map((team) => (
            <article
              className={`team-card theme-${Number(team.number) % 3}`}
              key={team.id}
            >
              <div className="team-card-top">
                <span className="team-number">{team.number}</span>
                <span className="team-status">
                  {team.ready ? "Template disponível" : "Em preparação"}
                </span>
              </div>
              <span className="category">{team.category}</span>
              <h3>{team.name}</h3>
              <p>{team.description}</p>
              <Link className="team-link" to={`/equipes/${team.id}`}>
                {team.ready ? "Conhecer a equipe" : "Ver espaço da equipe"}
                <span aria-hidden="true">+</span>
              </Link>
            </article>
          ))}
        </div>
        {!filtered.length && (
          <p className="empty-search" role="status">
            Nenhuma equipe encontrada. Tente outro nome, número ou tema.
          </p>
        )}
      </section>
      <section id="sobre" className="about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">O DESAFIO</p>
            <h2>
              Uma aula para construir.
              <br />
              Uma turma para somar.
            </h2>
          </div>
          <div>
            <p>
              Este espaço reúne as entregas do Desafio Integrador: páginas
              criadas em React + Vite, com vídeo de referência, apresentação do
              projeto e ficha técnica de cada integrante.
            </p>
            <p>
              A inteligência artificial faz parte do processo como apoio à
              criação. A autoria, a compreensão do código e a integração são
              trabalho de cada equipe.
            </p>
            <div className="about-tags">
              <span>Código compartilhado</span>
              <span>Identidade própria</span>
              <span>Aprendizado coletivo</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
