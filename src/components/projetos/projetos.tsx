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

const Projetos: React.FC = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(window.innerWidth < 1000);
    }, []);

    return (
        <main className="container px-3 my-5 projetos-container">

            {/* PROJETOS */}
            <section className="text-center my-5">
                <h1 className="display-1 mt-5">PROJETOS</h1>
                <h2 className="display-4 mt-5">A&B Game Jam</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1100 }}>
                    A A&B Game Jam é um evento anual organizado pelo PETComp como parte do projeto de Organização de Eventos.
                    Neste evento, tanto os estudantes da Unioeste quanto a comunidade externa são convidados a participar de uma GameJam,
                    onde as equipes têm como objetivo criar um jogo do zero em uma semana seguindo um tema escolhido pelo PET.
                </p>
                <p className="fs-4 mx-auto mt-3" style={{ maxWidth: 1100 }}>
                    Em 2024, será realizada a A&B Game Jam VIII!
                </p>
                <p className="fs-4 mx-auto mt-2" style={{ maxWidth: 1100 }}>
                    Confira os resultados anteriores da A&B Game Jam:
                </p>

                <div className="d-flex justify-content-around flex-wrap mx-auto" style={{ maxWidth: 600 }}>
                    <a href="https://itch.io/jam/ab-game-jam-vii" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">VII 2023</a>
                    <a href="https://itch.io/jam/ab-game-jam-vi" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">VI 2022</a>
                    <a href="https://gamejolt.com/search/games?q=abgamejam5" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">V 2021</a>
                    <a href="https://gamejolt.com/search/games?q=abgamejam4" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">IV 2020</a>
                    <a href="https://gamejolt.com/search/games?q=abgamejam3" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">III 2019</a>
                    <a href="https://gamejolt.com/search/games?q=abgamejam2" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">II 2018</a>
                    <a href="https://gamejolt.com/search/games?q=abgamejam" className="fs-5 text-decoration-none" target="_blank" rel="noopener noreferrer">I 2018</a>
                </div>


                <div className="mx-auto" style={{ maxWidth: 700 }}>
                    <img
                        src={gamejam}
                        alt="Logo Petcomp"
                        className="img-fluid w-100 mt-4"
                    />
                </div>
            </section>

            {/* COLETA DE LIXO ELETRÔNICO */}
            <section className="text-center my-5">
                <h2 className="display-4">Coleta de lixo eletrônico</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    O grupo disponibiliza lixeiras exclusivas para a coleta de lixo eletrônico no Campus da Unioeste Cascavel.
                    Essa iniciativa visa principalmente auxiliar a comunidade na destinação adequada desse tipo de resíduo.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={lixo}
                        alt="Logo Petcomp"
                        className="img-fluid w-100 mt-4"
                    />
                </div>

            </section>

            {/* DIVULGAÇÃO DO CURSO */}
            <section className="text-center my-5">
                <h2 className="display-4">Divulgação do curso</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Para promover o curso de Ciência da Computação da Unioeste de Cascavel,
                    a equipe se compromete a realizar visitas em escolas como uma estratégia fundamental de divulgação.
                    Essa iniciativa visa não apenas informar a comunidade sobre as oportunidades educacionais disponíveis,
                    mas também atrair potenciais interessados na área.
                </p>
                <div className="mx-auto" style={{ maxWidth: 800 }}>
                    <img
                        src={divulgacao}
                        alt="Logo Petcomp"
                        className="img-fluid w-100 mt-4"
                    />
                </div>

            </section>

            {/* DOCOM */}
            <section className="text-center my-5">
                <h2 className="display-4">DOCOM</h2>
                <p className="fs-4 mx-auto" style={{ maxWidth: 1200 }}>
                    Para documentar e divulgar as atividades realizadas, o grupo registra todos os projetos em locais de acesso exclusivo para os petianos vigentes e futuros,
                    além de compartilhar publicamente suas atividades no{" "}
                    <a
                        href="https://www.instagram.com/petcomp_unioeste/"
                        className="text-white text-decoration-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>.
                </p>
                <div className="mx-auto" style={{ maxWidth: 600 }}>
                    <img
                        src={docom}
                        alt="Logo Petcomp"
                        className="img-fluid w-100 mt-4"
                    />
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
                <div className="mx-auto" style={{ maxWidth: 800 }}>
                    <img
                        src={recepcao}
                        alt="Campanha PETVoluntário"
                        className="img-fluid w-100 mt-3"
                    />
                </div>
            </section>


        </main >
    );
};

export default Projetos;
