import { useState, useEffect } from "react";
import { GALLERY_SLIDES } from "../constants";
import "../App.css";

export function GallerySlider() {
    const [current, setCurrent] = useState(0);
    const total = GALLERY_SLIDES.length;

    useEffect(() => {
        const timer = setInterval(
            () => setCurrent((i) => (i + 1) % total),
            4500,
        );
        return () => clearInterval(timer);
    }, [total]);

    return (
        <div className="gallery-slider" aria-label="Фотографии сервиса">
            {GALLERY_SLIDES.map((slide, i) => (
                <div
                    key={i}
                    className={`gallery-slide ${i === current ? "active" : ""}`}
                    aria-hidden={i !== current}
                >
                    <img src={slide.src} alt={slide.alt} loading="lazy" />
                </div>
            ))}
            <div className="gallery-dots" role="tablist">
                {GALLERY_SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`gallery-dot ${i === current ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Слайд ${i + 1}`}
                        role="tab"
                        aria-selected={i === current}
                    />
                ))}
            </div>
        </div>
    );
}
