import React from "react";

const IntroSection: React.FC = () => {
    return (
        <section className="gj-intro-section" id="intro">
            <div className="gj-intro-text-container">
                <p className="gj-intro-text">
                    A <span className="gj-intro-highlight">A&B Game Jam</span> é um evento organizado anualmente pelo grupo PETComp (PET de Ciência da Computação) da UNIOESTE, em Cascavel-PR.
                </p>
                <p className="gj-intro-text">
                    Nosso objetivo é promover o cenário de desenvolvimento de jogos em toda a região, oferecendo um espaço 100% aberto a todos.
                    <span className="gj-intro-highlight"> Não importa a sua idade, seu gênero, sua experiência ou formação. </span>
                    Nós promovemos um ambiente totalmente focado em inclusão, cooperação e aprendizado para quem deseja criar um jogo do zero.
                </p>
            </div>
        </section>
    );
};

export default IntroSection;
