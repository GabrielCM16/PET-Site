import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Inicio from './components/Inicio/Inicio';
import Membros from './components/membrosAtuais/membroAtuais';
import ExMembros from './components/exmembros/exmembros';
import Sala from './components/sala/sala';
import PROJETOS from './components/projetos/projetos';
import Newspetletter from './components/newspet/newspet'; 
import Faq from './components/faq/faq'; 
import Bagre from './components/membrosAtuais/bagre';
import Downloads from './components/Downloads/downloads';
import GameJam10 from './components/GameJam10/Gamejam10';
import NotFound from "./components/NotFound/NotFound";

// Componente de Layout para agrupar as rotas que USAM header e footer
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


function App() {
  return (
    <Router>
      <Routes>
        {/* Agrupamento das rotas que possuem Header e Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/membros" element={<Membros />} />
          <Route path="/ex-membros" element={<ExMembros />} />
          <Route path="/sala" element={<Sala />} />
          <Route path="/projetos" element={<PROJETOS />} />
          <Route path="/newspetletter" element={<Newspetletter />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/logo_interessante" element={<Inicio />} />
          <Route path="/bagre" element={<Bagre />} />
        </Route>

        {/* Rota da GameJam 10 - Fora do MainLayout (Sem Header/Footer) */}
        <Route path="/gamejam10" element={<GameJam10 />} />

        {/* Rota 404 - Captura qualquer URL não definida acima */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;