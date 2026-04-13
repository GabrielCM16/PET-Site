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
          title: "Edital 05/2026",
          description: "Retificação do cronograma do Edital Nº 04/2026",
          file:"https://docs.google.com/document/d/1nLLmVcfQNl97l6zRIQZtzcFhWjMbR-QG/edit?usp=sharing&ouid=103498010659382140051&rtpof=true&sd=true",
        },
        {
          title: "Edital 04/2026",
          description: "datas e horários das próximas etapas do processo seletivo para as inscrições homologadas",
          file: "https://docs.google.com/document/d/1nDH8dBRm534u1B2v3mGUtG_vNUgt0Ho8/edit?usp=sharing&ouid=103498010659382140051&rtpof=true&sd=true",
        },
        {
          title: "Edital 03/2026",
          description: "lista das inscrições homologadas para o processo seletivo.",
          file: "https://docs.google.com/document/d/1cb3VUP0Z2LDsVLsboaaBhAgcI8oIsAD7/edit?usp=sharing&ouid=103498010659382140051&rtpof=true&sd=true",
        },
        {
          title: "Edital 02/2026",
          description: "Retificação do edital 01/2026, vagas para o processo seletivo.",
          file: "https://docs.google.com/document/d/1EeDyDYei0_8ton9YIwErM_6Db9r71LuUBHYy1w2YLSo/edit?usp=sharing",

        },
        {
          title: "Edital 01/2026",
          description: "Processo seletivo para novos integrantes",
          file: "https://drive.google.com/file/d/1C_0UFgj-C81hUt1vfA2z8uOcDiugtdkU/view?usp=sharing",
        }

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
                  <a
                    key={i}
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-item"
                  >
                    <div className="download-info">
                      <h4>{item.title}</h4>
                      {item.description && <p>{item.description}</p>}
                    </div>

                    <span className="download-btn">
                      Baixar
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}