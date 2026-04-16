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
                <title>
                    REF-Service — Авто сервис в Бельцах | Ремонт кондиционеров
                </title>
                <meta
                    name="description"
                    content="REF-Service — профессиональный автосервис в Бельцах (Молдова). Ремонт и заправка кондиционеров, диагностика авто. Опыт 7+ лет."
                />
                <meta
                    name="keywords"
                    content="автосервис Бельцы, ремонт кондиционеров авто, заправка фреона, диагностика авто Молдова, REF-Service"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="REF-Service — Авто сервис в Бельцах"
                />
                <meta
                    property="og:description"
                    content="Профессиональный ремонт и обслуживание автомобилей в Бельцах, Молдова."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:locale"
                    content={lang === "ru" ? "ru_MD" : "ro_MD"}
                />
                <link rel="canonical" href="https://ref-service.md/" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AutoRepair",
                        name: "REF-Service",
                        description:
                            "Профессиональный автосервис в Бельцах, Молдова",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "str. Traian 8",
                            addressLocality: "Bălți",
                            addressCountry: "MD",
                        },
                        telephone: "+37369291979",
                        openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
                        priceRange: "$$",
                    })}
                </script>
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
