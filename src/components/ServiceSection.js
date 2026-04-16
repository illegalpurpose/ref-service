import { ServiceFeature } from "./ServiceFeature";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../App.css";
export function ServicesSection({ t }) {
    const { ref, visible } = useScrollAnimation();
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="services"
            className="services section"
            aria-labelledby="services-title"
        >
            <div className="container">
                <div className="section-tag">{t.sectionTag}</div>
                <h2 id="services-title" className="section-title centered">
                    {t.title} <span className="accent">{t.titleAccent}</span>
                </h2>
                <div
                    ref={ref}
                    className={`service-card fade-up ${visible ? "visible" : ""}`}
                >
                    <div
                        className="service-card-visual"
                        aria-hidden="true"
                    ></div>
                    <div className="service-card-content">
                        <h3>{t.acTitle}</h3>
                        <p>{t.acDesc}</p>
                        <ul className="service-features-list">
                            {t.acFeatures.map((f, i) => (
                                <ServiceFeature key={i} text={f} />
                            ))}
                        </ul>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => scrollTo("contacts")}
                        >
                            {t.acCta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
