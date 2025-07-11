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
import petdiscute from './../../assets/images/projects/petdiscute.png';
import icvs from './../../assets/images/projects/icvs.png';


const Projetos: React.FC = () => {
    const [mobile, setMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expandedLixo, setExpandedLixo] = useState(false);
    const [expandedDivulgacao, setExpandedDivulgacao] = useState(false);
    const [expandedDocom, setExpandedDocom] = useState(false);
    const [expandedPetcode, setExpandedPetcode] = useState(false);
    const [expandedPetvoluntario, setExpandedPetvoluntario] = useState(false);
    const [expandedRecepcao, setExpandedRecepcao] = useState(false);
    const [expandedCipet, setExpandedCipet] = useState(false);
    const [expandedAvaliacao, setExpandedAvaliacao] = useState(false);
    const [expandedSeminarios, setExpandedSeminarios] = useState(false);
    const [expandedNewsPETLetter, setExpandedNewsPETLetter] = useState(false);
    const [expandedEventos, setExpandedEventos] = useState(false);
    const [expandedPetDiscute, setExpandedPetDiscute] = useState(false);
    const [expandedCinePet, setExpandedCinePet] = useState(false);
    const [expandedIndividuais, setExpandedIndividuais] = useState(false);


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

                <div className="row justify-content-center">
                    {/* PETCode */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">PETCode</h2>

                            <img
                                src={minicurso}
                                alt="PETCode"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedPetcode && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedPetcode(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedPetcode && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">Neste projeto, o grupo tem como compromisso realizar atividades relacionadas a programação.</div>
                                        <div className="mb-2 fw-bold">Minicurso de Criptografia Aplicada:</div>
                                        <div className="mb-2">
                                            Em 2025, o PETComp promoverá um Minicurso de Criptografia Aplicada aberto à comunidade interna e externa da Unioeste. O objetivo principal é apresentar fundamentos da criptografia com aplicações práticas em segurança da informação.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedPetcode(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* PETVoluntário */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">PETVoluntário</h2>

                            <img
                                src={agasalho}
                                alt="Campanha PETVoluntário"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedPetvoluntario && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedPetvoluntario(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedPetvoluntario && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Este projeto contempla ações solidárias voltadas à comunidade externa, como campanhas de doação de sangue, arrecadação de agasalhos e outros itens essenciais.
                                        </div>
                                        <div className="mb-2">
                                            O objetivo é promover cidadania, empatia e responsabilidade social entre os petianos e a sociedade.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedPetvoluntario(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* Recepção dos Calouros */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">Recepção dos Calouros</h2>

                            <img
                                src={recepcao}
                                alt="Recepção dos Calouros"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedRecepcao && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedRecepcao(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedRecepcao && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Para facilitar a integração dos novos calouros ao curso de Ciência da Computação da Unioeste, o PET realiza uma apresentação institucional.
                                        </div>
                                        <div className="mb-2">
                                            A atividade aborda o funcionamento do sistema universitário, o programa PET e orientações fundamentais para os ingressantes.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedRecepcao(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* CiPET */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">CiPET</h2>

                            <img
                                src={cipet}
                                alt="CiPET"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedCipet && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedCipet(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedCipet && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            O CiPET promove palestras e painéis com convidados da área de Computação, incluindo ex-alunos, profissionais, startups e empresas.
                                        </div>
                                        <div className="mb-2">
                                            O objetivo é proporcionar uma visão prática sobre tendências, trajetórias e oportunidades, aproximando o curso do mercado.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedCipet(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* Avaliação de Disciplinas */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">Avaliação de Disciplinas</h2>

                            <img
                                src={avaliacao}
                                alt="Avaliação de Disciplinas"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedAvaliacao && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedAvaliacao(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedAvaliacao && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Ao final de cada semestre, o PETComp aplica um formulário anônimo para avaliação das disciplinas, permitindo feedbacks construtivos sobre conteúdo e didática.
                                        </div>
                                        <div className="mb-2">
                                            Os resultados são compartilhados com professores e coordenação, visando melhorias contínuas no ensino-aprendizagem.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedAvaliacao(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Seminários Multidisciplinares */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">Seminários Multidisciplinares</h2>

                            <img
                                src={seminarios}
                                alt="Seminários Multidisciplinares"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedSeminarios && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedSeminarios(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedSeminarios && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Os Seminários são encontros onde petianos apresentam temas técnicos, científicos ou gerais, focados em oratória, síntese e troca de conhecimento.
                                        </div>
                                        <div className="mb-2">
                                            Essa iniciativa fortalece o ambiente colaborativo e o aprendizado contínuo no grupo.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedSeminarios(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* NewsPETLetter */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">NewsPETLetter</h2>

                            <img
                                src={newspet}
                                alt="NewsPETLetter"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedNewsPETLetter && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedNewsPETLetter(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedNewsPETLetter && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Projeto focado na divulgação de conteúdos atuais da área de Computação via Instagram, incluindo novidades tecnológicas e tendências como IA Veo 3.
                                        </div>
                                        <div className="mb-2">
                                            Objetiva manter a comunidade acadêmica informada e engajada com as inovações tecnológicas.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedNewsPETLetter(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Eventos e Visitas Técnicas */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">Eventos e Visitas Técnicas</h2>

                            <img
                                src={visitasTEC}
                                alt="Eventos e Visitas Técnicas"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedEventos && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedEventos(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedEventos && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Incentivo e organização da participação em eventos técnico-científicos e visitas técnicas para ampliar a formação acadêmica e vivência prática.
                                        </div>
                                        <div className="mb-2">
                                            Aproxima alunos do mercado e estimula o desenvolvimento profissional.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedEventos(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* PET Discute */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">PET Discute</h2>

                            <img
                                src={petdiscute}
                                alt="PET Discute"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedPetDiscute && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedPetDiscute(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedPetDiscute && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Iniciativa interna para estimular pensamento crítico e cidadania. Os membros propõem temas atuais (tecnologia, política, ética etc.) para discussão.
                                        </div>
                                        <div className="mb-2">
                                            Foco em promover diálogo construtivo e interdisciplinar dentro do grupo.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedPetDiscute(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* CinePET */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">CinePET</h2>

                            <img
                                src={cinepet}
                                alt="CinePET"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedCinePet && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedCinePet(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedCinePet && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Sessões com filmes, documentários ou palestras seguidas de debate, com foco no desenvolvimento crítico, acadêmico e pessoal dos petianos.
                                        </div>
                                        <div className="mb-2">
                                            Estimula a troca de perspectivas e a reflexão coletiva sobre temas relevantes.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedCinePet(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center">
                    {/* Projetos Individuais */}
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                        <div className="card-custom text-white text-center p-3" style={{ maxWidth: "600px", width: "100%" }}>
                            <h2 className="display-5 mb-3">Projetos Individuais</h2>

                            <img
                                src={icvs}
                                alt="Projetos Individuais"
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 200, objectFit: "contain" }}
                            />

                            {!expandedIndividuais && (
                                <div className="mt-3">
                                    <button className="btn btn-outline-light" onClick={() => setExpandedIndividuais(true)}>
                                        Saiba mais...
                                    </button>
                                </div>
                            )}

                            {expandedIndividuais && (
                                <>
                                    <div className="text-center fs-6 mb-3">
                                        <div className="mb-2">
                                            Cada petiano desenvolve um projeto individual registrado como ICV, com foco em pesquisa, extensão ou inovação tecnológica.
                                        </div>
                                        <div className="mb-2">
                                            Essa prática fortalece a autonomia, o método científico e a contribuição acadêmica dos membros.
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-light" onClick={() => setExpandedIndividuais(false)}>
                                        Mostrar menos
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>





            </section>



        </main >
    );
};

export default Projetos;
