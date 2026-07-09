import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./GameJamHistory.css";

import HeroCarousel from "./HeroCarousel";
import IntroSection from "./IntroSection";
import TestimonialsCarousel from "./TestimonialsCarousel";
import OrganizersSection from "./OrganizersSection";
import FaqSection from "./FaqSection";
import PastEditionsPlaceholder from "./PastEditionsPlaceholder";

const GAMEJAM_SECTIONS = [
    { id: "hero", title: "Início" },
    { id: "intro", title: "Sobre a Jam" },
    { id: "editions", title: "Edições Anteriores" },
    { id: "testimonials", title: "Depoimentos" },
    { id: "organizers", title: "Idealizadores" },
    { id: "faq", title: "FAQ" }
];

const GameJamHistory: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("hero");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -30% 0px",
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        GAMEJAM_SECTIONS.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div className="gamejam-history-wrapper">
            {/* 1. Hero Carousel */}
            <HeroCarousel />

            <main className="container">
                {/* 2. O que é a A&B Game Jam? */}
                <IntroSection />

                {/* 3. Edições Anteriores (Links) */}
                <PastEditionsPlaceholder />

                {/* 4. Depoimentos (Carousel) */}
                <TestimonialsCarousel />

                {/* 5. Palavra dos Organizadores */}
                <OrganizersSection />

                {/* 6. FAQ Section */}
                <FaqSection />
            </main>

            {/* Guia de rolagem lateral (bolinhas no lado direito) */}
            <nav className="scroll-guide-nav" aria-label="Navegação lateral da Game Jam">
                {GAMEJAM_SECTIONS.map((section) => (
                    <div
                        key={section.id}
                        className={`scroll-guide-item ${activeSection === section.id ? "active" : ""}`}
                        onClick={() => scrollToSection(section.id)}
                    >
                        <span className="scroll-guide-label">{section.title}</span>
                        <div className="scroll-guide-dot"></div>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default GameJamHistory;
