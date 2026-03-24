import React from 'react';

import mapa from './../../assets/MapaUnioeste.pdf';

const Home: React.FC = () => {
  return (
    <main className="container text-center mt-3 pt-5 mt-5">
      {/* Título mais alto */}
      <h1 className="display-5 mb-4">Sala PETComp</h1>

      {/* PDF com mapa */}
      <div className="mb-5">
        <iframe
          src={mapa}
          title="Mapa da Sala PETComp"
          className="w-100 rounded shadow"
          style={{ maxWidth: '900px', height: '450px' }}
        />
      </div>

      {/* Textos */}
      <p className="lead mx-auto" style={{ maxWidth: '1100px' }}>
        A Sala de Estudos atual do PETComp localiza-se em:
      </p>

      <p className="lead fw-bold mt-3 mx-auto" style={{ maxWidth: '650px' }}>
        Rua Universitária, n° 2069, Bloco F, sala 15, CEP 85819-110, Bairro Jardim Universitário, Cascavel - PR.
      </p>

      {/* Card de horário */}
      <div
        className="card shadow bg-light mt-5 mb-5 mx-auto d-flex align-items-center justify-content-center p-4"
        style={{ borderRadius: '25px', maxWidth: '400px', height: '150px' }}
      >
        <p className="fs-5 mb-0 text-center">
          Dias e horários de atendimento:
          <br />
          Segunda a sexta, das <span className="fw-bold">8h às 22h</span>.
        </p>
      </div>
    </main>
  );
};

export default Home;
