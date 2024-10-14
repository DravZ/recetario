import React from 'react';
import Link from 'next/link'; // Importar Link de Next.js
import { useRouter } from 'next/router'; // Importar useRouter
import styles from './NavbarComponent.module.css'; // Importar como CSS Module

import { useEffect, useState } from 'react';


function NavbarComponent() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter(); // Obtener el enrutador

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('user');
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setToken(null);
    router.push('/login'); // Redirigir al usuario a la página de login
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ height: '100px', fontSize: '22px', backgroundColor: '#191616', color: 'white', paddingLeft: '0' }}>
        <div className="container-fluid" style={{ maxWidth: '100%', paddingLeft: '0', marginLeft: '10px' }}>
          <Link href="/" className='navbar-brand' style={{ marginLeft: '0' }}>
            <img src='/img/ico.png' alt='Logo' style={{ height: '80px', marginLeft: '0' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/" 
                  className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/postres" 
                  className={`nav-link ${router.pathname === '/postres' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/postres' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Postres
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/ensaladas" 
                  className={`nav-link ${router.pathname === '/ensaladas' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/ensaladas' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Ensaladas
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/pastas" 
                  className={`nav-link ${router.pathname === '/pastas' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/pastas' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Pastas
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/desayunos" 
                  className={`nav-link ${router.pathname === '/desayunos' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/desayunos' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Desayunos
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/ninos" 
                  className={`nav-link ${router.pathname === '/ninos' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/ninos' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Niños
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <Link 
                  href="/dylan" 
                  className={`nav-link ${router.pathname === '/dylan' ? 'active' : ''}`} 
                  style={{ color: router.pathname === '/dylan' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                  Dylan
                </Link>
              </li>
              {!token ? (
                <>
                  <li className="nav-item" style={{ marginRight: '20px' }}>
                    <Link 
                      href="/register" 
                      className={`nav-link ${router.pathname === '/register' ? 'active' : ''}`} 
                      style={{ color: router.pathname === '/register' ? '#f0c040' : 'white' }}> 
                      Registrarme
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: '20px' }}>
                    <Link 
                      href="/login" 
                      className={`nav-link ${router.pathname === '/login' ? 'active' : ''}`} 
                      style={{ color: router.pathname === '/login' ? '#f0c040' : 'white' }}> {/* Color amarillo para la página activa */}
                      Iniciar Sesion
                    </Link>
                  </li>
                </>
              ) : (
                // Si hay token, mostrar el botón para cerrar sesión
                <li className="nav-item" style={{ marginRight: '20px' }}>
                  <button className="nav-link" onClick={handleLogout} style={{ color: 'white' }}>
                    Cerrar sesión
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
