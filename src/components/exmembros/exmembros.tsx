import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./exmembros.css";

import tutorImg from "./../../assets/images/members/profile.png";

const membros = [
    {
        nome: "Ronaldo Farias",
        icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
        membroDesde: "2022",
        links: {
            lattes: "https://orcid.org/0000-0002-0437-7249",
            instagram: "https://www.instagram.com/ronaldo.dck/",
            github: "https://github.com/ronaldo",
            email: "mailto:ronaldo@example.com",
        },
        saibaMais: {
            cidadeNatal: "Cascavel - PR",
            motivoCurso:
                "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
            alternativaCurso: "Música ou matemática.",
            academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
            hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
            livro: "“O Temor do Sábio”.",
            filme: "“Os Miseráveis”",
            jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
            musica: "“Prince Igor” - Borodin.",
            comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
        },
    },
    // Outros membros...
    {
        nome: "Ronaldo Farias",
        icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
        membroDesde: "2022",
        links: {
            lattes: "https://orcid.org/0000-0002-0437-7249",
            instagram: "https://www.instagram.com/ronaldo.dck/",
            github: "https://github.com/ronaldo",
            email: "mailto:ronaldo@example.com",
        },
        saibaMais: {
            cidadeNatal: "Cascavel - PR",
            motivoCurso:
                "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
            alternativaCurso: "Música ou matemática.",
            academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
            hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
            livro: "“O Temor do Sábio”.",
            filme: "“Os Miseráveis”",
            jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
            musica: "“Prince Igor” - Borodin.",
            comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
        },
    },
    {
        nome: "Ronaldo Farias",
        icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
        membroDesde: "2022",
        links: {
            lattes: "https://orcid.org/0000-0002-0437-7249",
            instagram: "https://www.instagram.com/ronaldo.dck/",
            github: "https://github.com/ronaldo",
            email: "mailto:ronaldo@example.com",
        },
        saibaMais: {
            cidadeNatal: "Cascavel - PR",
            motivoCurso:
                "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
            alternativaCurso: "Música ou matemática.",
            academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
            hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
            livro: "“O Temor do Sábio”.",
            filme: "“Os Miseráveis”",
            jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
            musica: "“Prince Igor” - Borodin.",
            comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
        },
    },
    {
        nome: "Ronaldo Farias",
        icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
        membroDesde: "2022",
        links: {
            lattes: "https://orcid.org/0000-0002-0437-7249",
            instagram: "https://www.instagram.com/ronaldo.dck/",
            github: "https://github.com/ronaldo",
            email: "mailto:ronaldo@example.com",
        },
        saibaMais: {
            cidadeNatal: "Cascavel - PR",
            motivoCurso:
                "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
            alternativaCurso: "Música ou matemática.",
            academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
            hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
            livro: "“O Temor do Sábio”.",
            filme: "“Os Miseráveis”",
            jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
            musica: "“Prince Igor” - Borodin.",
            comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
        },
    },
    {
        nome: "Ronaldo Farias",
        icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
        membroDesde: "2022",
        links: {
            lattes: "https://orcid.org/0000-0002-0437-7249",
            instagram: "https://www.instagram.com/ronaldo.dck/",
            github: "https://github.com/ronaldo",
            email: "mailto:ronaldo@example.com",
        },
        saibaMais: {
            cidadeNatal: "Cascavel - PR",
            motivoCurso:
                "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
            alternativaCurso: "Música ou matemática.",
            academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
            hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
            livro: "“O Temor do Sábio”.",
            filme: "“Os Miseráveis”",
            jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
            musica: "“Prince Igor” - Borodin.",
            comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
        },
    },
];

const Membros: React.FC = () => {
    const [selectedMembro, setSelectedMembro] = React.useState<number | null>(null);
    const handleShowModal = (index: number) => setSelectedMembro(index);
    const handleCloseModal = () => setSelectedMembro(null);

    return (
        <main className="container text-center mt-5">
            <h1 className="display-3 mt-5">EX-MEMBROS</h1>

            <div className="mt-5">
                <h2 className="display-6 mb-4">EX-Tutores</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                        <img
                            src={tutorImg}
                            alt="Tutor Guilherme Galante"
                            className="rounded-circle mb-3"
                            style={{ width: "200px", height: "200px" }}
                        />
                        <h3 className="fs-2">Marcio Seiji Oyamada</h3>
                        <p className="fs-4">Tutor desde 2016</p>
                    </div>

                    
                    <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                        <img
                            src={tutorImg}
                            alt="Tutor Vanessa Silva"
                            className="rounded-circle mb-3"
                            style={{ width: "200px", height: "200px" }}
                        />
                        <h3 className="fs-2">Clodis Boscarioli</h3>
                        <p className="fs-4">Tutor desde 2010</p>
                    </div>
                </div>
            </div>



            <div className="row justify-content-center mt-5">
                {membros.map((membro, index) => (
                    <div className="col-md-4 d-flex justify-content-center mb-4" key={index}>
                        <div className="card-custom text-white text-center p-3">
                            <img
                                src={tutorImg}
                                alt={`${membro.nome} profile`}
                                className="profile-avatar mx-auto mb-3"
                            />
                            <h4>{membro.nome}</h4>
                            <p className="small">{membro.icv}</p>
                            <p>
                                <strong>Membro desde {membro.membroDesde}</strong>
                            </p>

                            <div className="d-flex justify-content-center gap-3 mt-2">
                                {membro.links.lattes && (
                                    <a href={membro.links.lattes} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-file-earmark-person-fill text-white fs-4"></i>
                                    </a>
                                )}
                                {membro.links.instagram && (
                                    <a href={membro.links.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-instagram text-white fs-4"></i>
                                    </a>
                                )}
                                {membro.links.github && (
                                    <a href={membro.links.github} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github text-white fs-4"></i>
                                    </a>
                                )}
                                {membro.links.email && (
                                    <a href={membro.links.email}>
                                        <i className="bi bi-envelope-fill text-white fs-4"></i>
                                    </a>
                                )}
                            </div>

                            <button
                                className="btn btn-outline-light mt-3"
                                onClick={() => handleShowModal(index)}
                            >
                                Saiba mais...
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMembro !== null && (
                <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content text-black">
                            <div className="modal-header">
                                <h5 className="modal-title">{membros[selectedMembro].nome}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Cidade onde nasceu:</strong> {membros[selectedMembro].saibaMais?.cidadeNatal}</p>
                                <p><strong>Por que Ciência da Computação?</strong><br />{membros[selectedMembro].saibaMais?.motivoCurso}</p>
                                <p><strong>Se não fizesse Ciência da Computação:</strong><br />{membros[selectedMembro].saibaMais?.alternativaCurso}</p>
                                <p><strong>Pretende seguir na área acadêmica:</strong><br />{membros[selectedMembro].saibaMais?.academica}</p>
                                <p><strong>Hobby preferido:</strong><br />{membros[selectedMembro].saibaMais?.hobby}</p>
                                <p><strong>Livro preferido:</strong><br />{membros[selectedMembro].saibaMais?.livro}</p>
                                <p><strong>Filme preferido:</strong><br />{membros[selectedMembro].saibaMais?.filme}</p>
                                <p><strong>Jogo preferido:</strong><br />{membros[selectedMembro].saibaMais?.jogo}</p>
                                <p><strong>Música preferida:</strong><br />{membros[selectedMembro].saibaMais?.musica}</p>
                                <p><strong>Comida preferida:</strong><br />{membros[selectedMembro].saibaMais?.comida}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={handleCloseModal}>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Membros;
