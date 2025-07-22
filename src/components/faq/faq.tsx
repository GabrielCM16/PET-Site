import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Faq.css";

const Faq: React.FC = () => {
  return (
    <section className="container my-5 px-4">
      <h1 className="display-6 custom-font text-center mb-4">PERGUNTAS FREQUENTES</h1>

      <div className="accordion accordion-flush" id="faqAccordion">
        {/* Item 1 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              <span className="arrow-icon">▶</span> Os petianos recebem bolsa?
            </button>
          </h2>
          <div
            id="faq1"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Atualmente o PET conta com 12 vagas para bolsistas e 2 vagas para não-bolsistas. O valor da bolsa é equivalente a uma bolsa de iniciação científica (R$700,00). Não há distinção nas atribuições e responsabilidades dos bolsistas e não-bolsistas.
            </div>
          </div>
        </div>

        <div className="faq-bottom-line mt-4"></div>


        {/* Item 2 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              <span className="arrow-icon">▶</span> Quem pode fazer parte do PET Computação?
            </button>
          </h2>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Todo estudante regularmente matriculado no curso de Ciência da Computação da Unioeste. Buscamos pessoas comprometidas, colaborativas, com disposição para aprender, compartilhar conhecimento e participar ativamente das atividades de ensino, pesquisa e extensão do grupo.
            </div>
          </div>
        </div>

        <div className="faq-bottom-line mt-4"></div>

        {/* Item 3 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              <span className="arrow-icon">▶</span> O que os petianos fazem no PET?
            </button>
          </h2>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Cada petiano é membro ou coordenador dentro dos diversos projetos do PET. Além disso, auxiliamos em algumas atividades no contexto universitário como a feira de profissões, a recepção dos calouros e a semana acadêmica.
            </div>
          </div>
        </div>

        <div className="faq-bottom-line mt-4"></div>

        {/* Item 4 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
            >
              <span className="arrow-icon">▶</span> Preciso de alguma habilidade ou conhecimento específico pra entrar?
            </button>
          </h2>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Não. Alguns conhecimentos podem ser considerados nos editais do processo seletivo, mas não são determinantes para entrar no grupo.
            </div>
          </div>
        </div>

        <div className="faq-bottom-line mt-4"></div>

        {/* Item 5 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
            >
              <span className="arrow-icon">▶</span> Preciso ter algum rendimento acadêmico específico para entrar?
            </button>
          </h2>
          <div
            id="faq5"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Sim. É necessário que a média de notas seja igual ou superior a 70 para participar do PET Computação.
            </div>
          </div>
        </div>

        <div className="faq-bottom-line mt-4"></div>

        {/* Item 6 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
            >
              <span className="arrow-icon">▶</span> É necessário manter alguma condição para continuar no PET?
            </button>
          </h2>
          <div
            id="faq6"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Sim. Não é possível acumular mais que duas reprovações após o ingresso no curso.
            </div>
          </div>
        </div>

        <div className="faq-bottom-line mt-4"></div>

        {/* Item 7 */}
        <div className="accordion-item bg-transparent border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq7"
            >
              <span className="arrow-icon">▶</span> Quando ocorrem os processos seletivos?
            </button>
          </h2>
          <div
            id="faq7"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-white">
              Os processos seletivos do PET Computação não têm uma periodicidade fixa. Eles são realizados apenas quando há novas vagas disponíveis, seja por ampliação do grupo ou pela saída de algum integrante. Nesses casos, um edital é publicado com todas as informações. Para ficar por dentro das datas e novidades, acompanhe nosso perfil no Instagram.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
