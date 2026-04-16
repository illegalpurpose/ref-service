import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { StarRating } from "./StarRating";
import "../App.css";
export function ReviewCard({ name, car, text, rating, delay }) {
    const { ref, visible } = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`review-card fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <StarRating count={rating} />
            <p className="review-text">"{text}"</p>
            <div className="review-author">
                <div className="review-avatar">{name.charAt(0)}</div>
                <div>
                    <strong>{name}</strong>
                    <span>{car}</span>
                </div>
            </div>
        </div>
    );
}
