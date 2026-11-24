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
          aria-label="Universidade de Fortaleza — início"
        >
          <img
            className="unifor-logo"
            src="/brand/unifor.svg"
            alt="Universidade de Fortaleza"
          />
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
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
