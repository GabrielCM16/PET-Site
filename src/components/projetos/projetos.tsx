import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projetos.css";

import gamejam from './../../assets/images/projects/GameJam.png';
import lixo from './../../assets/images/projects/lixo.png';
import divulgacao from './../../assets/images/projects/DivulgacaoCurso.png';
import docom from './../../assets/images/projects/insta.png';
import minicurso from './../../assets/images/projects/minicurso.png';
import agasalho from './../../assets/images/projects/Agasalho.png';
import recepcao from './../../assets/images/projects/recepcao.png';
import cipet from './../../assets/images/projects/cipet.png';
import avaliacao from './../../assets/images/projects/avaliacaoDisciplinas.png';
import seminarios from './../../assets/images/projects/SeminariosMult.png';
import newspet from './../../assets/images/projects/newspet.png';
import visitasTEC from './../../assets/images/projects/VisitasTec.png';
import cinepet from './../../assets/images/projects/cinepet.png';


const Projetos: React.FC = () => {
    const [mobile, setMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expandedLixo, setExpandedLixo] = useState(false);
    const [expandedDivulgacao, setExpandedDivulgacao] = useState(false);
const [expandedDocom, setExpandedDocom] = useState(false);


    useEffect(() => {
        setMobile(window.innerWidth < 1000);
    }, []);

    return (
        <main className="container px-3 my-5 projetos-container text-center">

            <section className="text-center my-5">
    <h1 className="display-4 mb-5">Projetos</h1>

    {/* Primeira linha: Game Jam + Lixo Eletrônico */}
    <div className="row justify-content-center">
        {/* A&B Game Jam */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
            <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                <h2 className="display-5 mb-3">A&B Game Jam</h2>
                <img src={gamejam} alt="Logo A&B Game Jam" className="img-fluid rounded mb-3" style={{ maxHeight: 200, objectFit: "contain" }} />
                {!expanded && (
                    <div className="mt-3">
                        <button className="btn btn-outline-light" onClick={() => setExpanded(true)}>Saiba mais...</button>
                    </div>
                )}
                {expanded && (
                    <>
                        <div className="text-center fs-6 mb-3">
                            <div className="mb-2">A A&B Game Jam é um evento anual organizado pelo PETComp como parte do projeto de Organização de Eventos.</div>
                            <div className="mb-2">Neste evento, estudantes da Unioeste e a comunidade externa criam um jogo do zero em uma semana seguindo um tema definido.</div>
                            <div className="mb-2">Em 2025, será realizada a <strong>A&B Game Jam IX</strong>!</div>
                            <div className="mb-2">Resultados anteriores:</div>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                <a href="https://itch.io/jam/ab-game-jam-viii" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">VIII 2024</a>
                                <a href="https://itch.io/jam/ab-game-jam-vii" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">VII 2023</a>
                                <a href="https://itch.io/jam/ab-game-jam-vi" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">VI 2022</a>
                                <a href="https://gamejolt.com/search/games?q=abgamejam5" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">V 2021</a>
                                <a href="https://gamejolt.com/search/games?q=abgamejam4" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">IV 2020</a>
                                <a href="https://gamejolt.com/search/games?q=abgamejam3" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">III 2019</a>
                                <a href="https://gamejolt.com/search/games?q=abgamejam2" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">II 2018</a>
                                <a href="https://gamejolt.com/search/games?q=abgamejam" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">I 2018</a>
                            </div>
                        </div>
                        <button className="btn btn-outline-light" onClick={() => setExpanded(false)}>Mostrar menos</button>
                    </>
                )}
            </div>
        </div>

        {/* Coleta de Lixo Eletrônico */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
            <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                <h2 className="display-5 mb-3">Coleta de lixo eletrônico</h2>
                <img src={lixo} alt="Coleta de lixo eletrônico" className="img-fluid rounded mb-3" style={{ maxHeight: 200, objectFit: "contain" }} />
                {!expandedLixo && (
                    <div className="mt-3">
                        <button className="btn btn-outline-light" onClick={() => setExpandedLixo(true)}>Saiba mais...</button>
                    </div>
                )}
                {expandedLixo && (
                    <>
                        <div className="text-center fs-6 mb-3">
                            <div className="mb-2">O grupo disponibiliza lixeiras exclusivas para a coleta de lixo eletrônico no Campus da Unioeste Cascavel.</div>
                            <div className="mb-2">Essa iniciativa visa principalmente auxiliar a comunidade na destinação adequada desse tipo de resíduo, promovendo sustentabilidade e responsabilidade ambiental.</div>
                        </div>
                        <button className="btn btn-outline-light" onClick={() => setExpandedLixo(false)}>Mostrar menos</button>
                    </>
                )}
            </div>
        </div>
    </div>

    {/* Segunda linha: Divulgação + DOCOM */}
    <div className="row justify-content-center">
        {/* Divulgação do curso */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
            <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                <h2 className="display-5 mb-3">Divulgação do curso</h2>
                <img src={divulgacao} alt="Divulgação do curso" className="img-fluid rounded mb-3" style={{ maxHeight: 200, objectFit: "contain" }} />
                {!expandedDivulgacao && (
                    <div className="mt-3">
                        <button className="btn btn-outline-light" onClick={() => setExpandedDivulgacao(true)}>Saiba mais...</button>
                    </div>
                )}
                {expandedDivulgacao && (
                    <>
                        <div className="text-center fs-6 mb-3">
                            <div className="mb-2">Para promover o curso de Ciência da Computação da Unioeste de Cascavel, a equipe se compromete a realizar visitas em escolas como estratégia fundamental de divulgação.</div>
                            <div className="mb-2">Essa iniciativa visa informar a comunidade sobre as oportunidades educacionais disponíveis e atrair potenciais interessados na área.</div>
                        </div>
                        <button className="btn btn-outline-light" onClick={() => setExpandedDivulgacao(false)}>Mostrar menos</button>
                    </>
                )}
            </div>
        </div>

        {/* DOCOM */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
            <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                <h2 className="display-5 mb-3">DOCOM</h2>
                <img src={docom} alt="DOCOM" className="img-fluid rounded mb-3" style={{ maxHeight: 200, objectFit: "contain" }} />
                {!expandedDocom && (
                    <div className="mt-3">
                        <button className="btn btn-outline-light" onClick={() => setExpandedDocom(true)}>Saiba mais...</button>
                    </div>
                )}
                {expandedDocom && (
                    <>
                        <div className="text-center fs-6 mb-3">
                            <div className="mb-2">Para documentar e divulgar as atividades realizadas, o grupo registra todos os projetos em locais de acesso exclusivo para os petianos vigentes e futuros.</div>
                            <div className="mb-2">
                                Além disso, compartilha publicamente suas ações por meio do{" "}
                                <a
                                    href="https://www.instagram.com/petcomp_unioeste/"
                                    className="text-white text-decoration-underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>.
                            </div>
                        </div>
                        <button className="btn btn-outline-light" onClick={() => setExpandedDocom(false)}>Mostrar menos</button>
                    </>
                )}
            </div>
        </div>
    </div>
</section>

            {/* PETCODE */}
            <section className="text-center my-5 px-3">
                <h2 className="display-4">PETCode</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Neste projeto, o grupo tem como compromisso realizar atividades relacionadas a programação:
                </p>

                <div className="row justify-content-center align-items-center mt-4" style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <div className="col-md-6">
                        <p className="fs-4 fw-bold">Minicurso de Criptografia Aplicada:</p>
                        <p className="fs-4">
                            Em 2025, o PETComp promoverá um Minicurso de Criptografia Aplicada aberto à comunidade interna e externa da Unioeste.
                            O objetivo principal deste minicurso é apresentar conceitos fundamentais de criptografia, com foco em aplicações práticas no contexto da segurança da informação.
                        </p>

                    </div>
                    <div className="col-md-6 text-center">
                        <div className="mx-auto" style={{ maxWidth: 400 }}>
                            <img
                                src={minicurso}
                                alt="Logo Petcomp"
                                className="img-fluid w-100 mt-4"
                            />
                        </div>

                    </div>
                </div>


            </section>

            {/* PETVOLUNTÁRIO */}
            <section className="text-center my-5">
                <h2 className="display-4">PETVoluntário</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Este projeto contempla ações solidárias voltadas à comunidade externa, como campanhas de doação de sangue, arrecadação de agasalhos e outros itens essenciais para pessoas em situação de vulnerabilidade, promovendo cidadania e responsabilidade social.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={agasalho}
                        alt="Campanha PETVoluntário"
                        className="img-fluid w-100 mt-3"
                    />
                </div>
            </section>


            {/* RECEPÇÃO DOS CALOUROS */}
            <section className="text-center my-5 mb-5">
                <h2 className="display-4">Recepção dos Calouros</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Para facilitar a integração dos novos calouros ao curso de Ciência da Computação na universidade,
                    o PET realiza uma apresentação abordando o programa, o funcionamento do sistema universitário e informações essenciais que os alunos necessitam conhecer.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={recepcao}
                        alt="Campanha PETVoluntário"
                        className="img-fluid w-100 mt-3"
                    />
                </div>
            </section>

            {/* CiPET */}
            <section className="text-center my-5">
                <h2 className="display-4">CiPET</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    O CiPET é um projeto do PETComp que promove palestras e painéis com convidados de diversas áreas da Computação,
                    incluindo ex-alunos, ex-petianos, profissionais do mercado, empresas e startups. O objetivo é proporcionar aos estudantes
                    do curso uma visão ampla e atualizada sobre diferentes trajetórias profissionais, tendências tecnológicas e oportunidades na área,
                    fortalecendo o vínculo entre academia e mercado.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={cipet}
                        alt="CiPET"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* Avaliação de Disciplinas */}
            <section className="text-center my-5">
                <h2 className="display-4">Avaliação de Disciplinas</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Ao final de cada semestre, o PETComp aplica um formulário de avaliação anônima sobre as disciplinas cursadas,
                    permitindo que os alunos forneçam feedbacks construtivos a respeito do conteúdo, da didática e da atuação dos docentes.
                    Os resultados são consolidados e repassados aos professores e à coordenação do curso, com o objetivo de promover melhorias contínuas
                    no processo de ensino-aprendizagem.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={avaliacao}
                        alt="Avaliação de Disciplinas"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* Seminários Multidisciplinares */}
            <section className="text-center my-5">
                <h2 className="display-4">Seminários Multidisciplinares</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Os Seminários Multidisciplinares são encontros internos onde cada petiano realiza apresentações sobre temas de seu interesse — técnicos, científicos ou gerais.
                    Essa atividade tem como foco o desenvolvimento da oratória, da capacidade de síntese e da troca de conhecimentos entre os membros do grupo,
                    promovendo um ambiente colaborativo e de aprendizado contínuo.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={seminarios}
                        alt="Seminários Multidisciplinares"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* NewsPETLetter */}
            <section className="text-center my-5">
                <h2 className="display-4">NewsPETLetter</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    O NewsPETLetter é um projeto voltado à divulgação de conteúdos atuais e relevantes da área de Computação, por meio de postagens no Instagram do grupo.
                    Os temas abordados incluem novidades tecnológicas, ferramentas emergentes, conceitos avançados e tendências como a nova IA Veo 3, entre outros.
                    O objetivo é manter a comunidade acadêmica informada e engajada com o que há de mais recente no universo da tecnologia.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={newspet}
                        alt="NewsPETLetter"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* Participação em Eventos e Visitas Técnicas */}
            <section className="text-center my-5">
                <h2 className="display-4">Eventos e Visitas Técnicas</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    O PETComp incentiva e organiza a participação dos petianos em eventos técnico-científicos, como congressos, simpósios e feiras de tecnologia,
                    além de promover visitas técnicas e culturais a empresas, centros de pesquisa e instituições relevantes. Essas ações visam ampliar a formação acadêmica,
                    aproximar os alunos do mercado de trabalho e estimular a vivência prática dos conhecimentos adquiridos em sala de aula.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={visitasTEC}
                        alt="Eventos e Visitas Técnicas"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* PET Discute */}
            <section className="text-center my-5">
                <h2 className="display-4">PET Discute</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    O PET Discute é uma iniciativa interna que estimula o pensamento crítico e a formação cidadã dos petianos. Periodicamente, cada membro traz um tema atual —
                    envolvendo tecnologia, sociedade, política, ciência ou ética — para ser debatido em grupo. A proposta é fomentar discussões construtivas, ampliar visões e promover o diálogo interdisciplinar entre os integrantes.
                </p>
            </section>

            {/* CinePET */}
            <section className="text-center my-5">
                <h2 className="display-4">CinePET</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    O CinePET é uma atividade realizada periodicamente pelo grupo, na qual são exibidos documentários, palestras, filmes ou TED Talks que abordam temas relevantes para a formação pessoal, acadêmica ou profissional dos petianos. Após a exibição, os participantes são convidados a refletir e debater sobre o conteúdo apresentado, promovendo senso crítico e troca de perspectivas.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={cinepet}
                        alt="CinePET"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* Projetos Individuais */}
            <section className="text-center my-5">
                <h2 className="display-4">Projetos Individuais</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Cada petiano desenvolve um projeto individual ao longo de sua trajetória no grupo, podendo ser de natureza científica, tecnológica ou de extensão.
                    Esses projetos, registrados como Iniciação Científica Voluntária (ICV) na universidade, permitem que os membros aprofundem seus conhecimentos em temas específicos,
                    desenvolvam metodologias de pesquisa e contribuam ativamente com soluções e estudos relevantes para a comunidade acadêmica e externa.
                </p>
            </section>



        </main >
    );
};

export default Projetos;
