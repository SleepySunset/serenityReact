import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Pago from './pages/Pago';
import PagoExitoso from "./pages/PagoExitoso";
import MiCuenta from "./pages/MiCuenta";
import HistorialPedidos from "./pages/HistorialPedidos";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/pedido-exitoso" element={<PagoExitoso />} />
            <Route path="/cuenta" element={<MiCuenta />} />
            <Route path="/historial-pedidos" element={<HistorialPedidos />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
