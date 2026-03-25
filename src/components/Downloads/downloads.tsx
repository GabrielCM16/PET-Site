import "./downloads.css"

type DownloadItem = {
  title: string
  description?: string
  file: string
}

type DownloadSection = {
  category: string
  items: DownloadItem[]
}

export default function Downloads() {
  const data: DownloadSection[] = [
    {
      category: "Editais",
      items: [
        {
          title: "Edital 01/2026",
          description: "Processo seletivo para novos integrantes",
          file: "https://drive.google.com/file/d/1C_0UFgj-C81hUt1vfA2z8uOcDiugtdkU/view?usp=sharing",
        },
      ],
    },
    {
      category: "Slides",
      items: [
        {
          title: "Introdução ao Linux",
          description: "Slides do minicurso de Linux",
          file: "https://www.canva.com/design/DAHC_NYMO8g/Re0a37elR5U1CnMN-wyIoQ/view?utm_content=DAHC_NYMO8g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h23b86ba828",
        },
      ],
    },
  ]

  return (
    <section id="downloads" className="downloads section">
      <div className="container">

        {/* Título */}
        <div className="section-title">
          <h2>Downloads</h2>
          <p>
            Aqui você encontra editais, materiais de minicursos e outros
            conteúdos disponibilizados pelo PET Computação.
          </p>
        </div>

        {/* Lista */}
        <div className="downloads-container">
          {data.map((section, index) => (
            <div key={index} className="download-section">
              <h3>{section.category}</h3>

              <div className="download-list">
                {section.items.map((item, i) => (
                  <div key={i} className="download-item">
                    <div className="download-info">
                      <h4>{item.title}</h4>
                      {item.description && <p>{item.description}</p>}
                    </div>

                    <a
                      href={item.file}
                      download
                      className="download-btn"
                    >
                      Baixar
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}