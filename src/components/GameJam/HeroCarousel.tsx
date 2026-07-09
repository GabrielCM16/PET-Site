import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Generic placeholders for carousel
import imgPlaceholder1 from "../../assets/images/projects/GameJam.png";
import imgPlaceholder2 from "../../assets/images/projects/gamejam2025.jpg";
import imgPlaceholder3 from "../../assets/images/projects/petdiscute.png";

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button className="gj-carousel-arrow gj-next-arrow" onClick={onClick} aria-label="Próximo Slide">
            <i className="bi bi-chevron-right"></i>
        </button>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button className="gj-carousel-arrow gj-prev-arrow" onClick={onClick} aria-label="Slide Anterior">
            <i className="bi bi-chevron-left"></i>
        </button>
    );
};

const HeroCarousel: React.FC = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        fade: true
    };

    return (
        <div className="gj-hero-container" id="hero">
            <Slider {...sliderSettings}>
                <div className="gj-carousel-item">
                    <img src={imgPlaceholder1} alt="Game Jam Moment 1" className="gj-carousel-img" />
                    <div className="gj-carousel-overlay"></div>
                    <div className="gj-carousel-content">
                        <h1>A&B Game Jam</h1>
                        <p>Histórico, Experiências e Comunidade.</p>
                    </div>
                </div>
                <div className="gj-carousel-item">
                    <img src={imgPlaceholder2} alt="Game Jam Moment 2" className="gj-carousel-img" />
                    <div className="gj-carousel-overlay"></div>
                    <div className="gj-carousel-content">
                        <h1>A&B Game Jam</h1>
                        <p>Criar jogos DO ZERO e promover inclusão.</p>
                    </div>
                </div>
                <div className="gj-carousel-item">
                    <img src={imgPlaceholder3} alt="Game Jam Moment 3" className="gj-carousel-img" />
                    <div className="gj-carousel-overlay"></div>
                    <div className="gj-carousel-content">
                        <h1>A&B Game Jam</h1>
                        <p>Não importa a idade ou experiência, faça parte!</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HeroCarousel;
