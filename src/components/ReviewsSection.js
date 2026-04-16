import { ReviewCard } from "./ReviewCard";
import "../App.css";

export function ReviewsSection({ t }) {
    return (
        <section
            id="reviews"
            className="reviews section"
            aria-labelledby="reviews-title"
        >
            <div className="container">
                <div className="section-tag">{t.sectionTag}</div>
                <h2 id="reviews-title" className="section-title centered">
                    {t.title} <span className="accent">{t.titleAccent}</span>
                </h2>
                <div className="reviews-grid">
                    {t.items.map((r, i) => (
                        <ReviewCard key={i} delay={i * 100} {...r} />
                    ))}
                </div>
            </div>
        </section>
    );
}
