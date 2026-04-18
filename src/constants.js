// ─── CONFIG ───────────────────────────────────────────────────────────────────
export const TELEGRAM_BOT_TOKEN =
    "8658071164:AAFSvwP2QckW0v4waVpswFq2SJ3lr0pEXnQ";
export const TELEGRAM_ID = "540061163";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
export const translations = {
    ru: {
        ceo: {
            title: "REF Service — Авто сервис в Бельцах | Ремонт и обслуживание кондиционеров",
            description:
                "Профессиональный ремонт и обслуживание автомобилей в Бельцах, Молдова.",
        },
        nav: {
            about: "О сервисе",
            services: "Услуги",
            reviews: "Отзывы",
            contacts: "Контакты",
            cta: "Записаться",
        },
        hero: {
            badge: "Профессиональный авто сервис",
            title: "Профессиональный ремонт и обслуживание автомобилей в Бельцах.",
            description:
                "Диагностика, ремонт кондиционеров и полное техническое обслуживание вашего автомобиля. Работаем быстро, честно и качественно.",
            ctaPrimary: "Записаться",
            ctaSecondary: "Узнать подробнее",
            stat1: "лет опыта",
            stat2: "клиентов",
            brandsTitle: "Работаем с ведущими брендами",
        },
        about: {
            sectionTag: "О нас",
            title: "Ваш автомобиль —",
            titleAccent: "в надёжных руках",
            p1: "REF Service — современный автосервис, где каждый автомобиль получает профессиональный уход. Мы используем только оригинальные запчасти и передовое диагностическое оборудование.",
            p2: "Наша команда сертифицированных специалистов решает задачи любой сложности — от планового ТО до капитального ремонта. Мы ценим ваше время и всегда держим вас в курсе происходящего.",
            feature1Title: "Современное оборудование",
            feature1Desc: "Профессиональные стенды и диагностика",
            feature2Title: "Быстрое обслуживание",
            feature2Desc: "Готовый результат в кратчайшие сроки",
            feature3Title: "Оригинальные запчасти",
            feature3Desc: "Только проверенные поставщики",
        },
        services: {
            sectionTag: "Услуги",
            title: "Что мы",
            titleAccent: "делаем",
            items: [
                {
                    acTitle: "Ремонт и обслуживание кондиционеров",
                    acDesc: "Полный спектр услуг по диагностике, заправке и ремонту автомобильных климатических систем. Работаем со всеми марками и моделями авто.",
                    acFeatures: [
                        "Диагностика системы кондиционирования",
                        "Заправка фреоном",
                        "Замена компрессора и фильтра",
                        "Дезинфекция и чистка системы",
                        "Ремонт испарителя и конденсатора",
                        "Проверка на утечки",
                    ],
                    acCta: "Записаться",
                },
            ],
        },
        reviews: {
            sectionTag: "Отзывы",
            title: "Что говорят",
            titleAccent: "клиенты",
            items: [
                {
                    name: "Людмила Р.",
                    text: "Обратилась по поводу замены радиатора и заправки кондиционера — всё сделали за один день. Очень порадовал подход: быстро, аккуратно, без лишней суеты. Кондиционер теперь работает как надо! Спасибо мастерам за профессионализм! Буду обращаться ещё и смело рекомендовать другим.",
                    rating: 5,
                },
                {
                    name: "Денис Г.",
                    text: `
                    Работают профессионалы,остался очень доволен отношением ко мне,как к клиенту.
Слаженная и чёткая организация работы.Отличный коллектив, доходчиво объясняют суть проблемы. Адекватные цены. Все делают довольно быстро и качественно. Был у конкурентов,которые находятся рядом -за день не решили проблему…а этот сервис все решил очень быстро и по факту вышло намного дешевле чем те самые соседи.`,
                    rating: 5,
                },
                {
                    name: "Вячеслав Г.",
                    text: "Отличный сервис! Рекомендую. Быстрый, качественный ремонт, за разумные деньги!",
                    rating: 5,
                },
                {
                    name: "Валерия Х.",
                    text: `Я с уверенностью рекомендую их услуги, они решили проблему с ремонтом кондиционера, хотя другие говорили, что это невозможно.
Большое спасибо команде профессионалов! 👍👍`,
                    rating: 5,
                },

                {
                    name: "Анатолий П.",
                    text: `Я обращался в этот автосервис около полугода назад на Skoda Kodiak, и впечатления остались очень хорошими. Серджиу, работающий там, отличился своим профессионализмом и серьёзным подходом. Он быстро определил проблему, всё понятно объяснил и выполнил ремонт в срок. Хотя прошло уже много времени, машина до сих пор работает отлично, что говорит о том, что работа была выполнена качественно. Настоятельно рекомендую Сергея и всю команду!`,
                    rating: 5,
                },
                {
                    name: "Женя В.",
                    text: "Отремонтировали кондиционер быстро и качественно, а главное с гарантией.",
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
            hours: "Пн–Пт: 8:00–18:00 | Сб: 8:00–16:00",
            ctaTitle: "Запишитесь онлайн",
            ctaDesc: "Оставьте заявку и мы свяжемся с вами в течение 30 минут",
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "Номер телефона",
            messagePlaceholder: "Опишите проблему (необязательно)",
            submitBtn: "Отправить заявку",
            loadingBtn: "Отправка...",
            successMsg: "Спасибо! Мы свяжемся с вами скоро.",
            errorMsg: "Ошибка отправки. Попробуйте позже.",
            text1: "АДРЕС",
            text2: "ТЕЛЕФОН",
            text3: "РЕЖИМ РАБОТЫ",
        },
        footer: {
            tagline: "Профессиональный авто сервис",
            rights: "Все права защищены",
            navTitle: "Навигация",
            workTitle: "Режим работы",
            workDays: "Понедельник – Пятница",
            workDaysHours: "8:00 – 18:00",
            workSat: "Суббота",
            workSatHours: "8:00 – 16:00",
            workSun: "Воскресенье",
            workSunHours: "Выходной",
        },
    },

    ////////////////////////////////
    ///////////////////////////////

    ro: {
        ceo: {
            title: `REF Service — Service auto în Bălți | Repararea și întreținerea aparatelor de aer condiționat`,
            description: `Reparații și întreținere profesională a autovehiculelor în Bălți, Moldova.`,
        },
        nav: {
            about: "Despre serviciu",
            services: "Servicii",
            reviews: "Recenzii",
            contacts: "Contacte",
            cta: "Programare",
        },
        hero: {
            badge: "Service auto profesional",
            title: "Reparații și întreținere profesională a autovehiculelor în Bălți.",
            description:
                "Diagnosticare, reparații ale sistemelor de aer condiționat și întreținere tehnică completă a autovehiculului dumneavoastră. Lucrăm rapid, onest și cu calitate.",
            ctaPrimary: "Programare",
            ctaSecondary: "Află mai multe",
            stat1: "ani de experiență",
            stat2: "clienți",
            brandsTitle: "Colaborăm cu mărci de top",
        },
        about: {
            sectionTag: "Despre noi",
            title: "Mașina dumneavoastră —",
            titleAccent: "pe mâini de încredere",
            p1: "REF Service — un service auto modern, unde fiecare mașină beneficiază de îngrijire profesională. Folosim numai piese de schimb originale și echipamente de diagnosticare de ultimă generație.",
            p2: "Echipa noastră de specialiști certificați rezolvă sarcini de orice complexitate — de la întreținerea periodică la reparații capitale. Vă prețuim timpul și vă ținem mereu la curent cu ceea ce se întâmplă.",
            feature1Title: "Echipamente moderne",
            feature1Desc: "Standuri profesionale și diagnosticare",
            feature2Title: "Servicii rapide",
            feature2Desc: "Rezultate imediate",
            feature3Title: "Piese de schimb originale",
            feature3Desc: "Doar furnizori verificați",
        },
        services: {
            sectionTag: "Servicii",
            title: "Ce",
            titleAccent: "facem",
            items: [
                {
                    acTitle:
                        "Reparații și întreținere aparate de aer condiționat",
                    acDesc: "Gama completă de servicii de diagnosticare, reumplere cu freon și reparații ale sistemelor de climatizare auto. Lucrăm cu toate mărcile și modelele de mașini.",
                    acFeatures: [
                        "Diagnosticarea sistemului de climatizare",
                        "Reumplerea cu freon",
                        "Înlocuirea compresorului și a filtrului",
                        "Dezinfectarea și curățarea sistemului",
                        "Reparația evaporatorului și a condensatorului",
                        "Verificarea scurgerilor",
                    ],
                    acCta: "Programare",
                },
            ],
        },
        reviews: {
            sectionTag: "Recenzii",
            title: "Ce spun",
            titleAccent: "clienți",
            items: [
                {
                    name: "Liudmila R.",
                    text: "Am apelat pentru înlocuirea radiatorului și reumplerea aparatului de aer condiționat — au făcut totul într-o singură zi. M-a bucurat foarte mult abordarea: rapid, cu grijă, fără agitație inutilă. Acum, aerul condiționat funcționează cum trebuie! Mulțumesc meseriașilor pentru profesionalism! Voi apela din nou la ei și îi voi recomanda cu încredere și altora.",
                    rating: 5,
                },
                {
                    name: "Denis G.",
                    text: `
                    Lucrează profesioniști, am rămas foarte mulțumit de atitudinea față de mine, ca client.
Organizarea muncii este coordonată și clară. O echipă excelentă, care explică în mod clar esența problemei. Prețuri adecvate. Totul se face destul de repede și cu calitate. Am fost la concurenții din apropiere – nu au rezolvat problema într-o zi… iar acest serviciu a rezolvat totul foarte repede și, de fapt, a ieșit mult mai ieftin decât acei vecini.`,
                    rating: 5,
                },
                {
                    name: "Viacheslav G.",
                    text: "Serviciu excelent! Recomand. Reparații rapide și de calitate, la un preț rezonabil!",
                    rating: 5,
                },
                {
                    name: "Valeria H.",
                    text: `Recomand cu încredere serviciile lor, au rezolvat problema cu repararea aparatului de aer condiționat, deși alții spuneau că este imposibil.
Mulțumesc mult echipei de profesioniști! 👍👍`,
                    rating: 5,
                },

                {
                    name: "Anatolie P.",
                    text: `Am apelat la acest service auto acum aproximativ șase luni pentru un Skoda Kodiak și am rămas cu o impresie foarte bună. Sergiu, care lucrează acolo, s-a remarcat prin profesionalism și seriozitate. A identificat rapid problema, a explicat totul clar și a efectuat reparația la timp. Deși a trecut deja mult timp, mașina funcționează încă excelent, ceea ce arată că lucrarea a fost efectuată cu calitate. Îl recomand cu căldură pe Sergiu și întreaga echipă!`,
                    rating: 5,
                },
                {
                    name: "Zhenya V.",
                    text: "Au reparat aerul condiționat rapid și cu calitate, și, cel mai important, cu garanție.",
                    rating: 5,
                },
            ],
        },
        contacts: {
            sectionTag: "Contacte",
            title: "Cum ne puteți",
            titleAccent: "găsi",
            address: "str. Traian 8, MD-3100, Bălți",
            phone: "+373 692 91 979",
            hours: "Luni–Vineri: 8:00–18:00 | Sâmbătă: 8:00–16:00",
            ctaTitle: "Programați-vă online",
            ctaDesc:
                "Lăsați o solicitare și vă vom contacta în termen de 30 de minute",
            namePlaceholder: "Numele dvs.",
            phonePlaceholder: "Număr de telefon",
            messagePlaceholder: "Descrieți problema (opțional)",
            submitBtn: "Trimiteți cererea",
            loadingBtn: "Se trimite...",
            successMsg: "Mulțumim! Vă vom contacta în curând.",
            errorMsg: "Eroare la trimitere. Încercați mai târziu.",
            text1: "ADRESĂ",
            text2: "TELEFON",
            text3: "PROGRAM DE LUCRU",
        },
        footer: {
            tagline: "Service auto profesional",
            rights: "Toate drepturile rezervate",
            navTitle: "Navigare",
            workTitle: "Program de lucru",
            workDays: "Luni – Vineri",
            workDaysHours: "8:00 – 18:00",
            workSat: "Sâmbătă",
            workSatHours: "8:00 – 16:00",
            workSun: "Duminică",
            workSunHours: "Zi liberă",
        },
    },
};

// ─── STATIC DATA ──────────────────────────────────────────────────────────────
export const BRANDS = [
    { name: "Carrier", src: "./carrier.png" },
    { name: "Eberspächer", src: "./eberspacher.png" },
    { name: "Thermo King", src: "./thermoking.png" },
    { name: "Webasto", src: "./webasto.png" },
];

export const GALLERY_SLIDES = [
    {
        src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=800&auto=format&fit=crop",
    },
    {
        src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
    },
    {
        src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop",
    },
    {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    },
];
