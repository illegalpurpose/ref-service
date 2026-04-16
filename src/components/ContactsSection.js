import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import axios from "axios";
import "../App.css";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_ID } from "../constants";
export function ContactsSection({ t }) {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const { ref, visible } = useScrollAnimation();

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        const message = `📋 Новая заявка с сайта REF-Service\n\n👤 Имя: ${form.name}\n📞 Телефон: ${form.phone}\n💬 Сообщение: ${form.message || "Не указано"}`;
        try {
            await axios.post(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    chat_id: TELEGRAM_ID,
                    text: message,
                },
            );
            setStatus("success");
            setForm({ name: "", phone: "", message: "" });
        } catch (err) {
            console.log(err);
            setStatus("error");
        }
        setTimeout(() => setStatus("idle"), 4000);
    };

    const CONTACT_ITEMS = [
        { icon: "📍", label: "Адрес", value: <address>{t.address}</address> },
        {
            icon: "📞",
            label: "Телефон",
            value: <a href={`tel:${t.phone.replace(/\s/g, "")}`}>{t.phone}</a>,
        },
        {
            icon: "✉️",
            label: "Email",
            value: <a href={`mailto:${t.email}`}>{t.email}</a>,
        },
        { icon: "🕐", label: "Режим работы", value: <span>{t.hours}</span> },
    ];

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
                    <div
                        ref={ref}
                        className={`contacts-info fade-left ${visible ? "visible" : ""}`}
                    >
                        {CONTACT_ITEMS.map(({ icon, label, value }) => (
                            <div key={label} className="contact-item">
                                <span
                                    className="contact-icon"
                                    aria-hidden="true"
                                >
                                    {icon}
                                </span>
                                <div>
                                    <strong>{label}</strong>
                                    {value}
                                </div>
                            </div>
                        ))}
                        <div
                            className="map-container"
                            aria-label="Карта расположения сервиса"
                        >
                            <iframe
                                title="REF-Service на карте"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2685865505073!2d27.938108511719868!3d47.786504371086814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb67ebe8f5ae89%3A0xefd4385791d5cd38!2sREF%20-%20SERVICE%20Pronatalex%20SRL!5e1!3m2!1sru!2s!4v1776275700742!5m2!1sru!2s"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div
                        className={`contacts-form-wrap fade-right ${visible ? "visible" : ""}`}
                    >
                        <h3>{t.ctaTitle}</h3>
                        <p>{t.ctaDesc}</p>
                        {status === "success" && (
                            <div className="form-status success" role="alert">
                                {t.successMsg}
                            </div>
                        )}
                        {status === "error" && (
                            <div className="form-status error" role="alert">
                                {t.errorMsg}
                            </div>
                        )}
                        {(status === "idle" || status === "loading") && (
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
                                    disabled={status === "loading"}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder={t.phonePlaceholder}
                                    required
                                    autoComplete="tel"
                                    disabled={status === "loading"}
                                />
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t.messagePlaceholder}
                                    rows={4}
                                    disabled={status === "loading"}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-full btn-lg"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading"
                                        ? t.loadingBtn
                                        : t.submitBtn}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
