import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Inicio from './components/Inicio/Inicio';
import Membros from './components/membrosAtuais/membroAtuais';
import ExMembros from './components/exmembros/exmembros';
import Sala from './components/sala/sala';
import PROJETOS from './components/projetos/projetos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/ex-membros" element={<ExMembros />} />
        <Route path="/sala" element={<Sala />} />
        <Route path="/projetos" element={<PROJETOS />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
