import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Produtos from './components/Produtos';
import Clientes from './components/Clientes';
import Usuarios from './components/Usuarios';
import Promocoes from './pages/Promocoes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Menu de navegação */}
        <nav>
          <ul>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/clientes">Clientes</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
            <li><Link to="/promocoes">Promoções</Link></li>
          </ul>
        </nav>

        {/* Definindo as rotas */}
        <Routes>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/promocoes" element={<Promocoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
