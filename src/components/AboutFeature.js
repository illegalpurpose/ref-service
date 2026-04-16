import "../App.css";

export function AboutFeature({ icon, title, desc }) {
    return (
        <div className="about-feature">
            <div className="about-feature-icon">{icon}</div>
            <div>
                <strong>{title}</strong>
                <p>{desc}</p>
            </div>
        </div>
    );
}
