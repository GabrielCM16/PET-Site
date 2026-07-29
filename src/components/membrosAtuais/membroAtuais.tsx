import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./membrosAtuais.css";

import galante from "./../../assets/images/members/galante.png";
import marcio from "./../../assets/images/members/marcio.png";
import clodis from "./../../assets/images/members/clodis.png";
import tutorImg from "./../../assets/images/members/profile.png";

import { membros } from "./data/membrosData";
import { ExMembros } from "./data/exmembrosData";
import { TabelaExMembros } from "./TabelaExMembros";

const Membros: React.FC = () => {
  const [selectedMembro, setSelectedMembro] = useState<number | null>(null);
  const [showExMembros, setShowExMembros] = useState(false);

  const handleShowModal = (index: number) => setSelectedMembro(index);
  const handleCloseModal = () => setSelectedMembro(null);
  const toggleExMembros = () => setShowExMembros(!showExMembros);

  return (
    <main className="container text-center mt-5 pt-4">
      <h1 className="display-3 mt-5">Equipe PETComp</h1>

      {/* Tutor atual */}
      <div className="mt-5 text-center">
        <h2 className="fs-2">Tutor</h2>
        <img
          src={galante}
          alt="Tutor profile"
          className="rounded-circle mb-3"
          style={{ width: "250px", height: "250px" }}
        />
        <h3 className="fs-2">Guilherme Galante</h3>
        <p className="fs-3">Tutor desde 2022</p>

        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="http://lattes.cnpq.br/1467826050353891" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-file-earmark-person-fill text-white fs-4"></i>
          </a>
          <a href="mailto:Guilherme.Galante@unioeste.br">
            <i className="bi bi-envelope-fill text-white fs-4"></i>
          </a>
        </div>
      </div>

      {/* Membros atuais */}
      <div className="row justify-content-center mt-5">
        {membros.map((membro, index) => (
          <div className="col-md-4 d-flex justify-content-center mb-4" key={index}>
            <div className="card-custom text-white text-center p-3">
              <img
                src={membro.foto || tutorImg}
                alt={`${membro.nome} profile`}
                className="profile-avatar mx-auto mb-3"
              />
              <h4>{membro.nome}</h4>
              <p className="small">{membro.icv}</p>
              <p><strong>Membro desde {membro.membroDesde}</strong></p>

              <div className="d-flex justify-content-center gap-3 mt-2">
                {membro.links.lattes && (
                  <a href={membro.links.lattes} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-file-earmark-person-fill text-white fs-4"></i>
                  </a>
                )}
                {membro.links.instagram && (
                  <a href={membro.links.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram text-white fs-4"></i>
                  </a>
                )}
                {membro.links.github && (
                  <a href={membro.links.github} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github text-white fs-4"></i>
                  </a>
                )}
                {membro.links.email && (
                  <a href={`mailto:${membro.links.email}`}>
                    <i className="bi bi-envelope-fill text-white fs-4"></i>
                  </a>
                )}
              </div>

              <button className="btn btn-outline-light mt-3" onClick={() => handleShowModal(index)}>
                Saber mais
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de expansão */}
      <div className="d-flex justify-content-center mt-4 mb-5">
        <button className="btn btn-outline-light" onClick={toggleExMembros}>
          {showExMembros ? "Mostrar menos" : "Tutores / Membros Egressos"}
        </button>
      </div>

      {/* Modal individual */}
      {selectedMembro !== null && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content text-black">
              <div className="modal-header">
                <h5 className="modal-title">
                  {membros[selectedMembro].nome}
                  {membros[selectedMembro].cargo && (
                    <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}>
                      - {membros[selectedMembro].cargo}
                    </span>
                  )}
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                {Object.entries(membros[selectedMembro].saibaMais || {}).map(([key, value]) => (
                  <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong><br />{value}</p>
                ))}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seção expandida: Ex-Tutores + Ex-Membros */}
      {showExMembros && (
        <section className="mt-5">
          <h2 className="display-6 mb-4">Ex-Tutores</h2>
          <div className="row justify-content-center">
            {/* Marcio */}
            <div className="col-md-4 d-flex flex-column align-items-center mb-4">
              <img
                src={marcio}
                alt="Tutor Marcio"
                className="rounded-circle mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3 className="fs-2">Marcio Seiji Oyamada</h3>
              <p className="fs-4">Tutor 2016 - 2022</p>

              <div className="d-flex justify-content-center gap-3 mt-2">
                <a href="http://lattes.cnpq.br/6642959615863178" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-file-earmark-person-fill text-white fs-4"></i>
                </a>
                <a href="mailto:msoyamada@gmail.com">
                  <i className="bi bi-envelope-fill text-white fs-4"></i>
                </a>
              </div>
            </div>

            {/* Clodis */}
            <div className="col-md-4 d-flex flex-column align-items-center mb-4">
              <img
                src={clodis}
                alt="Tutor Clodis"
                className="rounded-circle mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3 className="fs-2">Clodis Boscarioli</h3>
              <p className="fs-4">Tutor 2010 - 2016</p>

              <div className="d-flex justify-content-center gap-3 mt-2">
                <a href="http://lattes.cnpq.br/2844207318576160" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-file-earmark-person-fill text-white fs-4"></i>
                </a>
                <a href="mailto:Clodis.Boscarioli@unioeste.br">
                  <i className="bi bi-envelope-fill text-white fs-4"></i>
                </a>
              </div>
            </div>
          </div>

          <h2 className="display-6 mb-4 mt-5">Ex-Membros</h2>
          <p>Aqui registramos os que já integraram o grupo ao longo dos anos.</p>

          <TabelaExMembros exMembros={ExMembros} />
        </section>
      )}
    </main>
  );
};

export default Membros;
