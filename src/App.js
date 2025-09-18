import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Procesos from './pages/Procesos';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FloatingElements />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/procesos" element={<Procesos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;