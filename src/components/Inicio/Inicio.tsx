import React, { useEffect, useState } from "react";
import './Inicio.css';

import LogoPET from './../../assets/Logo_PETComp.png';
import PetGroup from './../../assets/petGroup.png';
import YouTubeCarousel from './../youtube/YouTubeMiniWidget';
import InstagramFeed from './../instagram/InstagramFeed';


const App: React.FC = () => {
  return (
    <>
      <main className="container text-center mt-5 ">
        <img
          src={LogoPET}
          alt="Logo Petcomp"
          className="logo-img mx-auto d-block"
        />
        <h1 className="mt-5 display-5 press-start-font">O QUE É?</h1>

        <p className="lead mx-auto inter-regular" style={{ maxWidth: '1000px' }}>
          O Programa de Educação Tutorial (PET) insere estudantes de graduação em projetos de
          educação tutorial com o objetivo de aplicar seus conhecimentos e ampliar sua formação
          através da realização de projetos de ensino, pesquisa e extensão.
        </p>
        <img
          src={PetGroup}
          alt="Grupo de pessoas ilustradas"
          className="group-img mx-auto d-block"
        />

        <section className="container d-flex flex-wrap justify-content-center gap-4 mb-5">
          <div className="text-decoration-none text-dark">
            <div className="card shadow card-custom d-flex align-items-center justify-content-center p-3">
              <h2 className='custom-font'>PESQUISA</h2>
              <p className="mt-3 text-center inter-regular">
                Para incentivar a pesquisa, no PET, todos os membros devem ter um projeto de
                iniciação científica.
              </p>
            </div>
          </div>
          <a href="/ensino" className="text-decoration-none text-dark">
            <div className="card shadow card-custom d-flex align-items-center justify-content-center p-3">
              <h2 className='custom-font'>ENSINO</h2>
              <p className="mt-3 text-center inter-regular">
                O PET organiza eventos como minicursos e palestras para compartilhar conhecimento com
                o curso de Ciência da Computação.
              </p>
            </div>
          </a>
          <a href="/projetos" className="text-decoration-none text-dark">
            <div className="card shadow card-custom d-flex align-items-center justify-content-center p-3">
              <h2 className='custom-font'>EXTENSÃO</h2>
              <p className="mt-3 text-center inter-regular">
                Os projetos de extensão do PET estabelecem uma conexão ativa com a comunidade externa.
              </p>
            </div>
          </a>
        </section>

        <section className="container my-5 px-3">
          <div className="text-start mb-4">
            <h1 className="display-6 custom-font">UMA HISTÓRIA</h1>
            <p className="lead inter-regular" style={{ maxWidth: '75%' }}>
              O PET Ciência da Computação (PETComp) foi criado em dezembro de 2010 e é o 5º Grupo PET da
              UNIOESTE (1º do campus de Cascavel), destinado exclusivamente aos alunos regularmente
              matriculados no Curso.
            </p>
          </div>
          <div className="text-end">
            <h1 className="display-6 custom-font">DE CONQUISTA</h1>
            <p className="lead inter-regular" style={{ maxWidth: '75%', marginLeft: 'auto' }}>
              Sua aprovação junto ao MEC foi uma conquista do Prof. Dr. Clodis Boscarioli, muito bem
              recebida, após 5 tentativas de submissão de projeto por parte de vários professores.
            </p>
          </div>
        </section>

        <section className="container my-5 px-3 text-center">
          <h1 className="display-6 custom-font">NOSSO DIA A DIA</h1>
          <p className="lead inter-regular mx-auto" style={{ maxWidth: '800px' }}>
            Acompanhe abaixo as publicações mais recentes do nosso perfil no Instagram. Compartilhamos os bastidores, eventos, projetos e momentos que fazem parte da nossa rotina no PET.
          </p>
        </section>

        <InstagramFeed />

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