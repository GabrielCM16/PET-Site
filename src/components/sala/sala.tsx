import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 1000);
  }, []);

  return (
    <>
      <main className="container text-center mt-5">
        <h1 className="display-5 mt-5 pt-5">Sala PETComp</h1>

        <p className="lead mt-5 mx-auto" style={{ maxWidth: '1100px' }}>
          A Sala de Estudos atual do PETComp localiza-se em:
        </p>

        <p className="lead fw-bold mt-3 mx-auto" style={{ maxWidth: '650px' }}>
          Rua Universitária, n° 2069, Bloco F, sala 15, CEP 85819-110, Bairro Jardim Universitário, Cascavel - PR.
        </p>

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
    </>
  );
};

export default Home;
