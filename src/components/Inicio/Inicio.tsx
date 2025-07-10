import React, { useEffect, useState } from "react";
import './Inicio.css';

import LogoPET from './../../assets/Logo_PETComp.png';
import PetGroup from './../../assets/petGroup.png';

// Interfaces para tipagem do feed JSON
interface Author {
  name: string;
}

interface Attachment {
  url: string;
}

interface Post {
  id: string;
  url: string;
  title: string;
  content_text: string;
  content_html: string;
  image: string;
  date_published: string;
  authors: Author[];
  attachments?: Attachment[];
}

interface JsonFeed {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  favicon: string;
  language: string;
  description: string;
  items: Post[];
}

export const InstagramRSSFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const rssJsonUrl = "https://rss.app/feeds/pS3FpvLzhLoVOIw2.json";

  useEffect(() => {
    fetch(rssJsonUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar feed JSON");
        return res.json();
      })
      .then((data: JsonFeed) => {
        setPosts(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);


 return (
  <section className="text-center my-5 instagram-section">

    {loading && <p className="text-gray-500 text-lg">Carregando posts...</p>}

    <div className="instagram-posts-grid">
      {posts.length === 0 && !loading && (
        <p className="text-gray-500 text-lg">Nenhum post encontrado.</p>
      )}

      {posts.map((post) => {
        const imgSrcMatch = post.content_html.match(/<img src="([^"]+)"/);
        const imgSrc = imgSrcMatch ? imgSrcMatch[1] : '';

        return (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-post"
          >
            <img src={imgSrc} alt={post.title} />
            <p className="instagram-post-title">{post.title}</p>
          </a>
        );
      })}
    </div>
  </section>
);
}
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

        <InstagramRSSFeed />

      </main>
    </>
  );
};

export default App;