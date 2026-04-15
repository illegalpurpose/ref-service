import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./App.css";

// ─── TELEGRAM BOT CONFIG ────────────────────────────────────────────────────────
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const translations = {
    ru: {
        nav: {
            about: "О сервисе",
            services: "Услуги",
            reviews: "Отзывы",
            contacts: "Контакты",
            cta: "Записаться",
        },
        hero: {
            badge: "Профессиональный авто сервис",
            title: "Надёжный ремонт и обслуживание автомобилей в Молдове",
            description:
                "Диагностика, ремонт кондиционеров и полное техническое обслуживание вашего автомобиля. Работаем быстро, честно и качественно.",
            ctaPrimary: "Записаться на приём",
            ctaSecondary: "Узнать подробнее",
            stat1: "лет опыта",
            stat2: "клиентов",
            stat3: "гарантия (мес.)",
        },
        about: {
            sectionTag: "О нас",
            title: "Ваш автомобиль —",
            titleAccent: "в надёжных руках",
            p1: "REF-Service — современный автосервис, где каждый автомобиль получает профессиональный уход. Мы используем только оригинальные запчасти и передовое диагностическое оборудование.",
            p2: "Наша команда сертифицированных специалистов решает задачи любой сложности — от планового ТО до капитального ремонта. Мы ценим ваше время и всегда держим вас в курсе происходящего.",
            feature1Title: "Современное оборудование",
            feature1Desc: "Профессиональные стенды и диагностика",
            feature2Title: "Быстрое обслуживание",
            feature2Desc: "Готовый результат в кратчайшие сроки",
            feature3Title: "Оригинальные запчасти",
            feature3Desc: "Только проверенные поставщики",
            galleryLabel: "Наш сервис",
        },
        services: {
            sectionTag: "Услуги",
            title: "Что мы",
            titleAccent: "делаем",
            acTitle: "Ремонт и обслуживание кондиционеров",
            acDesc: "Полный спектр услуг по диагностике, заправке и ремонту автомобильных климатических систем. Работаем со всеми марками и моделями авто.",
            acFeatures: [
                "Диагностика системы кондиционирования",
                "Заправка фреоном R134a / R1234yf",
                "Замена компрессора и фильтра",
                "Дезинфекция и чистка системы",
                "Ремонт испарителя и конденсатора",
                "Проверка на утечки",
            ],
            acCta: "Записаться",
            priceFrom: "от",
            priceCurrency: "лей",
            acPrice: "350",
        },
        reviews: {
            sectionTag: "Отзывы",
            title: "Что говорят",
            titleAccent: "клиенты",
            items: [
                {
                    name: "Александр М.",
                    car: "Toyota Camry",
                    text: "Отличный сервис! Сделали диагностику и заправили кондиционер за 2 часа. Цены честные, мастера объяснили всё подробно. Буду обращаться ещё.",
                    rating: 5,
                },
                {
                    name: "Елена В.",
                    car: "Volkswagen Passat",
                    text: "Очень довольна работой. Кондиционер не холодил — нашли утечку, починили и заправили. Всё работает как новое. Рекомендую всем знакомым!",
                    rating: 5,
                },
                {
                    name: "Дмитрий К.",
                    car: "BMW 3 Series",
                    text: "Профессиональный подход, чистота в боксах, вежливый персонал. Сделали всё быстро и качественно. Отдельное спасибо за честность с ценами.",
                    rating: 5,
                },
                {
                    name: "Ирина С.",
                    car: "Ford Focus",
                    text: "Обратилась по рекомендации — не пожалела. Заменили компрессор кондиционера, дали гарантию 6 месяцев. Уже езжу второй сезон — всё отлично!",
                    rating: 5,
                },
            ],
        },
        contacts: {
            sectionTag: "Контакты",
            title: "Как нас",
            titleAccent: "найти",
            address: "str. Traian 8, MD-3100, Bălți",
            phone: "+373 692 91 979",
            email: "info@ref-service.md",
            hours: "Пн–Пт: 8:00–18:00 | Сб: 8:00–16:00",
            mapPlaceholder: "Карта загружается...",
            ctaTitle: "Запишитесь онлайн",
            ctaDesc: "Оставьте заявку и мы свяжемся с вами в течение 30 минут",
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "Номер телефона",
            messagePlaceholder: "Опишите проблему (необязательно)",
            submitBtn: "Отправить заявку",
            successMsg: "Спасибо! Мы свяжемся с вами скоро.",
            errorMsg: "Ошибка отправки. Попробуйте позже.",
        },
        footer: {
            tagline: "Профессиональный авто сервис",
            rights: "Все права защищены",
            navTitle: "Навигация",
            contactsTitle: "Контакты",
            workTitle: "Режим работы",
            workDays: "Понедельник – Пятница",
            workDaysHours: "8:00 – 18:00",
            workSat: "Суббота",
            workSatHours: "8:00 – 16:00",
            workSun: "Воскресенье",
            workSunHours: "Выходной",
        },
    },
    ro: {
        nav: {
            about: "Despre noi",
            services: "Servicii",
            reviews: "Recenzii",
            contacts: "Contacte",
            cta: "Programare",
        },
        hero: {
            badge: "Service auto profesional",
            title: "Reparații și întreținere auto de încredere în Moldova",
            description:
                "Diagnosticare, reparații climatizare și service complet pentru vehiculul tău. Lucrăm rapid, cinstit și calitativ.",
            ctaPrimary: "Programează-te",
            ctaSecondary: "Află mai mult",
            stat1: "ani experiență",
            stat2: "clienți",
            stat3: "garanție (luni)",
        },
        about: {
            sectionTag: "Despre noi",
            title: "Mașina ta —",
            titleAccent: "pe mâini bune",
            p1: "REF-Service este un service auto modern, unde fiecare vehicul primește îngrijire profesională. Folosim doar piese originale și echipamente de diagnosticare de ultimă generație.",
            p2: "Echipa noastră de specialiști certificați rezolvă sarcini de orice complexitate — de la inspecții tehnice planificate la reparații capitale. Respectăm timpul tău și te ținem mereu la curent.",
            feature1Title: "Echipament modern",
            feature1Desc: "Standuri profesionale și diagnosticare",
            feature2Title: "Serviciu rapid",
            feature2Desc: "Rezultat gata în timp minim",
            feature3Title: "Piese originale",
            feature3Desc: "Doar furnizori verificați",
            galleryLabel: "Serviceul nostru",
        },
        services: {
            sectionTag: "Servicii",
            title: "Ce",
            titleAccent: "oferim",
            acTitle: "Reparație și întreținere climatizare",
            acDesc: "Gamă completă de servicii pentru diagnosticarea, încărcarea și repararea sistemelor de climatizare auto. Lucrăm cu toate mărcile și modelele.",
            acFeatures: [
                "Diagnosticarea sistemului de climatizare",
                "Încărcare freon R134a / R1234yf",
                "Înlocuire compresor și filtru",
                "Dezinfecție și curățare sistem",
                "Reparație evaporator și condensator",
                "Verificare scurgeri",
            ],
            acCta: "Programare",
            priceFrom: "de la",
            priceCurrency: "lei",
            acPrice: "350",
        },
        reviews: {
            sectionTag: "Recenzii",
            title: "Ce spun",
            titleAccent: "clienții",
            items: [
                {
                    name: "Alexandru M.",
                    car: "Toyota Camry",
                    text: "Service excelent! Au făcut diagnosticarea și încărcarea climatizării în 2 ore. Prețuri corecte, mecanicii au explicat totul în detaliu. Voi reveni cu siguranță.",
                    rating: 5,
                },
                {
                    name: "Elena V.",
                    car: "Volkswagen Passat",
                    text: "Foarte mulțumită de lucrare. Climatizarea nu răcea — au găsit scurgerea, reparat și reîncărcat. Totul funcționează ca nou. Recomand tuturor!",
                    rating: 5,
                },
                {
                    name: "Dmitri K.",
                    car: "BMW 3 Series",
                    text: "Abordare profesională, curățenie în boxe, personal amabil. Au lucrat rapid și calitativ. Mulțumiri speciale pentru corectitudinea prețurilor.",
                    rating: 5,
                },
                {
                    name: "Irina S.",
                    car: "Ford Focus",
                    text: "Am venit la recomandare — nu m-am căit. Au înlocuit compresorul, garanție 6 luni. Conduc deja al doilea sezon — totul perfect!",
                    rating: 5,
                },
            ],
        },
        contacts: {
            sectionTag: "Contacte",
            title: "Cum să ne",
            titleAccent: "găsiți",
            address: "str. Traian 8, MD-3100, Bălți",
            phone: "+373 692 91 979",
            email: "info@ref-service.md",
            hours: "Lun–Vin: 8:00–18:00 | Sâm: 8:00–16:00",
            mapPlaceholder: "Harta se încarcă...",
            ctaTitle: "Programați-vă online",
            ctaDesc: "Lăsați o cerere și vă vom contacta în 30 de minute",
            namePlaceholder: "Numele dvs.",
            phonePlaceholder: "Număr de telefon",
            messagePlaceholder: "Descrieți problema (opțional)",
            submitBtn: "Trimite cererea",
            successMsg: "Mulțumim! Vă vom contacta în curând.",
            errorMsg: "Eroare la trimitere. Încercați mai târziu.",
        },
        footer: {
            tagline: "Service auto profesional",
            rights: "Toate drepturile rezervate",
            navTitle: "Navigare",
            contactsTitle: "Contacte",
            workTitle: "Program de lucru",
            workDays: "Luni – Vineri",
            workDaysHours: "8:00 – 18:00",
            workSat: "Sâmbătă",
            workSatHours: "9:00 – 15:00",
            workSun: "Duminică",
            workSunHours: "Zi liberă",
        },
    },
};

// ─── HOOK: useScrollAnimation ─────────────────────────────────────────────────
function useScrollAnimation() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}

// ─── COMPONENT: StarRating ────────────────────────────────────────────────────
function StarRating({ count }) {
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

// ─── COMPONENT: ReviewCard ────────────────────────────────────────────────────
function ReviewCard({ name, car, text, rating, delay }) {
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

// ─── COMPONENT: ServiceFeature ────────────────────────────────────────────────
function ServiceFeature({ text }) {
    return (
        <li className="service-feature">
            <span className="feature-check" aria-hidden="true">
                ✓
            </span>
            {text}
        </li>
    );
}

// ─── COMPONENT: StatItem ─────────────────────────────────────────────────────
function StatItem({ value, label }) {
    return (
        <div className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

// ─── COMPONENT: AboutFeature ─────────────────────────────────────────────────
function AboutFeature({ icon, title, desc }) {
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

// ─── COMPONENT: Header ───────────────────────────────────────────────────────
function Header({ lang, setLang, t }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <header
            className={`header ${scrolled ? "scrolled" : ""}`}
            role="banner"
        >
            <div className="container header-inner">
                <a
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo("hero");
                    }}
                >
                    <img className="logo" src={"./logo.svg"} alt="logo" />
                </a>

                <nav
                    className={`nav ${menuOpen ? "open" : ""}`}
                    aria-label="Основная навигация"
                >
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("about")}
                    >
                        {t.about}
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("services")}
                    >
                        {t.services}
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("reviews")}
                    >
                        {t.reviews}
                    </button>
                    <button
                        className="nav-link"
                        onClick={() => scrollTo("contacts")}
                    >
                        {t.contacts}
                    </button>
                </nav>

                <div className="header-actions">
                    <div
                        className="lang-switcher"
                        role="group"
                        aria-label="Выбор языка"
                    >
                        <button
                            className={`lang-btn ${lang === "ru" ? "active" : ""}`}
                            onClick={() => {
                                setLang("ru");
                                window.history.replaceState({}, "", "?lang=ru");
                            }}
                            aria-pressed={lang === "ru"}
                        >
                            RU
                        </button>
                        <span className="lang-sep" aria-hidden="true">
                            |
                        </span>
                        <button
                            className={`lang-btn ${lang === "ro" ? "active" : ""}`}
                            onClick={() => {
                                setLang("ro");
                                window.history.replaceState({}, "", "?lang=ro");
                            }}
                            aria-pressed={lang === "ro"}
                        >
                            RO
                        </button>
                    </div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => scrollTo("contacts")}
                    >
                        {t.cta}
                    </button>
                    <button
                        className={`burger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Открыть меню"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}

// ─── COMPONENT: HeroSection ───────────────────────────────────────────────────
function HeroSection({ t }) {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        "./carrier.png",
        "./eberspacher.png",
        "./thermoking.png",
        "./webasto.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="hero" className="hero" aria-label="Главный блок">
            <div className="hero-bg-shapes" aria-hidden="true"></div>
            <div className="container hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">{t.badge}</div>
                    <h1 className="hero-title">
                        <span className="title-ref">{t.title}</span>
                    </h1>
                    <p className="hero-desc">{t.description}</p>
                    <div className="hero-cta">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => scrollTo("contacts")}
                        >
                            {t.ctaPrimary}
                        </button>
                        <button
                            className="btn btn-outline btn-lg"
                            onClick={() => scrollTo("about")}
                        >
                            {t.ctaSecondary}
                        </button>
                    </div>
                </div>
                <div className="hero-visual" aria-hidden="true">
                    <div className="hero-card">
                        <div className="hero-card-icon">
                            <img
                                src={images[imageIndex]}
                                alt="Brand logo"
                                className="brand-logo"
                            />
                        </div>
                        <div className="hero-card-pulses">
                            <div className="pulse pulse-1" />
                            <div className="pulse pulse-2" />
                            <div className="pulse pulse-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-stats container">
                <StatItem value="7+" label={t.stat1} />
                <div className="stat-divider" aria-hidden="true" />
                <StatItem value="1200+" label={t.stat2} />
                <div className="stat-divider" aria-hidden="true" />
                <StatItem value="12" label={t.stat3} />
            </div>
        </section>
    );
}

// ─── COMPONENT: AboutSection ──────────────────────────────────────────────────
const GALLERY_IMAGES = [
    { alt: "Рабочий бокс автосервиса REF-Service" },
    { alt: "Диагностическое оборудование REF-Service" },
    { alt: "Зона ожидания клиентов REF-Service" },
    { alt: "Стенд заправки кондиционеров REF-Service" },
    { alt: "Мастера автосервиса REF-Service" },
    { alt: "Склад запчастей REF-Service" },
];

function GalleryItem({ alt, index }) {
    const { ref, visible } = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`gallery-item fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 80}ms` }}
            role="img"
            aria-label={alt}
        >
            <div className="gallery-placeholder" />
        </div>
    );
}

function AboutSection({ t }) {
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
                    <div className="about-gallery">
                        <div className="gallery-grid">
                            {GALLERY_IMAGES.map((img, i) => (
                                <GalleryItem key={i} index={i} {...img} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── COMPONENT: ServicesSection ───────────────────────────────────────────────
function ServicesSection({ t }) {
    const { ref, visible } = useScrollAnimation();
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="services"
            className="services section"
            aria-labelledby="services-title"
        >
            <div className="container">
                <div className="section-tag">{t.sectionTag}</div>
                <h2 id="services-title" className="section-title centered">
                    {t.title} <span className="accent">{t.titleAccent}</span>
                </h2>
                <div
                    ref={ref}
                    className={`service-card fade-up ${visible ? "visible" : ""}`}
                >
                    <div
                        className="service-card-visual"
                        aria-hidden="true"
                    ></div>
                    <div className="service-card-content">
                        <h3>{t.acTitle}</h3>
                        <p>{t.acDesc}</p>
                        <ul className="service-features-list">
                            {t.acFeatures.map((f, i) => (
                                <ServiceFeature key={i} text={f} />
                            ))}
                        </ul>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => scrollTo("contacts")}
                        >
                            {t.acCta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── COMPONENT: ReviewsSection ────────────────────────────────────────────────
function ReviewsSection({ t }) {
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

// ─── COMPONENT: ContactsSection ───────────────────────────────────────────────
function ContactsSection({ t }) {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { ref, visible } = useScrollAnimation();

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const sendToTelegram = async (data) => {
        const message = `
📋 Новая заявка с сайта REF-Service

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
💬 Сообщение: ${data.message || "Не указано"}
        `.trim();

        try {
            await axios.post(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: "HTML",
                },
            );
            return true;
        } catch (err) {
            console.error("Telegram error:", err);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const success = await sendToTelegram(form);

        setLoading(false);

        if (success) {
            setSubmitted(true);
            setForm({ name: "", phone: "", message: "" });
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            setError(true);
            setTimeout(() => setError(false), 5000);
        }
    };

    return (
        <section
            id="contacts"
            className="contacts section"
            aria-labelledby="contacts-title"
        >
            <div className="container">
                <div className="section-tag">{t.sectionTag}</div>
                <h2 id="contacts-title" className="section-title centered">
                    {t.title} <span className="accent">{t.titleAccent}</span>
                </h2>
                <div className="contacts-grid">
                    {/* INFO */}
                    <div
                        ref={ref}
                        className={`contacts-info fade-left ${visible ? "visible" : ""}`}
                    >
                        <div className="contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                📍
                            </span>
                            <div>
                                <strong>Адрес</strong>
                                <address>{t.address}</address>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                📞
                            </span>
                            <div>
                                <strong>Телефон</strong>
                                <a href={`tel:${t.phone.replace(/\s/g, "")}`}>
                                    {t.phone}
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                ✉️
                            </span>
                            <div>
                                <strong>Email</strong>
                                <a href={`mailto:${t.email}`}>{t.email}</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                🕐
                            </span>
                            <div>
                                <strong>Режим работы</strong>
                                <span>{t.hours}</span>
                            </div>
                        </div>
                        {/* MAP */}
                        <div
                            className="map-container"
                            aria-label="Карта расположения сервиса"
                        >
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2685865505073!2d27.938108511719868!3d47.786504371086814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb67ebe8f5ae89%3A0xefd4385791d5cd38!2sREF%20-%20SERVICE%20Pronatalex%20SRL!5e1!3m2!1sru!2s!4v1776275700742!5m2!1sru!2s"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* FORM */}
                    <div
                        className={`contacts-form-wrap fade-right ${visible ? "visible" : ""}`}
                    >
                        <h3>{t.ctaTitle}</h3>
                        <p>{t.ctaDesc}</p>
                        {submitted ? (
                            <div className="form-success" role="alert">
                                {t.successMsg}
                            </div>
                        ) : error ? (
                            <div className="form-error" role="alert">
                                {t.errorMsg}
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t.namePlaceholder}
                                    required
                                    autoComplete="name"
                                    aria-label={t.namePlaceholder}
                                    disabled={loading}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder={t.phonePlaceholder}
                                    required
                                    autoComplete="tel"
                                    aria-label={t.phonePlaceholder}
                                    disabled={loading}
                                />
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t.messagePlaceholder}
                                    rows={4}
                                    aria-label={t.messagePlaceholder}
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-full btn-lg"
                                    disabled={loading}
                                >
                                    {loading ? "Отправка..." : t.submitBtn}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── COMPONENT: Footer ───────────────────────────────────────────────────────
function Footer({ t, nav }) {
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
                        <img className="logo" src={"./logo.svg"} alt="logo" />
                    </a>
                    <p className="footer-tagline">{t.tagline}</p>
                </div>

                <div className="footer-col">
                    <strong>{t.navTitle}</strong>
                    <nav aria-label="Навигация в подвале">
                        <button onClick={() => scrollTo("about")}>
                            {nav.about}
                        </button>
                        <button onClick={() => scrollTo("services")}>
                            {nav.services}
                        </button>
                        <button onClick={() => scrollTo("reviews")}>
                            {nav.reviews}
                        </button>
                        <button onClick={() => scrollTo("contacts")}>
                            {nav.contacts}
                        </button>
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
                    content="REF-Service — профессиональный автосервис в Бельцах (Молдова). Ремонт и заправка кондиционеров, диагностика авто. Опыт 7+ лет, гарантия 12 месяцев."
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
