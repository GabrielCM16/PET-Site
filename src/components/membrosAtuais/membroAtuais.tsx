import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./membrosAtuais.css";

import tutorImg from "./../../assets/images/members/profile.png";
import gabrielImg from "./../../assets/images/members/gabriel.png";
import qvd from "./../../assets/images/members/qvd.png";
import dudu from "./../../assets/images/members/eduardo.png";
import lenser from "./../../assets/images/members/Lenser.png";
import thiago from "./../../assets/images/members/thiago.png";
import cabrera from "./../../assets/images/members/cabrera.png";
import thalita from "./../../assets/images/members/thalita.png";
import rafael from "./../../assets/images/members/cabrera.png";


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
      alternativaCurso: "TADS, Engenharia da Computação ou Engenharia de Controle e Automação.",
      academica: "Minha empresa? Talvez em breve. Mestrado? Grande duvida por enquanto, mas acho que sim... depende... talvez?! quem sabe.",
      hobby: "tocar teclado/piano, fazer um som com a galera da banda, jogar quando tenho um tempo livre. ",
      filme: "Corações de Ferro",
      jogo: "battlefield 1, PvZGW2, Truco.",
      musica: "Tear In My Heart - Twenty One Pilots",
      comida: "Pizza, Lasanha, Tacos, Chico balanceado, Pudim ",
    },
  },
  {
    nome: "Maria Quevedo",
    foto: qvd,
    icv: "ICV: Estudo da biblioteca NLTK para geração de textos: aplicação em diálogos cotidianos",
    membroDesde: "2023",
    links: {
      lattes: "http://lattes.cnpq.br/3097985855355895",
      instagram: "https://www.instagram.com/quevs__?igsh=MWoybXlnc3NvN2c1Yg==",
      email: "mariaquevedo.capanema@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Capanema - PR",
      motivoCurso:
        "Busquei um meio-termo entre algo com o qual eu minimamente me identifico e que também ofereça boas oportunidades de atuação. Como gosto de resolver problemas e pesquisar, escolhi Ciência da Computação.",
      alternativaCurso: "Filosofia ou Psicologia.",
      academica: "Tenho bastante vontade de realizar programas de pós-graduação fora do Brasil.",
      hobby: "Beber muito café, escutar muita música, ir no bar com os amigos, pesquisar, crochetar e não fazer absolutamente nada.",
      filme: "Kill Bill e The Handmaiden",
      jogo: "Earthbound, Fran Bow e Lisa: The Painful",
      LIVRO: "Qualquer obra do Junji Ito",
      musica: "Blow Out - Radiohead",
      comida: "Arroz e feijão da minha vó e churrasco hmm"
    },
  },
  {
    nome: "Eduardo Nogueira Korte",
    foto: dudu,
    icv: "ICV: Ferramenta gamificada de criação de jogos para auxiliar no aprendizado de geometria analítica e álgebra linear",
    membroDesde: "2025",
    links: {
      lattes: "http://lattes.cnpq.br/5439196476136251",
      instagram: "https://www.instagram.com/esquilo.korte",
      github: "https://github.com/DUDUKorte",
      email: "mailto:dudu.korte@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Curitiba - PR",
      motivoCurso:
        "Sou apaixonado por programação desde pequeno, minha primeira experiência refazendo um Megaman clássico no construct 2 em 2016 foi só o início de uma jornada que cada vez mais eu descubro o quanto a computação combina comigo e segue sendo minha paixão ao lado do cafézinho clássico que todos amam.",
      alternativaCurso: "TADS ou, na pior das hipóteses engenharia de computação.",
      academica: "Não planejo, tenho grandes sonhos e ambições que quero seguir, as quais a área acadêmica não pode me proporcionar, infelizmente.",
      hobby: "Meu canal no YouTube: www.youtube.com/@esquilopng junto disso a edição de vídeos, design e claro... Jogos, amo jogos e nunca vou deixar esse hobby de lado.",
      filme: "Deu a louca na chapeuzinho",
      jogo: "Bioshock infinite, Bully e The Outer Worlds",
      musica: "Nothing Else Matters - Metallica e War Pigs - Black Sabbath",
      comida: "Sushi, café, Petit gateau e qualquer coisa com Beacon e barbecue.",
    },
  },
  {
    nome: "Gabriel Lenser",
    foto: lenser,
    icv: "ICV: Otimização de métodos de pré-processamento de texto com o uso de técnicas de programação paralela: uma análise comparativa de desempenho",
    membroDesde: "2023",
    links: {
      lattes: "http://lattes.cnpq.br/1714539603430097",
      instagram: "https://www.instagram.com/gabxlenser?igsh=dXF1a3M2N3hsZWE5",
      github: "https://github.com/gabriellenser",
      email: "gabxlenser1@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Impulsionado pela matemática, estatística e pelo contato com máquinas desde criança.",
      alternativaCurso: "Música",
      academica: "Ciência de Dados",
      hobby: "instrumentos musicais, jogos, cozinhar etc. ",
      filme: "slashers clássicos",
      jogo: "jrpgs clássicos",
      livro: "Toda luz que não podemos ver",
      musica: "Let down - Radiohead",
      comida: "Sushi, Hambúrguer, pistache, banoffee e risotos em geral",
    }

  },

  // Outros membros...
  {
    nome: "Thiago Oliveira Dupim",
    foto: thiago,
    icv: "ICV: TBD",
    membroDesde: "2025",
    links: {
      lattes: "",
      instagram: "https://www.instagram.com/thiagodpim/",
      github: "https://github.com/umthiago",
      email: "mailto:thiagoflx.y@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Optei por Ciência da Computação porque é uma área em constante crescimento e com ampla demanda no mercado e a possibilidade de atuar em diversos setores, que foi um grande atrativo para mim",
      alternativaCurso: "TADS & Engenharia de Software",
      academica: "Pretendo seguir atuando com ênfase em inteligência artificial, que é uma das áreas mais promissoras e transformadoras da atualidade",
      hobby: "Ensaiar com a banda, ir a academia",
      filme: "Ilha do Medo",
      jogo: "Red Dead Redemption 2, Uncharted",
      musica: "Need 2 - Pinegrove.",
      comida: "Macarrão ao molho bechamel, BomBom Aberto",
    },
  },
  {
    nome: "Pedro Augusto Silva Cabrera",
    foto: cabrera,
    icv: "ICV TBD",
    membroDesde: "2024",
    links: {
      lattes: "https://lattes.cnpq.br/5325089615556004",
      instagram: "https://www.instagram.com/peedrocabrera",
      github: "https://github.com/peedrocabrera",
      email: "pedroaugusto8720@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Ubiratã - PR",
      motivoCurso: "Sempre gostei de tecnologia e com o passar do tempo isso foi se fortificando. Acredito que essa área oferece muitas oportunidades de aprendizado, inovação e impacto no futuro",
      alternaticaCurso: "Engenharia Civil",
      academica: "Por enquanto analisando sobre, mas quem sabe talvez um dia",
      hobby: "Assistir filmes e séries, vídeos sobre tecnologia. Rolê de música eletrônica e sair com pessoas próximas ",
      filme: "Franquia Resident Evil",
      jogo: "cs",
      livro: "Sherlock Holmes",
      musica: "I Will Find - Vintage Culture",
      comida: "pizza, comida japonesa e massas em geral",
    }

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

    nome: "Thalita Wiederkehr Pereira",
    foto: thalita, // Adicione a URL da imagem aqui, se tiver
    icv: "ICV: Computação Auditiva",
    membroDesde: "2024",
    links: {
      lattes: "http://lattes.cnpq.br/5647218203879099",
      github: "https://github.com/TWPalita",
      email: "mailto:talitaw09@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Sempre gostei de tecnologia e acredito que devemos perseguir aquilo que realmente gostamos.",
      alternativaCurso: "Engenharia Civil, Pedagogia ou Biologia",
      academica: "Não sei ainda... talvez fazer um mestrado.",
      hobby: "Assistir filmes, séries e animes, aprender sobre curiosidades e comer bem.",
      livro: "Assassinato no Expresso do Oriente",
      filme: "Indiana Jones",
      jogo: "Loop Hero e Guitar Hero",
      musica: "Tim Maia - Você e Pet Shop Boys - Domino Dancing",
      comida: "Não me fazendo mal, o que vier é lucro!",
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
        <p className="fs-3">Tutor desde 2022</p>
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
