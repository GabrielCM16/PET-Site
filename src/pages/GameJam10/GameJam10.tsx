import React, { useEffect } from 'react';

const GameJam10: React.FC = () => {
  useEffect(() => {
    // Assim que a rota /gamejam10 for acessada, redireciona o usuário
    // para o arquivo HTML puro que colocamos na pasta public.
    // O window.location.replace substitui a URL para não bugar o botão de "Voltar" do navegador.
    window.location.replace('/gamejam/index.html');
  }, []);

  // Enquanto ele faz o redirecionamento (é instantâneo), você pode mostrar uma tela preta ou um loading
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}>
      {/* Se quiser, coloque um textinho de "Carregando..." aqui */}
    </div>
  );
};

export default GameJam10;