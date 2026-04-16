import { useState, useEffect, React } from "react";
import "../App.css";

export function Header({ lang, setLang, t }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    const switchLang = (l) => {
        setLang(l);
        window.history.replaceState({}, "", `?lang=${l}`);
    };

    return (
        <header
            className={`header ${scrolled ? "scrolled" : ""}`}
            role="banner"
        >
            <div className="container header-inner">
                <a
                    href="#hero"
                    className="logo-link"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo("hero");
                    }}
                >
                    <img className="logo" src="./logo.svg" alt="REF-Service" />
                </a>

                <nav
                    className={`nav ${menuOpen ? "open" : ""}`}
                    aria-label="Основная навигация"
                >
                    {["about", "services", "reviews", "contacts"].map((id) => (
                        <button
                            key={id}
                            className="nav-link"
                            onClick={() => scrollTo(id)}
                        >
                            {t[id]}
                        </button>
                    ))}
                </nav>

                <div className="header-actions">
                    <div
                        className="lang-switcher"
                        role="group"
                        aria-label="Выбор языка"
                    >
                        {["ru", "ro"].map((l, i) => (
                            <div key={l}>
                                {i > 0 && (
                                    <span
                                        className="lang-sep"
                                        aria-hidden="true"
                                    >
                                        |
                                    </span>
                                )}
                                <button
                                    className={`lang-btn ${lang === l ? "active" : ""}`}
                                    onClick={() => switchLang(l)}
                                    aria-pressed={lang === l}
                                >
                                    {l.toUpperCase()}
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => scrollTo("contacts")}
                    >
                        {t.cta}
                    </button>
                    <button
                        className={`burger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Открыть меню"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}
