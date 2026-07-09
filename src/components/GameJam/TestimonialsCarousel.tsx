import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS } from "./gameJamData";

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button className="gj-carousel-arrow gj-next-arrow testimonials-arrow" onClick={onClick} aria-label="Próximo Depoimento">
            <i className="bi bi-chevron-right"></i>
        </button>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button className="gj-carousel-arrow gj-prev-arrow testimonials-arrow" onClick={onClick} aria-label="Depoimento Anterior">
            <i className="bi bi-chevron-left"></i>
        </button>
    );
};

const TestimonialsCarousel: React.FC = () => {
    const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

    const toggleExpand = (idx: number) => {
        if (expandedIndices.includes(idx)) {
            setExpandedIndices(expandedIndices.filter(i => i !== idx));
        } else {
            setExpandedIndices([...expandedIndices, idx]);
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "24px" /* Espia o card anterior e o próximo */
                }
            }
        ]
    };

    const truncateText = (text: string, idx: number, limit: number = 120) => {
        const isExpanded = expandedIndices.includes(idx);
        
        if (text.length <= limit) return `"${text}"`;
        
        if (isExpanded) {
            return (
                <>
                    "{text}"
                    <span 
                        className="gj-read-more-link" 
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(idx);
                        }}
                    >
                         Ler menos
                    </span>
                </>
            );
        }

        return (
            <>
                "{text.slice(0, limit)}..."
                <span 
                    className="gj-read-more-link" 
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(idx);
                    }}
                >
                     Ler mais
                </span>
            </>
        );
    };

    return (
        <section className="gj-testimonials-section" id="testimonials">
            <h2 className="gj-section-title">O que dizem os participantes?</h2>
            <p className="gj-section-subtitle">
                Dá uma olhada no que alguns participantes dos eventos passados disseram sobre a experiência de participar da nossa Jam.
            </p>
            
            <div className="gj-testimonials-carousel-container">
                <Slider {...sliderSettings}>
                    {TESTIMONIALS.map((text, idx) => {
                        const isExpanded = expandedIndices.includes(idx);
                        return (
                            <div className="gj-testimonial-card-wrapper" key={idx}>
                                <div className={`gj-testimonial-card ${isExpanded ? "expanded" : ""}`}>
                                    <i className="bi bi-quote quote-icon"></i>
                                    <div className="gj-testimonial-text">
                                        {truncateText(text, idx)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
