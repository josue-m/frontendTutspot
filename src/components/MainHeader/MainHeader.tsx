import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css'; 

const MainHeader: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">TutSpot</Link>
      </div>
      <nav className="nav-links">
        <Link to="/prices">Precios</Link>
        <Link to="/about">Acerca de</Link>
        
      </nav>
      <Link to="/login" className="login-link">Iniciar sesión</Link>
      <div className="search-bar">
        {/* Aquí puedes agregar tu componente de búsqueda */}
        <input type="text" placeholder="Buscar..." />
        <button type="button">Buscar</button>
      </div>
    </header>
  );
};

export default MainHeader;
