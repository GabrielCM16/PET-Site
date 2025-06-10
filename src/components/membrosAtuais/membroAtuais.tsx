import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./membrosAtuais.css";

import tutorImg from "./../../assets/images/members/profile.png";
import gabrielImg from "./../../assets/images/members/gabriel.png";

const membros = [
  {
    nome: "Gabriel Costa de Moraes",
    foto: gabrielImg,
    icv: "ICV: Construção de Material de Divulgação do Curso de Ciência da Computação utilizando matriz de LED",
    membroDesde: "2025",
    links: {
      lattes: "https://lattes.cnpq.br/1734464258932426",
      instagram: "https://www.instagram.com/gcmoraes__/",
      github: "https://github.com/GabrielCM16",
      email: "mailto:gabrielcostademoraes13@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2024, escolher o curso como graduação.",
      alternativaCurso: "TADS, Engenharia da Computação ou Engenharia de Controle & Automação.",
      academica: "Grande duvida por enquanto, mas acho que sim... depende... talvez?! quem sabe.",
      hobby: "tocar teclado/piano, fazer um som com a galera da banda, jogar quando tenho um tempo livre. ",
      filme: "Corações de Ferro",
      jogo: "battlefield 1, PvZGW2, Truco.",
      musica: "Tear In My Heart - Twenty One Pilots",
      comida: "Pizza, Lasanha, Tacos, Chico balanceado, Pudim ",
    },
  },
  // Outros membros...
  {
    nome: "Ronaldo Farias",
    icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
    membroDesde: "2022",
    links: {
      lattes: "https://orcid.org/0000-0002-0437-7249",
      instagram: "https://www.instagram.com/ronaldo.dck/",
      github: "https://github.com/ronaldo",
      email: "mailto:ronaldo@example.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
      alternativaCurso: "Música ou matemática.",
      academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
      hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
      livro: "“O Temor do Sábio”.",
      filme: "“Os Miseráveis”",
      jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
      musica: "“Prince Igor” - Borodin.",
      comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
    },
  },
  {
    nome: "Ronaldo Farias",
    icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
    membroDesde: "2022",
    links: {
      lattes: "https://orcid.org/0000-0002-0437-7249",
      instagram: "https://www.instagram.com/ronaldo.dck/",
      github: "https://github.com/ronaldo",
      email: "mailto:ronaldo@example.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
      alternativaCurso: "Música ou matemática.",
      academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
      hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
      livro: "“O Temor do Sábio”.",
      filme: "“Os Miseráveis”",
      jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
      musica: "“Prince Igor” - Borodin.",
      comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
    },
  },
  {
    nome: "Ronaldo Farias",
    icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
    membroDesde: "2022",
    links: {
      lattes: "https://orcid.org/0000-0002-0437-7249",
      instagram: "https://www.instagram.com/ronaldo.dck/",
      github: "https://github.com/ronaldo",
      email: "mailto:ronaldo@example.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
      alternativaCurso: "Música ou matemática.",
      academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
      hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
      livro: "“O Temor do Sábio”.",
      filme: "“Os Miseráveis”",
      jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
      musica: "“Prince Igor” - Borodin.",
      comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
    },
  },
  {
    nome: "Ronaldo Farias",
    icv: "ICV de pesquisa em IA ICV sobre sistemas embarcados avançados",
    membroDesde: "2022",
    links: {
      lattes: "https://orcid.org/0000-0002-0437-7249",
      instagram: "https://www.instagram.com/ronaldo.dck/",
      github: "https://github.com/ronaldo",
      email: "mailto:ronaldo@example.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Sempre me dei muito bem com matemática. Fazendo técnico em informática junto com o Ensino Médio descobri que gosto bastante de programar e de resolver problemas usando programação. Também tive alguns professores que foram fonte de inspiração e incentivo, o que me levou a considerar e, em 2019, escolher o curso como graduação.",
      alternativaCurso: "Música ou matemática.",
      academica: "Sim. Acho o trabalho na pesquisa científica incrível e me vejo também como professor no futuro.",
      hobby: "Principalmente tocar flauta e ouvir música, mas também jogar RPG de mesa e ler.",
      livro: "“O Temor do Sábio”.",
      filme: "“Os Miseráveis”",
      jogo: "Pathfinder, Dungeons and Dragons, Ragnarok, Truco e Cacheta.",
      musica: "“Prince Igor” - Borodin.",
      comida: "Estrogonofe, pizza, lasanha, feijão e arroz, batata frita, risoto.",
    },
  },
];

const Membros: React.FC = () => {
  const [selectedMembro, setSelectedMembro] = React.useState<number | null>(null);
  const handleShowModal = (index: number) => setSelectedMembro(index);
  const handleCloseModal = () => setSelectedMembro(null);

  return (
    <main className="container text-center mt-5">
      <h1 className="display-3 mt-5">MEMBROS</h1>

      <div className="mt-5">
        <h2 className="display-6">Tutor</h2>
        <img
          src={tutorImg}
          alt="Tutor profile"
          className="rounded-circle mb-3"
          style={{ width: "250px", height: "250px" }}
        />
        <h3 className="fs-2">Guilherme Galante</h3>
        <p className="fs-3">Tutor desde 2023</p>
      </div>

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
              <p>
                <strong>Membro desde {membro.membroDesde}</strong>
              </p>

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
                  <a href={membro.links.email}>
                    <i className="bi bi-envelope-fill text-white fs-4"></i>
                  </a>
                )}
              </div>

              <button
                className="btn btn-outline-light mt-3"
                onClick={() => handleShowModal(index)}
              >
                Saiba mais...
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMembro !== null && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content text-black">
              <div className="modal-header">
                <h5 className="modal-title">{membros[selectedMembro].nome}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                {membros[selectedMembro].saibaMais?.cidadeNatal && (
                  <p><strong>Cidade onde nasceu:</strong> {membros[selectedMembro].saibaMais.cidadeNatal}</p>
                )}
                {membros[selectedMembro].saibaMais?.motivoCurso && (
                  <p><strong>Por que Ciência da Computação?</strong><br />{membros[selectedMembro].saibaMais.motivoCurso}</p>
                )}
                {membros[selectedMembro].saibaMais?.alternativaCurso && (
                  <p><strong>Se não fizesse Ciência da Computação:</strong><br />{membros[selectedMembro].saibaMais.alternativaCurso}</p>
                )}
                {membros[selectedMembro].saibaMais?.academica && (
                  <p><strong>Pretende seguir na área acadêmica:</strong><br />{membros[selectedMembro].saibaMais.academica}</p>
                )}
                {membros[selectedMembro].saibaMais?.hobby && (
                  <p><strong>Hobby preferido:</strong><br />{membros[selectedMembro].saibaMais.hobby}</p>
                )}
                {membros[selectedMembro].saibaMais?.livro && (
                  <p><strong>Livro preferido:</strong><br />{membros[selectedMembro].saibaMais.livro}</p>
                )}
                {membros[selectedMembro].saibaMais?.filme && (
                  <p><strong>Filme preferido:</strong><br />{membros[selectedMembro].saibaMais.filme}</p>
                )}
                {membros[selectedMembro].saibaMais?.jogo && (
                  <p><strong>Jogo preferido:</strong><br />{membros[selectedMembro].saibaMais.jogo}</p>
                )}
                {membros[selectedMembro].saibaMais?.musica && (
                  <p><strong>Música preferida:</strong><br />{membros[selectedMembro].saibaMais.musica}</p>
                )}
                {membros[selectedMembro].saibaMais?.comida && (
                  <p><strong>Comida preferida:</strong><br />{membros[selectedMembro].saibaMais.comida}</p>
                )}
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Membros;
