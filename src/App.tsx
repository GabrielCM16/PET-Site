import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import Membros from './pages/Membros/Membros';
import Sala from './pages/Sala/Sala';
import PROJETOS from './pages/Projetos/Projetos';
import Newspetletter from './pages/NewsPET/NewsPET'; 
import Faq from './pages/Faq/Faq'; 
import Bagre from './pages/Bagre/Bagre';
import Downloads from './pages/Downloads/Downloads';
import NotFound from "./pages/NotFound/NotFound";
import GameJamHistory from "./pages/GameJam/GameJamHistory";
import SecretGameJamLoader from "./pages/GameJam/secret-editions/SecretGameJamLoader";
import { AuthProvider } from './context/AuthContext';

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
    <AuthProvider>
      <Router>
        <Routes>
          {/* Agrupamento das rotas que possuem Header e Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/membros" element={<Membros />} />
            <Route path="/sala" element={<Sala />} />
            <Route path="/projetos" element={<PROJETOS />} />
            <Route path="/newspetletter" element={<Newspetletter />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/logo_interessante" element={<Inicio />} />
            <Route path="/gamejam" element={<GameJamHistory />} />
          </Route>

          <Route path="/bagre" element={<Bagre />} />
          <Route path="/gamejam/:editionId" element={<SecretGameJamLoader />} />

          {/* Rota 404 - Captura qualquer URL não definida acima */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;