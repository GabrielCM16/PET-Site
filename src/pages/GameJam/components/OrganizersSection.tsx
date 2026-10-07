import React from "react";

const OrganizersSection: React.FC = () => {
    return (
        <section className="gj-organizers-section" id="organizers">
            <h2 className="gj-section-title">Uma palavra dos idealizadores</h2>
            <p className="gj-section-subtitle">
                A ideia por trás da A&B Game Jam e o que queremos construir com a comunidade.
            </p>

            <div className="gj-organizers-list">

                <article className="gj-organizer-quote">
                    <i className="bi bi-quote"></i>

                    <p>
                        A A&amp;B nasceu da vontade de mostrar que uma Game Jam pode ser mais do que uma competição.
                        Acreditamos que colaboração, troca de conhecimento e comunidade fazem muito mais diferença do
                        que disputar quem faz o melhor jogo. Queremos que qualquer pessoa, mesmo sem experiência,
                        sinta que pode participar e criar algo incrível.
                    </p>

                    <span>— Javan</span>
                </article>

                <article className="gj-organizer-quote">
                    <i className="bi bi-quote"></i>

                    <p>
                        Nosso objetivo é fazer o evento crescer sem perder sua essência. Queremos que seja um espaço
                        acolhedor para aprender, conhecer pessoas e descobrir como desenvolver jogos pode ser divertido.
                        Se a A&amp;B inspirar mais pessoas a entrar nesse universo, teremos alcançado nosso propósito.
                    </p>

                    <span>— Mahat</span>
                </article>

            </div>
        </section>
    );
};

export default OrganizersSection;