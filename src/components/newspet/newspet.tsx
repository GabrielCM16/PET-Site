import React from 'react';
import './newspet.css';
import InstagramFeed from './../instagram/InstagramFeed';
import YouTubeCarousel from './../youtube/YouTubeMiniWidget';

const Newspetletter: React.FC = () => {
  return (
    <main className="newspetletter-container">
      <section className="section text-center">
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
