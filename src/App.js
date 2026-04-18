import { useState } from "react";
import { translations } from "./constants";
import { Helmet } from "react-helmet";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServiceSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";

// ─── APP ─────────────────────────────────────────────────────────────────────
function App() {
    const [lang, setLang] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get("lang") === "ro" ? "ro" : "ru";
    });

    const t = translations[lang];

    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t.ceo.title}</title>
                <meta name="description" content={t.ceo.description} />
                <meta property="og:title" content={t.ceo.title} />
                <meta property="og:description" content={t.ceo.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:locale"
                    content={lang === "ru" ? "ru_MD" : "ro_MD"}
                />
            </Helmet>

            <Header lang={lang} setLang={setLang} t={t.nav} />
            <main id="main-content">
                <HeroSection t={t.hero} />
                <AboutSection t={t.about} />
                <ServicesSection t={t.services} />
                <ReviewsSection t={t.reviews} />
                <ContactsSection t={t.contacts} />
            </main>
            <Footer t={t.footer} nav={t.nav} />
        </>
    );
}

export default App;
