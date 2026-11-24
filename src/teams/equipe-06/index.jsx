import { Link } from "react-router-dom";
import "./styles.css";

const members = [
  { name: "Gabriel Meneses", role: "Ideia inicial e gerenciamento" },
  { name: "Yuri Freitas", role: "Design, UI e UX" },
  { name: "Fernando Heck", role: "Back-End" },
  { name: "Pedro Átila", role: "Front-End" },
  {
    name: "Gabriel Mascarenhas",
    role: "Conexão do Banco de Dados com Back-end e Testes",
  },
];

export default function Equipe06() {
  return (
    <div className="equipe06 container">
      <Link className="back-link" to="/">
        Todas as equipes
      </Link>
      <p className="eyebrow">EQUIPE 06 · MEDTRACK</p>
      <h1>
        A conexão entre
        <br />
        pessoas e cuidado.
      </h1>
      <p className="equipe06-intro">
        Desenvolvemos o MedTrack para organizar as informações de consultas e
        aproximar pacientes e profissionais de saúde antes e depois do
        atendimento. Também somos responsáveis pela base e integração deste
        portfólio da turma.
      </p>
      <section className="equipe06-panel equipe06-about">
        <h2>Sobre a entrega</h2>
        <p>
          O MedTrack reúne preparação pré-consulta, agenda, orientações e
          acompanhamento. A interface se conecta ao back-end e ao banco de
          dados, com testes dos fluxos da API e das telas.
        </p>
        <h3>Como usamos IA</h3>
        <p>
          Utilizamos IA como apoio à criação de interfaces, à organização dos
          componentes, à documentação e à preparação de testes.
        </p>
      </section>
      <section className="equipe06-members">
        <p className="eyebrow">AS PESSOAS POR TRÁS DO PROJETO</p>
        <h2>Nossa equipe</h2>
        <div className="equipe06-member-grid">
          {members.map((member) => (
            <article className="equipe06-panel" key={member.name}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
