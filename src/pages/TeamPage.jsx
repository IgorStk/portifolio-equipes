import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { teamsConfig } from "../data/teamsConfig";
import TeamBoundary from "../components/TeamBoundary";
const modules = import.meta.glob("../teams/equipe-*/index.jsx");
const pages = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => [
    path.split("/")[2],
    lazy(loader),
  ]),
);
export default function TeamPage() {
  const { teamId } = useParams();
  const team = teamsConfig.find((item) => item.id === teamId);
  const Page = team?.ready ? pages[teamId] : null;
  if (!team)
    return (
      <section className="container empty-state">
        <p className="eyebrow">PÁGINA NÃO ENCONTRADA</p>
        <h1>Essa equipe ainda não está na vitrine.</h1>
        <Link className="button" to="/">
          Voltar ao início
        </Link>
      </section>
    );
  if (!Page)
    return (
      <section className="container empty-state">
        <p className="eyebrow">{team.category}</p>
        <h1>{team.name}</h1>
        <p>
          A página desta equipe está em preparação. Volte em breve para conhecer
          seu vídeo, projeto e integrantes.
        </p>
        <Link className="button" to="/">
          Voltar à vitrine
        </Link>
      </section>
    );
  return (
    <TeamBoundary key={teamId}>
      <Suspense
        fallback={
          <p className="container loading-state" role="status">
            Carregando equipe…
          </p>
        }
      >
        <Page />
      </Suspense>
    </TeamBoundary>
  );
}
