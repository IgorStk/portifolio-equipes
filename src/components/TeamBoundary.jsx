import { Component } from "react";
import { Link } from "react-router-dom";
export default class TeamBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    console.error("Não foi possível renderizar a página da equipe.", error);
  }
  render() {
    return this.state.failed ? (
      <section className="container empty-state" role="alert">
        <h1>Esta página encontrou um problema.</h1>
        <p>A vitrine das outras equipes continua disponível.</p>
        <Link className="button" to="/">
          Voltar à vitrine
        </Link>
      </section>
    ) : (
      this.props.children
    );
  }
}
