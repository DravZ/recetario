import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
  const location = useLocation(); // Obtener la ubicación actual

  return (
    <nav className="navbar navbar-expand-lg" style={{ height: '100px', fontSize: '22px', backgroundColor: '#191616', color: 'white', paddingLeft: '0' }}>
      <div className="container-fluid" style={{ maxWidth: '100%', paddingLeft: '0', marginLeft: '10px' }}>
        <Link to="/" className='navbar-brand' style={{ marginLeft: '0' }}>
          <img src='././././public/img/ico.png' alt='Logo' style={{ height: '80px', marginLeft: '0' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                style={{ color: location.pathname === '/' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link 
                to="/postres" 
                className={`nav-link ${location.pathname === '/postres' ? 'active' : ''}`} 
                style={{ color: location.pathname === '/postres' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                Postres
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
