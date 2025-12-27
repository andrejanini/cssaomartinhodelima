import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import Transparencia from './pages/Transparencia';
import Noticias from './pages/Noticias';
import ComoAjudar from './pages/ComoAjudar';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';

// Styles
import './styles/custom-bootstrap.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="transparencia" element={<Transparencia />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="como-ajudar" element={<ComoAjudar />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
