import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Coletivo, início"
        >
          <span className="brand-icon" aria-hidden="true">
            c.
          </span>
          coletivo<span className="brand-dot">.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Principal"
        >
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Início
          </NavLink>
          <a
            href={pathname === "/" ? "#equipes" : "/#equipes"}
            onClick={() => setOpen(false)}
          >
            As equipes
          </a>
          <a
            href={pathname === "/" ? "#sobre" : "/#sobre"}
            onClick={() => setOpen(false)}
          >
            O desafio
          </a>
          <a
            className="nav-repository"
            href="https://github.com/gabrmascarenhas/portifolio-equipes"
            target="_blank"
            rel="noreferrer"
          >
            Repositório <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
