import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title =
      pathname === "/" ? "Coletivo — Portfólio da turma" : "Equipes — Coletivo";
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipes/:teamId/*" element={<TeamPage />} />
          <Route
            path="*"
            element={
              <section className="container empty-state">
                <h1>Página não encontrada.</h1>
                <Link to="/" className="button">
                  Voltar ao início
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
