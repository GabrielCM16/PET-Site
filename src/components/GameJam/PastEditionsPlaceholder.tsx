import React from "react";


import bugPcIcon from "./icons/bug-do-computador.png";
import fantasmaIcon from "./icons/fantasma.png";
import espacoSideralIcon from "./icons/espaco-sideral.png";
import aboboraIcon from "./icons/abobora-com-raiva-do-mal.png";
import pragaMedicoIcon from "./icons/medico-da-peste.png";
import pacmanIcon from "./icons/jogo.png";
import aventuraIcon from "./icons/aventura.png";
import espadasIcon from "./icons/espadas.png";
import dado from "./icons/dado.png"

// Pixel Art Helper to render retro sprites using inline SVGs
interface PixelArtProps {
    matrix: string[];
    colors: { [key: string]: string };
    size?: number;
}

const PixelArt: React.FC<PixelArtProps> = ({ matrix, colors, size = 42 }) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    return (
        <svg width={size} height={size} viewBox={`0 0 ${cols} ${rows}`} style={{ imageRendering: 'pixelated' }}>
            {matrix.map((row, rIdx) => 
                row.split('').map((char, cIdx) => {
                    if (char === ' ' || !colors[char]) return null;
                    return <rect key={`${rIdx}-${cIdx}`} x={cIdx} y={rIdx} width="1.05" height="1.05" fill={colors[char]} />;
                })
            )}
        </svg>
    );
};

const marioMatrix = [
    "   RRRRR   ",
    "  RRRRRRRRR",
    "  KKKSSKS  ",
    " KKSKSKKSSS",
    " KKSKKSSSKS",
    " KKKSSSSKK ",
    "   SSSSSSS ",
    "  RRSRRSRR ",
    " RRRSRRSRRR",
    "RRRRSSSSRRR"
];

interface EditionItem {
    edition: string;
    year: string;
    url: string;
    color: string;
    spriteType: 'image' | 'svg';
    spriteImage?: string;
    matrix?: string[];
    colors?: Record<string, string>;
}

const editions: EditionItem[] = [
    { edition: "X", year: "2026", url: "gamejam10", color: "#FFD700", spriteType: "image", spriteImage: dado },
    { edition: "IX", year: "2025", url: "https://itch.io/jam/ab-gamejam-ix", color: "#39ff14", spriteType: "image", spriteImage: bugPcIcon },
    { edition: "VIII", year: "2024", url: "https://itch.io/jam/ab-game-jam-viii", color: "#ff2a5f", spriteType: "image", spriteImage: fantasmaIcon },
    { edition: "VII", year: "2023", url: "https://itch.io/jam/ab-game-jam-vii", color: "#ffea00", spriteType: "svg", matrix: marioMatrix, colors: { R: "#ff0000", K: "#6b3e26", S: "#ffcc99" } },
    { edition: "VI", year: "2022", url: "https://itch.io/jam/ab-game-jam-vi", color: "#00e5ff", spriteType: "image", spriteImage: espacoSideralIcon },
    { edition: "V", year: "2021", url: "https://gamejolt.com/search/games?q=abgamejam5", color: "#ffaa00", spriteType: "image", spriteImage: aboboraIcon },
    { edition: "IV", year: "2020", url: "https://gamejolt.com/search/games?q=abgamejam4", color: "#00f5d4", spriteType: "image", spriteImage: pragaMedicoIcon },
    { edition: "III", year: "2019", url: "https://gamejolt.com/search/games?q=abgamejam3", color: "#f15bb5", spriteType: "image", spriteImage: pacmanIcon },
    { edition: "II", year: "2018", url: "https://gamejolt.com/search/games?q=abgamejam2", color: "#e0aaff", spriteType: "image", spriteImage: aventuraIcon },
    { edition: "I", year: "2018", url: "https://gamejolt.com/search/games?q=abgamejam", color: "#9b5de5", spriteType: "image", spriteImage: espadasIcon },
];

const PastEditionsPlaceholder: React.FC = () => {
    return (
        <section className="gj-past-editions-section" id="editions">
            <h2 className="gj-section-title">Edições Anteriores</h2>
            <p className="gj-section-subtitle">
                Uma jornada criativa no tempo. Acompanhe a evolução da nossa Jam ao longo dos anos.
            </p>
            
            <div className="gj-timeline">
                {editions.map((item, index) => (
                    <div key={index} className="gj-timeline-item">
                        <div className="gj-timeline-dot" style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}` }}></div>
                        <div className="gj-timeline-content" style={{ borderTop: `3px solid ${item.color}` }}>
                            
                            <div className="gj-timeline-sprite">
                                {item.spriteType === 'image' && item.spriteImage ? (
                                    <img 
                                        src={item.spriteImage} 
                                        alt="Sprite" 
                                        style={
                                            item.edition === "VIII" 
                                                ? { transform: "scaleX(-1)", filter: "invert(1) brightness(0.85)" } 
                                                : item.edition === "III"
                                                    ? { filter: "invert(92%) sepia(95%) saturate(3000%) hue-rotate(350deg) brightness(102%) contrast(105%)" }
                                                    : undefined
                                        } 
                                    />
                                ) : (
                                    item.matrix && item.colors && (
                                        <PixelArt matrix={item.matrix} colors={item.colors} size={48} />
                                    )
                                )}
                            </div>

                            <span className="gj-timeline-year" style={{ color: item.color }}>{item.year}</span>
                            <h3 className="gj-timeline-title">A&B Game Jam {item.edition}</h3>
                            <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="gj-timeline-btn"
                                style={{ '--hover-color': item.color } as React.CSSProperties}
                            >
                                Explorar Jogos <i className="bi bi-controller"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PastEditionsPlaceholder;
