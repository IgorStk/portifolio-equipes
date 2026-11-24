import { Link } from "react-router-dom";
import "./styles.css";
import teamPhoto from "./assets/equipe-07.webp";

const MOLLIRE_URL = "https://mollire.com.br";
const AEDRIA_URL = "https://aedria.com.br";

const members = [
  { name: "Igor Roberto Freitas Barbosa", role: "Dev FullStack" },
  { name: "Vitor Brito Rocha", role: "DevOps / Dev FullStack" },
  { name: "Michael David Amâncio Justo Filho", role: "Dev FullStack" },
  { name: "João Pedro Sales Melo", role: "DevOps / Engenheiro de Cloud" },
];

const steps = [
  {
    title: "Conecte o repositório",
    text: "Conta GitHub ou URL Git pública, com nome, slug, branch e pasta do projeto.",
  },
  {
    title: "Cada push vira um deploy",
    text: "Build isolado em Docker, log ao vivo e histórico com rollback por commit.",
  },
  {
    title: "Site no ar",
    text: "Publicação em seu-projeto.mollire.com.br, com HTTPS e monitoramento de disponibilidade.",
  },
];

// Preencham com a URL de embed (YouTube/Vimeo) e a referência quando o vídeo estiver pronto.
const video = { embedUrl: "", reference: "" };

export default function Equipe07() {
  return (
    <div className="equipe07 container">
      <Link className="back-link" to="/">
        Todas as equipes
      </Link>
      <p className="eyebrow">EQUIPE 07 · MOLLIRE</p>
      <h1>
        Publique.
        <br />
        <span>Acompanhe cada deploy.</span>
      </h1>
      <p className="equipe07-intro">
        Desenvolvemos o Mollire, uma plataforma para publicar frontends
        estáticos a partir de repositórios Git e acompanhar os projetos da
        turma em um painel centralizado.
      </p>
      <a
        className="button"
        href={MOLLIRE_URL}
        target="_blank"
        rel="noreferrer"
      >
        Acessar o Mollire
      </a>

      <section className="equipe07-panel equipe07-about">
        <h2>Sobre a entrega</h2>
        <p>
          Configurar hospedagem para cada equipe exige repetir instalação,
          publicação e roteamento. O Mollire reúne essas etapas em um fluxo
          único: o usuário cadastra o projeto, inicia o deploy e a plataforma
          prepara os arquivos e os publica em um subdomínio, mantendo histórico
          e logs de cada execução.
        </p>
        <p>
          Além da publicação, a plataforma organiza turmas e equipes, recebe a
          submissão dos projetos para avaliação do professor e oferece uma
          galeria pública com estrelas e comentários.
        </p>
        <h3>Como usamos IA</h3>
        <p>
          Utilizamos IA como apoio no desenvolvimento do Mollire, na revisão da
          documentação do plano de trabalho e na construção desta página do
          portfólio. Todo o código foi revisado e integrado pela equipe.
        </p>
      </section>

      <section className="equipe07-flow">
        <p className="eyebrow">COMO FUNCIONA</p>
        <h2>Do repositório ao site no ar</h2>
        <ol className="equipe07-steps">
          {steps.map((step, index) => (
            <li className="equipe07-panel" key={step.title}>
              <span className="equipe07-step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="equipe07-stack">
          <strong>Stack:</strong> React, TypeScript e Vite no painel; NestJS,
          Prisma e PostgreSQL (Supabase) na API; Docker e Nginx em VPS Linux
          para os builds e os sites publicados.
        </p>
      </section>

      {video.embedUrl && (
        <section className="equipe07-panel equipe07-video">
          <h2>Vídeo e referência</h2>
          <iframe
            src={video.embedUrl}
            title="Vídeo da Equipe 07"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          {video.reference && (
            <p>
              <strong>Referência:</strong> {video.reference}
            </p>
          )}
        </section>
      )}

      <section className="equipe07-members">
        <p className="eyebrow">AS PESSOAS POR TRÁS DO PROJETO</p>
        <h2>Nossa equipe</h2>
        <p className="equipe07-team-text">
          Somos quatro desenvolvedores que dividem o trabalho entre aplicação e
          infraestrutura: o front-end, a API e o banco caminham junto com a
          VPS, os containers de build e o roteamento dos sites. Fora da sala,
          também formamos a Aedria, onde desenvolvemos software sob medida e
          mantemos o Mollire em produção.
        </p>
        <div className="equipe07-team">
          <div className="equipe07-member-grid">
            {members.map((member) => (
              <article className="equipe07-panel" key={member.name}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
          <img
            className="equipe07-photo"
            src={teamPhoto}
            alt="Foto dos quatro integrantes da Equipe 07 reunidos"
            width="825"
            height="1100"
            loading="lazy"
          />
        </div>
        <div className="equipe07-aedria">
          <div>
            <h3>Conheça a Aedria</h3>
            <p>
              Nossa empresa de soluções em software: sistemas web, automação,
              integrações e infraestrutura.
            </p>
          </div>
          <a
            className="button"
            href={AEDRIA_URL}
            target="_blank"
            rel="noreferrer"
          >
            Visitar a Aedria
          </a>
        </div>
      </section>
    </div>
  );
}
