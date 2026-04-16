import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { AboutFeature } from "./AboutFeature";
import { GallerySlider } from "./GallerySlider";
import "../App.css";

export function AboutSection({ t }) {
    const { ref, visible } = useScrollAnimation();

    return (
        <section
            id="about"
            className="about section"
            aria-labelledby="about-title"
        >
            <div className="container">
                <div className="section-tag">{t.sectionTag}</div>
                <div className="about-grid">
                    <div
                        ref={ref}
                        className={`about-text fade-left ${visible ? "visible" : ""}`}
                    >
                        <h2 id="about-title" className="section-title">
                            {t.title}{" "}
                            <span className="accent">{t.titleAccent}</span>
                        </h2>
                        <p>{t.p1}</p>
                        <p>{t.p2}</p>
                        <div className="about-features">
                            <AboutFeature
                                icon="⚙"
                                title={t.feature1Title}
                                desc={t.feature1Desc}
                            />
                            <AboutFeature
                                icon="⚡"
                                title={t.feature2Title}
                                desc={t.feature2Desc}
                            />
                            <AboutFeature
                                icon="✓"
                                title={t.feature3Title}
                                desc={t.feature3Desc}
                            />
                        </div>
                    </div>
                    <div
                        className={`about-slider-wrap fade-right ${visible ? "visible" : ""}`}
                    >
                        <GallerySlider />
                    </div>
                </div>
            </div>
        </section>
    );
}
