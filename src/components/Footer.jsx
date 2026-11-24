import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="brand">
            coletivo.
          </Link>
          <p>Feito por várias mãos. Construído em uma aula.</p>
        </div>
        <p>
          Desenvolvimento Web · React + Vite
          <br />
          Base e integração: Equipe 06
        </p>
      </div>
    </footer>
  );
}
