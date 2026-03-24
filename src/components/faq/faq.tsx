import { useState } from "react"
import "./faq.css"

type FaqItem = {
  question: string
  answer: string
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  const faqData: FaqItem[] = [
    {
      question: "Os petianos recebem bolsa?",
      answer:
        "Atualmente o PET conta com 12 vagas para bolsistas e 2 vagas para não-bolsistas. O valor da bolsa é equivalente a uma bolsa de iniciação científica (R$700,00). Não há distinção nas atribuições e responsabilidades dos bolsistas e não-bolsistas.",
    },
    {
      question: "Quem pode fazer parte do PET Computação?",
      answer:
        "Todo estudante regularmente matriculado no curso de Ciência da Computação da Unioeste. Buscamos pessoas comprometidas, colaborativas, com disposição para aprender, compartilhar conhecimento e participar ativamente das atividades de ensino, pesquisa e extensão do grupo.",
    },
    {
      question: "O que os petianos fazem no PET?",
      answer:
        "Cada petiano é membro ou coordenador dentro dos diversos projetos do PET. Além disso, auxiliamos em algumas atividades no contexto universitário como a feira de profissões, a recepção dos calouros e a semana acadêmica.",
    },
    {
      question: "Preciso de alguma habilidade ou conhecimento específico pra entrar?",
      answer:
        "Não. Alguns conhecimentos podem ser considerados nos editais do processo seletivo, mas não são determinantes para entrar no grupo.",
    },
    {
      question: "Preciso ter algum rendimento acadêmico específico para entrar?",
      answer:
        "Sim. É necessário que a média de notas seja igual ou superior a 70 para participar do PET Computação.",
    },
    {
      question: "É necessário manter alguma condição para continuar no PET?",
      answer:
        "Sim. Não é possível acumular mais que duas reprovações após o ingresso no curso.",
    },
    {
      question: "Quando ocorrem os processos seletivos?",
      answer:
        "Os processos seletivos do PET Computação não têm uma periodicidade fixa. Eles são realizados apenas quando há novas vagas disponíveis, seja por ampliação do grupo ou pela saída de algum integrante. Nesses casos, um edital é publicado com todas as informações. Para ficar por dentro das datas e novidades, acompanhe nosso perfil no Instagram.",
    },
  ]

  return (
    <section id="faq" className="faq section ">
      <div className="container">
        <div className="row gy-4">

          {/* Lado esquerdo */}
          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>
                <span>Perguntas </span>
                <strong>Frequentes</strong>
              </h3>
              <p>
                Reunimos aqui as principais dúvidas sobre o PET Computação,
                incluindo ingresso, atividades e funcionamento do grupo.
                Caso ainda tenha dúvidas, entre em contato conosco.
              </p>
            </div>
          </div>

          {/* Lado direito */}
          <div className="col-lg-8">
            <div className="faq-container">
              {faqData.map((item, index) => {
                const isActive = activeIndex === index

                return (
                  <div
                    key={index}
                    className={`faq-item ${isActive ? "faq-active" : ""}`}
                  >
                    <h3 onClick={() => toggle(index)}>
                      <span className="num">{index + 1}.</span>{" "}
                      <span>{item.question}</span>
                    </h3>

                    <div className="faq-content">
                      <p>{item.answer}</p>
                    </div>

                    <i
                      className={`faq-toggle bi ${
                        isActive ? "bi-chevron-down" : "bi-chevron-right"
                      }`}
                    />
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}