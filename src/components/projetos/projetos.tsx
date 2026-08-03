import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projetos.css";

import gamejam from './../../assets/images/projects/GameJam.png';
import lixo from './../../assets/images/projects/lixoeletronico.png';
import divulgacao from './../../assets/images/projects/divulgacaocurso.jpg';
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

const PROJETOS_LIST = [
    { id: "gamejam", title: "A&B Game Jam" },
    { id: "lixo", title: "Coleta de Lixo" },
    { id: "divulgacao", title: "Divulgação do Curso" },
    { id: "docom", title: "DOCOM" },
    { id: "petcode", title: "PETCode" },
    { id: "petvoluntario", title: "PETVoluntário" },
    { id: "recepcao", title: "Recepção dos Calouros" },
    { id: "avaliacao", title: "Avaliação de Disciplinas" },
    { id: "seminarios", title: "Seminários Multidisciplinares" },
    { id: "eventos", title: "Eventos e Visitas" },
    { id: "newspet", title: "NewsPETLetter" },
    { id: "cipet", title: "CiPET" },
    { id: "petdiscute", title: "PET Discute" },
    { id: "cinepet", title: "CinePET" },
    { id: "individuais", title: "Projetos Individuais" }
];

const Projetos: React.FC = () => {
    const [, setMobile] = useState(false);
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

    const [activeSection, setActiveSection] = useState<string>("gamejam");

    useEffect(() => {
        setMobile(window.innerWidth < 1000);

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

        PROJETOS_LIST.forEach((proj) => {
            const el = document.getElementById(proj.id);
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
        <div className="projetos-page-wrapper">
            <main className="container px-3 projetos-container text-center">
                <section>
                    <h1 className="projetos-title">Projetos</h1>

                    {/* 1. A&B Game Jam */}
                    <div className="row projeto-section align-items-center" id="gamejam">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={gamejam} alt="Logo A&B Game Jam" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>A&B Game Jam</h2>
                                <div className="projeto-desc">
                                    A A&B Game Jam é um evento anual organizado pelo PETComp como parte do projeto de Organização de Eventos.
                                    Neste evento, estudantes da Unioeste e a comunidade externa criam um jogo do zero em uma semana seguindo um tema definido.
                                    Em 2026, será realizada a <strong>A&B Game Jam X</strong>!
                                </div>
                                <div className="button-group-projeto">
                                    <Link to="/gamejam10" className="btn-gamejam-custom">Ver Histórico de Game Jams 🎮</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 2. Coleta de lixo eletrônico */}
                    <div className="row projeto-section align-items-center" id="lixo">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={lixo} alt="Coleta de lixo eletrônico" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>Coleta de Lixo Eletrônico</h2>
                                <div className="projeto-desc">
                                    O grupo disponibiliza lixeiras exclusivas para a coleta de lixo eletrônico no Campus da Unioeste Cascavel.
                                    Essa iniciativa visa principalmente auxiliar a comunidade na destinação adequada desse tipo de resíduo, promovendo sustentabilidade e responsabilidade ambiental.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedLixo && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedLixo(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedLixo && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Essa ação ajuda a evitar o descarte de materiais pesados e tóxicos em lixo comum, contribuindo ativamente para a reciclagem e logística reversa de eletrônicos no campus.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedLixo(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 3. Divulgação do curso */}
                    <div className="row projeto-section align-items-center" id="divulgacao">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={divulgacao} alt="Divulgação do curso" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>Divulgação do Curso</h2>
                                <div className="projeto-desc">
                                    Para promover o curso de Ciência da Computação da Unioeste de Cascavel, a equipe se compromete a realizar visitas em escolas como estratégia fundamental de divulgação.
                                    Essa iniciativa visa informar a comunidade sobre as oportunidades educacionais disponíveis e atrair potenciais interessados na área.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedDivulgacao && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedDivulgacao(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedDivulgacao && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Apresentamos a grade curricular, o mercado de trabalho, e as atividades desenvolvidas no campus para desmistificar a área de tecnologia e atrair novos estudantes talentosos.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedDivulgacao(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 4. DOCOM */}
                    <div className="row projeto-section align-items-center" id="docom">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={docom} alt="DOCOM" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>DOCOM</h2>
                                <div className="projeto-desc">
                                    Para documentar e divulgar as atividades realizadas, o grupo registra todos os projetos em locais de acesso exclusivas para os petianos vigentes e futuros.
                                    Além disso, compartilha publicamente suas ações por meio das redes sociais para engajar a comunidade.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedDocom && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedDocom(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedDocom && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Você pode acompanhar todas as nossas postagens, informativos, projetos e fotos oficiais através do nosso{" "}
                                                <a href="https://www.instagram.com/petcomp_unioeste/" target="_blank" rel="noopener noreferrer">Instagram Oficial</a>.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedDocom(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 5. PETCode */}
                    <div className="row projeto-section align-items-center" id="petcode">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={minicurso} alt="PETCode" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>PETCode</h2>
                                <div className="projeto-desc">
                                    Neste projeto, o grupo tem como compromisso realizar atividades de extensão e capacitação relacionadas a programação e tecnologia para a comunidade.
                                    Os minicursos ajudam a consolidar tópicos importantes de computação de forma prática e acessível.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedPetcode && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedPetcode(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedPetcode && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                <strong>Minicurso de Criptografia Aplicada:</strong><br />
                                                Em 2025, o PETComp promoverá um Minicurso de Criptografia Aplicada aberto à comunidade interna e externa da Unioeste. O objetivo principal é apresentar fundamentos da criptografia com aplicações práticas em segurança da informação.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedPetcode(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 6. PETVoluntário */}
                    <div className="row projeto-section align-items-center" id="petvoluntario">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={agasalho} alt="Campanha PETVoluntário" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>PETVoluntário</h2>
                                <div className="projeto-desc">
                                    Este projeto contempla ações solidárias voltadas à comunidade externa, como campanhas de doação de sangue, arrecadação de agasalhos e outros itens essenciais.
                                    O objetivo é promover cidadania, empatia e responsabilidade social entre os petianos e a sociedade.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedPetvoluntario && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedPetvoluntario(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedPetvoluntario && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Organizamos pontos de coleta pela universidade, mobilizamos estudantes de todos os anos e fazemos as entregas diretamente a entidades beneficentes parceiras.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedPetvoluntario(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 7. Recepção dos Calouros */}
                    <div className="row projeto-section align-items-center" id="recepcao">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={recepcao} alt="Recepção dos Calouros" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>Recepção dos Calouros</h2>
                                <div className="projeto-desc">
                                    Para facilitar a integração dos novos calouros ao curso de Ciência da Computação da Unioeste, o PET realiza uma apresentação institucional no início do ano letivo.
                                    A atividade aborda o funcionamento do sistema universitário, o programa PET e orientações fundamentais para os ingressantes.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedRecepcao && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedRecepcao(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedRecepcao && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Além da introdução, tiramos dúvidas sobre o portal do acadêmico, instalações físicas da universidade, projetos de pesquisa vigentes e oferecemos dicas de estudos e sobrevivência universitária.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedRecepcao(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 8. Avaliação de Disciplinas */}
                    <div className="row projeto-section align-items-center" id="avaliacao">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={avaliacao} alt="Avaliação de Disciplinas" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>Avaliação de Disciplinas</h2>
                                <div className="projeto-desc">
                                    Ao final de cada semestre acadêmico, o PETComp aplica um formulário anônimo para avaliação das disciplinas ministradas, permitindo feedbacks construtivos sobre conteúdo, ritmo e didática.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedAvaliacao && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedAvaliacao(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedAvaliacao && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Os resultados consolidados são estruturados e compartilhados com os professores e com a coordenação do curso, visando planejar e aplicar melhorias contínuas na metodologia de ensino.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedAvaliacao(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 9. Seminários Multidisciplinares */}
                    <div className="row projeto-section align-items-center" id="seminarios">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={seminarios} alt="Seminários Multidisciplinares" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>Seminários Multidisciplinares</h2>
                                <div className="projeto-desc">
                                    Os Seminários são encontros periódicos onde os petianos apresentam temas técnicos, científicos ou de interesse geral, focados no aprimoramento da oratória, síntese e troca de conhecimento.
                                    Essa iniciativa fortalece o aprendizado colaborativo e o espírito de equipe do grupo.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedSeminarios && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedSeminarios(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedSeminarios && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Temas abordados variam desde novas linguagens de programação e inteligência artificial até saúde mental na universidade e metodologias de estudo eficazes.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedSeminarios(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 10. Eventos e Visitas Técnicas */}
                    <div className="row projeto-section align-items-center" id="eventos">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={visitasTEC} alt="Eventos e Visitas Técnicas" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>Eventos e Visitas Técnicas</h2>
                                <div className="projeto-desc">
                                    Incentivamos e organizamos a participação de estudantes em eventos técnico-científicos externos e visitas técnicas guiadas para ampliar a formação acadêmica e proporcionar vivência prática de mercado.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedEventos && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedEventos(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedEventos && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Essas visitas aproximam os acadêmicos do mercado real de desenvolvimento, permitindo contato direto com corporações de tecnologia e empresas locais importantes.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedEventos(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 11. NewsPETLetter */}
                    <div className="row projeto-section align-items-center" id="newspet">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={newspet} alt="NewsPETLetter" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>NewsPETLetter</h2>
                                <div className="projeto-desc">
                                    Projeto focado na divulgação e curadoria de conteúdos atuais da área de Computação através do Instagram oficial do grupo, abordando novidades tecnológicas e tendências do mercado corporativo.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedNewsPETLetter && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedNewsPETLetter(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedNewsPETLetter && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Abordamos desde lançamentos de hardware e novidades de inteligência artificial como o Google Gemini e o Veo 3, até dicas de portfólio para recém-formados e segurança digital.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedNewsPETLetter(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 12. CiPET */}
                    <div className="row projeto-section align-items-center" id="cipet">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={cipet} alt="CiPET" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>CiPET</h2>
                                <div className="projeto-desc">
                                    O CiPET promove palestras, mesas redondas e painéis abertos com convidados experientes da área de Computação, incluindo ex-alunos da Unioeste, profissionais de destaque, representantes de startups e empresas consolidadas.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedCipet && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedCipet(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedCipet && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                O objetivo principal é proporcionar uma visão realista sobre carreiras, trajetórias acadêmicas e profissionais bem-sucedidas e oportunidades de negócios no mercado de TI.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedCipet(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 13. PET Discute */}
                    <div className="row projeto-section align-items-center" id="petdiscute">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={petdiscute} alt="PET Discute" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>PET Discute</h2>
                                <div className="projeto-desc">
                                    Iniciativa interna com o propósito de estimular o pensamento crítico, a argumentação estruturada e a cidadania ativa dos integrantes do grupo.
                                    Os membros propõem temas atuais sobre tecnologia, política, ética e sociedade para discussão coletiva em reuniões.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedPetDiscute && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedPetDiscute(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedPetDiscute && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Os encontros fomentam o respeito à pluralidade de ideias, o embasamento crítico de opiniões e o desenvolvimento de visões multidisciplinares sobre temas contemporâneos.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedPetDiscute(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 14. CinePET */}
                    <div className="row projeto-section align-items-center" id="cinepet">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="projeto-img-side">
                                <img src={cinepet} alt="CinePET" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="projeto-text-side">
                                <h2>CinePET</h2>
                                <div className="projeto-desc">
                                    O CinePET promove exibições de filmes, documentários ou palestras importantes de interesse geral, seguidos por discussões reflexivas de cunho acadêmico, social ou cultural.
                                    Estimula a troca intelectual de perspectivas e a reflexão coletiva crítica entre os petianos.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedCinePet && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedCinePet(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedCinePet && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Focado no desenvolvimento acadêmico, cultural e pessoal, o projeto aborda temas como ética da informação, impactos sociais e avanços modernos no mundo digital.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedCinePet(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divisor-sutil" />

                    {/* 15. Projetos Individuais */}
                    <div className="row projeto-section align-items-center" id="individuais">
                        <div className="col-lg-6 col-md-12 order-1">
                            <div className="projeto-img-side">
                                <img src={icvs} alt="Projetos Individuais" className="projeto-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2">
                            <div className="projeto-text-side">
                                <h2>Projetos Individuais</h2>
                                <div className="projeto-desc">
                                    Cada integrante ativo do PETComp desenvolve, de forma orientada, um projeto de pesquisa ou extensão de cunho individual registrado formalmente na instituição como ICV.
                                    Essa prática consolida a autonomia acadêmica, o método científico e a dedicação dos membros.
                                </div>
                                <div className="button-group-projeto">
                                    {!expandedIndividuais && (
                                        <button className="btn-outline-custom" onClick={() => setExpandedIndividuais(true)}>
                                            Saiba mais...
                                        </button>
                                    )}
                                    {expandedIndividuais && (
                                        <>
                                            <div className="projeto-desc mt-2">
                                                Esses trabalhos abrangem diversas vertentes da ciência da computação, incluindo inteligência artificial, computação gráfica, engenharia de software e segurança cibernética.
                                            </div>
                                            <button className="btn-outline-custom" onClick={() => setExpandedIndividuais(false)}>
                                                Mostrar menos
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Guia de rolagem lateral (bolinhas no lado direito) */}
            <nav className="scroll-guide-nav" aria-label="Navegação lateral dos projetos">
                {PROJETOS_LIST.map((proj) => (
                    <div
                        key={proj.id}
                        className={`scroll-guide-item ${activeSection === proj.id ? "active" : ""}`}
                        onClick={() => scrollToSection(proj.id)}
                    >
                        <span className="scroll-guide-label">{proj.title}</span>
                        <div className="scroll-guide-dot"></div>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Projetos;
