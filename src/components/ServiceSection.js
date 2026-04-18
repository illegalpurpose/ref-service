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
                {t.items.map((service, indx) => {
                    return (
                        <div
                            key={indx}
                            ref={ref}
                            className={`service-card fade-up ${visible ? "visible" : "visible"}`}
                        >
                            <div
                                className="service-card-visual"
                                aria-hidden="true"
                            ></div>

                            <div className="service-card-content">
                                <h3>{service.acTitle}</h3>
                                <p>{service.acDesc}</p>
                                <ul className="service-features-list">
                                    {service.acFeatures.map((f, i) => (
                                        <ServiceFeature key={i} text={f} />
                                    ))}
                                </ul>
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => scrollTo("contacts")}
                                >
                                    {service.acCta}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
