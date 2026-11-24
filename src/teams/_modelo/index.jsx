import { Link } from "react-router-dom";
import "./styles.css";
// Substituam os textos de exemplo pelos dados reais antes da apresentação.
const members = [];
const video = { embedUrl: "", reference: "" };
export default function Equipe06() {
  return (
    <div className="equipe06 container">
      <Link className="back-link" to="/">
        Todas as equipes
      </Link>
      <p className="eyebrow">EQUIPE 06 · BASE E INTEGRAÇÃO</p>
      <h1>
        A conexão entre
        <br />
        todas as ideias.
      </h1>
      <p className="equipe06-intro">
        Somos a equipe responsável pela estrutura compartilhada do portfólio: a
        vitrine, a navegação, o registro das equipes e a preparação do deploy.
      </p>
      <div className="equipe06-columns">
        <section className="equipe06-panel">
          <h2>Sobre a entrega</h2>
          <p>
            React + Vite na interface, GitHub para integrar as contribuições e
            Vercel para publicar o resultado coletivo. Cada grupo mantém sua
            identidade dentro da própria pasta.
          </p>
          <h3>Como usamos IA</h3>
          <p>
            Utilizamos IA como apoio à criação do template, à organização dos
            componentes e à documentação. A equipe deve revisar o código e
            compreender suas decisões para a apresentação.
          </p>
        </section>
        <section className="equipe06-panel">
          <h2>Vídeo e referência</h2>
          {video.embedUrl ? (
            <iframe
              src={video.embedUrl}
              title="Vídeo da Equipe 06"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="equipe06-video-placeholder">
              <span aria-hidden="true">▷</span>
              <p>Espaço reservado para o vídeo da equipe.</p>
              <small>
                Adicionem o embed e a referência no arquivo desta página.
              </small>
            </div>
          )}
          <p>
            <strong>Referência:</strong>{" "}
            {video.reference ||
              "A preencher pela equipe: fonte, inspiração ou roteiro utilizado."}
          </p>
        </section>
      </div>
      <section className="equipe06-members">
        <p className="eyebrow">AS PESSOAS POR TRÁS DO PROJETO</p>
        <h2>Nossa equipe</h2>
        {members.length ? (
          <div className="equipe06-member-grid">
            {members.map((member) => (
              <article className="equipe06-panel" key={member.name}>
                <h3>{member.name}</h3>
                <p>
                  <strong>{member.role}</strong>
                </p>
                <p>{member.skills}</p>
                <p>{member.bio}</p>
                {member.url && (
                  <a href={member.url} target="_blank" rel="noreferrer">
                    Perfil profissional
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="equipe06-panel">
            Preencham a lista <code>members</code> com nome completo, papel na
            atividade, habilidades e mini-bio de cada integrante. Nenhum dado
            pessoal foi presumido.
          </p>
        )}
      </section>
    </div>
  );
}
