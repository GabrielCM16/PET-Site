import React from 'react';
import './newspet.css';
import InstagramFeed from './../instagram/InstagramFeed';
import YouTubeCarousel from './../youtube/YouTubeMiniWidget';

const Newspetletter: React.FC = () => {
  return (
    <main className="newspetletter-container">

      <section className="container my-5 px-3 text-center">
        <h1 className="display-6 custom-font">NewsPETletter</h1>
        <p className="lead inter-regular mx-auto" style={{ maxWidth: '800px' }}>
          Projeto focado na divulgação de conteúdos atuais da área de Computação via Instagram, incluindo novidades tecnológicas e tendências.
          <p></p>
          Objetiva manter a comunidade acadêmica informada e engajada com as inovações tecnológicas.
          <p></p>
          Acompanhe abaixo as publicações mais recentes do nosso perfil no Instagram. Compartilhamos os bastidores, eventos, projetos e momentos que fazem parte da nossa rotina no PET.
        </p>
      </section>

      <InstagramFeed />

      <section className="section text-center mt-5">
        <h1 className="display-6 custom-font">NOSSO CANAL</h1>
        <p className="lead inter-regular mx-auto" style={{ maxWidth: '800px' }}>
          Acompanhe abaixo os vídeos mais recentes do nosso canal no YouTube. Compartilhamos palestras, workshops, eventos e conteúdos exclusivos que mostram o dia a dia e as conquistas do PETComp.
        </p>
      </section>

      <YouTubeCarousel />
    </main>
  );
};

export default Newspetletter;
