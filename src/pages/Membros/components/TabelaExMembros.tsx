import { useState } from 'react';

const ITEMS_PER_PAGE = 15;

type TabelaExMembrosProps = {
  exMembros: string[];
};

export function TabelaExMembros({ exMembros }: TabelaExMembrosProps) {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const totalPaginas = Math.ceil(exMembros.length / ITEMS_PER_PAGE);
  const inicioIndex = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const fimIndex = inicioIndex + ITEMS_PER_PAGE;
  const dadosPagina = [...exMembros].reverse().slice(inicioIndex, fimIndex);

  const avancar = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const voltar = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Período</th>
            </tr>
          </thead>
          <tbody>
            {dadosPagina.map((linha, index) => {
              const [numeroENome, datas] = linha.split(/(?<=\d+\s-\s[^0-9]+?)\s(?=\d{2}\/\d{2}\/\d{4})/);
              const [numero, nome] = numeroENome.split(' - ');
              const [inicio, fim] = datas.replace(',', '').split(' até ');
              return (
                <tr key={index}>
                  <td>{numero}</td>
                  <td>{nome}</td>
                  <td>{`${inicio} até ${fim}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-1 mb-4">
        <button className="btn btn-outline-light mt-3" onClick={voltar} disabled={paginaAtual === 1}>
          Anterior
        </button>
        <span>Página {paginaAtual} de {totalPaginas}</span>
        <button className="btn btn-outline-light mt-3" onClick={avancar} disabled={paginaAtual === totalPaginas}>
          Próxima
        </button>
      </div>
    </>
  );
}
