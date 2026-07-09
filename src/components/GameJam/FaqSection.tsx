import React, { useState } from "react";
import { FAQ_DATA } from "./gameJamData";

const FaqSection: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        if (openFaqIndex === index) {
            setOpenFaqIndex(null);
        } else {
            setOpenFaqIndex(index);
        }
    };

    return (
        <section className="gj-faq-section" id="faq">
            <h2 className="gj-section-title">Perguntas Frequentes</h2>
            <p className="gj-section-subtitle">
                Tire suas dúvidas sobre o formato e as regras da A&B Game Jam.
            </p>

            <div className="gj-faq-container">
                {FAQ_DATA.map((faq, idx) => (
                    <div className={`gj-faq-item ${openFaqIndex === idx ? "active" : ""}`} key={idx}>
                        <button className="gj-faq-question" onClick={() => toggleFaq(idx)}>
                            {faq.question}
                            <i className="bi bi-chevron-down gj-faq-icon"></i>
                        </button>
                        <div className="gj-faq-answer">
                            {faq.answer.split("\n\n").map((paragraph, pIdx) => (
                                <p key={pIdx} style={{ marginBottom: "1rem" }}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
