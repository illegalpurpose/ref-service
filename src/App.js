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

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AutoRepair",
                        name: "REF - SERVICE Pronatalex SRL",
                        image: "https://ref-service.md/logo1080.png",
                        "@id": "https://ref-service.md",
                        url: "https://ref-service.md",
                        telephone: "+37369291979",
                        priceRange: "$$",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "str. Traian 8",
                            postalCode: "MD-3100",
                            addressLocality: "Bălți",
                            addressCountry: "MD",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 47.7865044,
                            longitude: 27.9406888,
                        },
                        openingHoursSpecification: [
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                ],
                                opens: "08:00",
                                closes: "18:00",
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: "Saturday",
                                opens: "08:00",
                                closes: "16:00",
                            },
                        ],
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
