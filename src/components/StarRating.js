import "../App.css";

export function StarRating({ count }) {
    return (
        <div className="stars" aria-label={`Рейтинг: ${count} из 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < count ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    );
}
