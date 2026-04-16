import "../App.css";
export function Footer({ t, nav }) {
    const year = new Date().getFullYear();
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollTo("hero");
                        }}
                    >
                        <img
                            className="logo"
                            src="./logo.svg"
                            alt="REF-Service"
                        />
                    </a>
                    <p className="footer-tagline">{t.tagline}</p>
                </div>

                <div className="footer-col">
                    <strong>{t.navTitle}</strong>
                    <nav aria-label="Навигация в подвале">
                        {["about", "services", "reviews", "contacts"].map(
                            (id) => (
                                <button key={id} onClick={() => scrollTo(id)}>
                                    {nav[id]}
                                </button>
                            ),
                        )}
                    </nav>
                </div>

                <div className="footer-col">
                    <strong>{t.workTitle}</strong>
                    <p>
                        <span>{t.workDays}</span>
                        <span>{t.workDaysHours}</span>
                    </p>
                    <p>
                        <span>{t.workSat}</span>
                        <span>{t.workSatHours}</span>
                    </p>
                    <p>
                        <span>{t.workSun}</span>
                        <span className="closed">{t.workSunHours}</span>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © {year} REF-Service. {t.rights}.
                </p>
            </div>
        </footer>
    );
}
