import React from "react";
import './Inicio.css';

import YouTubeCarousel from './../youtube/YouTubeMiniWidget';
import InstagramFeed from './../instagram/InstagramFeed';
import logo from './../../assets/Logo_PETComp.png';
import gamejamimg from './../../assets/images/projects/gamejam2025.jpg';
import petcodeimg from './../../assets/images/projects/cursolinuximg.jpeg';
import eventosimg from './../../assets/images/projects/curitibaevento.png';
import calourosimg from './../../assets/images/projects/recepcao.png';
import divulgacaoimg from './../../assets/images/projects/divulgacaocurso.jpg';

const App: React.FC = () => {
  return (
    <>

      <main>
        <section id="hero" className="hero">
          <div className="hero-bg-image"></div>

        </section>
        <InstagramFeed />

        <section className="about-section">
          <div className="container">
            <div className="row align-items-center gy-3">

              {/* ESQUERDA - TEXTO */}
              <div className="col-lg-5 about-content">
                <h3>Quem somos</h3>

                <img src={logo} alt="logo" />

                <p className="inter-regular">
                  O Programa de Educação Tutorial (PET) insere estudantes de graduação em projetos de
                  ensino, pesquisa e extensão, promovendo uma formação completa e integrada.
                </p>

                <p className="inter-regular">
                  No PETComp, os alunos desenvolvem habilidades técnicas, científicas e sociais,
                  aplicando conhecimento na prática e gerando impacto dentro e fora da universidade.
                </p>
              </div>

              {/* DIREITA - CARDS */}
              <div className="col-lg-7">
                <div className="row gy-4">

                  <div className="col-md-6">
                    <div className="about-card">
                      <i className="bi bi-search"></i>
                      <h3>PESQUISA</h3>
                      <p>
                        Desenvolvimento de projetos científicos e iniciação à pesquisa,
                        estimulando pensamento crítico e produção acadêmica.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about-card">
                      <i className="bi bi-book"></i>
                      <h3>ENSINO</h3>
                      <p>
                        Organização de minicursos, workshops e eventos que ampliam o
                        aprendizado dos estudantes de computação.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about-card">
                      <i className="bi bi-people"></i>
                      <h3>EXTENSÃO</h3>
                      <p>
                        Projetos que conectam a universidade à sociedade,
                        promovendo impacto social e tecnológico.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about-card">
                      <i className="bi bi-trophy"></i>
                      <h3>TRAJETÓRIA</h3>
                      <p>
                        Desde 2010, formando profissionais e contribuindo
                        para o crescimento acadêmico e institucional.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* HISTÓRIA (embaixo, centralizado) */}
            <div className="about-history text-center mt-5">
              <h2 className="custom-font mb-3">UMA HISTÓRIA DE CONQUISTA</h2>

              <p className="inter-regular mx-auto">
                O PET Ciência da Computação (PETComp) foi criado em dezembro de 2010,
                sendo o 5º grupo PET da UNIOESTE e o primeiro do campus de Cascavel.
              </p>

              <p className="inter-regular mx-auto">
                Sua aprovação junto ao MEC foi resultado de múltiplas tentativas e do
                esforço coletivo de professores, consolidando hoje um programa de excelência.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" />
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" />
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" />
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" />
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" />
            </div>

            {/* Slides */}
            <div className="carousel-inner">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <img
                  src={gamejamimg}
                  className="d-block w-100 carousel-img"
                  alt="A&B Game Jam"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                  <h1 className="fw-bold">A&B Game Jam</h1>
                  <p className="lead">
                    Neste evento, estudantes da Unioeste e a comunidade externa criam um jogo do zero em uma semana seguindo um tema definido.
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <img
                  src={petcodeimg}
                  className="d-block w-100 carousel-img"
                  alt="PETCode"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                  <h1 className="fw-bold">PETCode</h1>
                  <p className="lead">
                    Neste projeto, o grupo tem como compromisso realizar atividades relacionadas a programação.
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <img
                  src={eventosimg}
                  className="d-block w-100 carousel-img"
                  alt="Eventos e Visitas Técnicas"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                  <h1 className="fw-bold">Eventos e Visitas Técnicas</h1>
                  <p className="lead">
                    Incentivo e organização da participação em eventos técnico-científicos e visitas técnicas para ampliar a formação acadêmica e vivência prática.
                  </p>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="carousel-item ">
                <img
                  src={calourosimg}
                  className="d-block w-100 carousel-img"
                  alt="Recepção dos calouros"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                  <h1 className="fw-bold">Recepção dos Calouros</h1>
                  <p className="lead">
                    Acolhimento e integração dos novos estudantes ao curso, promovendo um ambiente colaborativo e apresentando oportunidades acadêmicas e projetos do PET.
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <img
                  src={divulgacaoimg}
                  className="d-block w-100 carousel-img"
                  alt="Divulgação do curso"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                  <h1 className="fw-bold">Divulgação do Curso</h1>
                  <p className="lead">
                    Ações estratégicas para promover o curso de Ciência da Computação, destacando oportunidades, projetos e o impacto acadêmico para atrair novos estudantes.
                  </p>
                </div>
              </div>


            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>

          {/* CSS inline ou externo */}
          <style>
            {`
          .carousel-img {
            height: 80vh;
            object-fit: cover;
            filter: brightness(0.6);
          }

          .carousel-caption {
            bottom: 0;
            top: 0;
            text-align: center;
          }

          .carousel-caption h1 {
            font-size: 3rem;
          }

          .carousel-caption p {
            max-width: 700px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .carousel-img {
              height: 60vh;
            }

            .carousel-caption h1 {
              font-size: 1.8rem;
            }

            .carousel-caption p {
              font-size: 0.95rem;
              padding: 0 15px;
            }
          }
        `}
          </style>
        </section>
        


        <section className="container my-5 px-3 text-center">
          <h1 className="display-6 custom-font">NOSSO CANAL</h1>
          <p className="lead inter-regular mx-auto" style={{ maxWidth: '800px' }}>
            Acompanhe abaixo os vídeos mais recentes do nosso canal no YouTube. Compartilhamos palestras, workshops, eventos e conteúdos exclusivos que mostram o dia a dia e as conquistas do PETComp.
          </p>
        </section>
        
        <YouTubeCarousel />


      </main>
    </>
  );
};

export default App;
