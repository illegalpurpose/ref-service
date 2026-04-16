import { BRANDS } from "../constants";
import { StatItem } from "./StarItem";
import "../App.css";

export function HeroSection({ t }) {
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="hero" className="hero" aria-label="Главный блок">
            <div className="hero-overlay" aria-hidden="true" />

            <div className="container hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">{t.badge}</div>
                    <h1 className="hero-title">{t.title}</h1>
                    <p className="hero-desc">{t.description}</p>
                    <div className="hero-cta">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => scrollTo("contacts")}
                        >
                            {t.ctaPrimary}
                        </button>
                        <button
                            className="btn btn-outline btn-lg"
                            onClick={() => scrollTo("about")}
                        >
                            {t.ctaSecondary}
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-brands">
                <div className="container">
                    <p className="brands-title">{t.brandsTitle}</p>
                    <div className="brands-grid">
                        {BRANDS.map(({ name, src }) => (
                            <div key={name} className="brand-item">
                                <img
                                    src={src}
                                    alt={`${name} — партнёр REF-Service`}
                                />
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero-stats container">
                <StatItem value="7+" label={t.stat1} />
                <div className="stat-divider" aria-hidden="true" />
                <StatItem value="1200+" label={t.stat2} />
                <div className="stat-divider" aria-hidden="true" />
                <StatItem value="50+" label={t.stat3} />
            </div>
        </section>
    );
}
