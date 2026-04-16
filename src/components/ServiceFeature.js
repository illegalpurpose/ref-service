import "../App.css";

export function ServiceFeature({ text }) {
    return (
        <li className="service-feature">
            <span className="feature-check" aria-hidden="true">
                ✓
            </span>
            {text}
        </li>
    );
}
