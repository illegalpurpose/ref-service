import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { WORKS } from "../constants";
import "../App.css";

export function WorksSection({ t }) {
    const { ref, visible } = useScrollAnimation();

    return (
        <section
            id="works"
            className="works section"
            aria-labelledby="works-title"
        >
            <div className="container">
                <div className="section-tag">{t.sectionTag}</div>
                <h2 id="works-title" className="section-title centered">
                    {t.title} <span className="accent">{t.titleAccent}</span>
                </h2>
                <div className="works-gallery">
                    {WORKS.map((work, idx) => (
                        <div
                            key={idx}
                            ref={ref}
                            className={`work-item fade-up ${visible ? "visible" : ""}`}
                        >
                            <img
                                src={work.src}
                                alt={`Work example ${idx + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
