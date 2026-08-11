import abner from "../../../assets/images/members/abner.png";
import carol from "../../../assets/images/members/carol.png";
import eliel from "../../../assets/images/members/eliel.png";
import dudu from "../../../assets/images/members/esquilo.png";
import fabio from "../../../assets/images/members/fabio.png";
import fabricio from "../../../assets/images/members/fabricio.png";
import furlan from "../../../assets/images/members/furlan.png";
import joao from "../../../assets/images/members/joao.png";
import qvd from "../../../assets/images/members/qvd.png";
import rafael from "../../../assets/images/members/rafael.png";
import vinicius from "../../../assets/images/members/vinicius.png";
import antunes from "../../../assets/images/members/antunes.jpeg";
import iokio from "../../../assets/images/members/iokio.jpeg";

// import noPic from "../../../assets/images/members/noPic.jpg"

export interface MembroLinks {
  lattes?: string;
  instagram?: string;
  github?: string;
  email?: string;
}

export interface MembroSaibaMais {
  CidadeNatal?: string;
  cidadeNatal?: string;
  MotivoCurso?: string;
  motivoCurso?: string;
  Hobby?: string;
  hobby?: string;
  Filme?: string;
  filme?: string;
  Jogo?: string;
  jogo?: string;
  Música?: string;
  música?: string;
  musica?: string;
  Comida?: string;
  comida?: string;
  LIVRO?: string;
  livro?: string;
  [key: string]: string | undefined;
}

export interface Membro {
  nome: string;
  cargo?: string;
  foto: string;
  icv: string;
  membroDesde: string;
  links: MembroLinks;
  saibaMais: MembroSaibaMais;
}

export const membros: Membro[] = [
  {
    nome: "Abner de Oliveira Moraes",
    foto: abner,
    icv: "TBD",
    membroDesde: "2026",
    links: {
      instagram: "https://www.instagram.com/abner_oli",
      github: "https://github.com/abnerolimor",
      email: "abnerolimoraes@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso: "Fiz ensino médio técnico em ADS, me identifiquei com a área e escolhi Ciência da Computação pela base mais ampla e flexível.",
      hobby: "Cinéfilo",
      filme: "Monty Python and the Holy Grail",
      jogo: "Journey",
      musica: "I Can't Take My Eyes Off You - Frank Sinatra",
      comida: "Média Luna",
    },
  },

  {
    nome: "Caroline Mayumi Grellmann Saito",
    foto: carol,
    icv: "ICV: Suporte ao lab 4.0",
    membroDesde: "2025",
    links: {
      instagram: "https://www.instagram.com/c.mayymi?igsh=MXc4M2ltaW1peGpwbg%3D%3D&utm_source=qr",
      github: "https://github.com/cmayymi",
      email: "mailto:carolinegrell@hotmail.com",
    },
    saibaMais: {
      CidadeNatal: "Foz do Iguaçu - PR",
      MotivoCurso:
        "Escolhi o curso de Ciência da Computação porque é uma área em expansão, com múltiplas oportunidades de atuação, o que me motivou bastante.",
      Hobby: "Jogar Jogos online, pilates",
      Filme: "Como treinar seu dragão",
      Jogo: "Stardew Valley",
      Música: "Roommates - Malcom Todd",
      Comida: "Sushi e strogonoff.",
    },
  },
  {
    nome: "Eduardo Nogueira Korte",
    foto: dudu,
    icv: "ICV: Ferramenta gamificada de criação de Jogos para auxiliar no aprendizado de geometria analítica e álgebra linear",
    membroDesde: "2025",
    links: {
      lattes: "http://lattes.cnpq.br/5439196476136251",
      instagram: "https://www.instagram.com/esquilo.korte",
      github: "https://github.com/DUDUKorte",
      email: "mailto:dudu.korte@gmail.com",
    },
    saibaMais: {
      CidadeNatal: "Curitiba - PR",
      MotivoCurso:
        "Sou apaixonado por programação desde pequeno, minha primeira experiência refazendo um Megaman clássico no construct 2 em 2016 foi só o início de uma jornada que cada vez mais eu descubro o quanto a computação combina comigo e segue sendo minha paixão ao lado do cafézinho clássico que todos amam.",
      Hobby: "Meu canal no YouTube: www.youtube.com/@esquilopng junto disso a edição de vídeos, design e claro... Jogos, amo Jogos e nunca vou deixar esse Hobby de lado.",
      Filme: "Deu a louca na chapeuzinho",
      Jogo: "Bioshock infinite, Bully e The Outer Worlds",
      Música: "Nothing Else Matters - Metallica e War Pigs - Black Sabbath",
      Comida: "Sushi, café, Petit gateau e qualquer coisa com Beacon e barbecue.",
    },
  },

  {
    nome: "Eliel Rodrigo Cordeiro da Rocha",
    foto: eliel,
    icv: "TBD",
    membroDesde: "2026",
    links: {
      instagram: "https://www.instagram.com/elielcdr?igsh=OHJiNmhleXE1OXoz",
      github: "https://github.com/eliel2703",
      email: "elielrodrigocordeiro@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Escolhi a área da tecnologia por gostar de criar soluções, desenvolver projetos e transformar ideias em algo útil para as pessoas.",
      hobby:
        "Tocar violão, teclado, criar designs, desenvolver projetos pessoais e jogar um pouco com os amigos.",
      filme: "Carros",
      jogo: "Rocket League",
      musica: "505 - Arctic Monkeys",
      comida:
        "Churrasco, Strogonoff, Lasanha, Pidê e aquela batata frita do BK",
    },
  },

  {
    nome: "Fábio Kenji Sato",
    foto: fabio,
    icv: "ICV: Estudo do circuito de alimentação e proposta de correções do projeto da placa da estação EnvCity de coleta de qualidade do ar.",
    membroDesde: "2023",
    links: {
      lattes: "https://lattes.cnpq.br/4579969236899501",
      github: "https://github.com/FabioKenjiSato",
      email: "mailto:f.ksatoclass@gmail.com",
    },
    saibaMais: {
      CidadeNatal: "Cascavel - PR",
      MotivoCurso: "Ampla gama de vagas de trabalho.",
      Hobby: "Fotografia analógica, Ciclismo, Jogos, Natureza.",
      Filme: "Senhor dos Anéis, O Hobbit.",
      Jogo: "Team Fortress 2 principalmente, horror, estratégia, fps, simuladores.",
      Comida: "Sim.",
    },
  },

  {
    nome: "Fabricio Keltika Tanquella",
    foto: fabricio,
    icv: "ICV: Análise do Processamento Linguístico em Português com o Modelo DeepSeek",
    membroDesde: "2025",
    links: {
      github: "https://github.com/Fabriciofkt157",
      email: "mailto:fabriciotanquellafkt2@gmail.com",
    },
    saibaMais: {
      CidadeNatal: "Cascavel - PR",
      MotivoCurso:
        "Computação é meu mundo, eu apenas segui a linha do tempo. Sempre soube que era isso que queria pra mim, por isso escolhi Ciência da Computação.",
      Hobby: "Desenvolver meu Jogo e meus projetos pessoais. As vezes gosto de desenhar.",
      Filme: "Pânico 6",
      Jogo: "Dead by Daylight, Phasmophobia, The Last of Us, Vôlei",
      Música: "We Fell in Love in October",
      Comida: "Lasanha de frango.",
    },
  },

  {
    nome: "Iokio Caina Hirai Rocha",
    foto: iokio,
    icv: "ICV: TBD",
    membroDesde: "2026",
    links: {
      instagram: "https://instagram.com/cainaiokio",
      email: "iokiocaina@gmail.com",
    },
    saibaMais: {
      CidadeNatal: "Cascavel - PR",
      Hobby: "instrumentos musicais, música, canto, fotografia e edição",
      Filme: "O Aprendiz de Feiticeiro",
      Jogo: "Valorant",
      Música: "Bohemian Rhapsody - Freddie Mercury",
    },
  },

  {
    nome: "João Pedro Milani",
    foto: joao,
    icv: "TBD",
    membroDesde: "2026",
    links: {
      instagram: "https://www.instagram.com/j_pedr_/",
      github: "https://github.com/JoaoPedrM1La",
      email: "jpmilani123@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel - PR",
      motivoCurso:
        "Gosto da área de programação e quero me aprofundar nos diversos conteúdos que ela possui, como cybersegurança, IoTs e robótica.",
      hobby: "Jogos, Cozinhar e Desenho PixelArt",
      filme: "O labirinto do fauno",
      jogo: "Forza Horizon 4",
      musica: "Seek & Destroy - Metallica",
      comida: "Pirogui",
    },
  },

  {
    nome: "João Vitor Furlan",
    foto: furlan,
    icv: "TBD",
    membroDesde: "2026",
    links: {
      instagram: "https://www.instagram.com/furlanjoaovitor/",
      github: "https://github.com/furlas",
      email: "joaovitorfurlan03@gmail.com",
    },
    saibaMais: {
      cidadeNatal: "Cascavel, PR",
      motivoCurso:
        "Área bem vasta e com varias oportunidade de trabalho",
      hobby: "jogar basquete e ouvir musicas",
      filme: "Obsessão",
      jogo: "Gris",
      musica: "Amem amem - bk",
      comida: "lasanha",
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
      CidadeNatal: "Capanema - PR",
      MotivoCurso:
        "Busquei um meio-termo entre algo com o qual eu minimamente me identifico e que também ofereça boas oportunidades de atuação. Como gosto de resolver problemas e pesquisar, escolhi Ciência da Computação.",
      Hobby: "Beber muito café, escutar muita música, ir no bar com os amigos, pesquisar, crochetar e não fazer absolutamente nada.",
      Filme: "Kill Bill e The Handmaiden",
      Jogo: "Earthbound, Fran Bow e Lisa: The Painful",
      LIVRO: "Qualquer obra do Junji Ito",
      Música: "Blow Out - Radiohead",
      Comida: "Arroz e feijão da minha vó e churrasco hmm",
    },
  },

  {
    nome: "Mateus Antunes Belo",
    foto: antunes,
    icv: "ICV: TBD",
    membroDesde: "2026",
    links: {
      github:  "https://github.com/belou-devv",
      instagram: "https://www.instagram.com/mateus_annttunes/",
      email: "mateus.antunes2@unioestebr.onmicrosoft.com",
    },
    saibaMais: {
      CidadeNatal: "Foz do Iguaçu - PR",
      Hobby: "Jogos e vôlei",
      Filme: "Kung Fu Panda 2",
      Jogo: "Zelda: Breath of the Wild",
      Música: "Coragem - Sant",
    },
  },


  {
    nome: "Rafael Mendonça Vaz",
    foto: rafael,
    icv: "ICV: Escalabilidade de banco de dados em serviços de cloud e performance com o uso de turing",
    membroDesde: "2025",
    links: {
      instagram: "https://www.instagram.com/rafaellmv",
      github: "https://github.com/rafaelmendoncavaz",
      email: "rafael.vaz1@unioeste.br",
    },
    saibaMais: {
      CidadeNatal: "São Paulo - SP",
      MotivoCurso:
        "Decidi retornar a minha vida na área de tecnologia, e após voltar dos EUA, decidi que iria tentar. Comprei um curso de Desenvolvedor Web, e me apaixonei a ponto de consumir conteúdos que iam além. Quando notei que o que queria aprender ia além do curso, decidi ingressar em Ciência da Computação.",
      Hobby:
        "Futebol Americano, Basquete, Esportes em Geral, Academia, Leitura, Programar, Passear com meu Cachorro.",
      Filme: "Bastardos Inglórios",
      Jogo: "Counter-Strike, Madden, Resident Evil, RDR2",
      livro: "O Senhor dos Anéis",
      música: "Space Oddity - David Bowie",
      Comida: "Lasanha, Pizza, Guisado de Carne, Churrasco",
    },
  },

  {
    nome: "Vinícius Almeida Hermes",
    foto: vinicius,
    icv: "ICV: Descaracterização de TvBOX",
    membroDesde: "2025",
    links: {
      lattes: "",
      instagram: "https://www.instagram.com/vncs.hrms/",
      github: "https://github.com/vinihrms",
      email: "vinicius.hermes@unioeste.br",
    },
    saibaMais: {
      CidadeNatal: "Corbélia - PR",
      MotivoCurso: "Ter tido experiência de trabalho no setor de suporte de informática e gostar de hardware",
      Hobby: "Leitura, música, ciclismo",
      Filme: "Sacrface (1983)",
      Jogo: "Truco, xadrez",
      música: "So Appalled - Ye",
      Comida: "Arroz, feijão, bife e salada",
    },
  },

];
