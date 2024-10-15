import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './NavbarComponent.module.css';

function NavbarComponent() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('user');
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setToken(null);
    router.push('/login');
  };

  return (
    <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: '#191616' }}>
      <div className="container-fluid">
        <Link href="/" className='navbar-brand'>
          <img src='/img/ico.png' alt='Logo' style={{ height: '80px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`navbar-nav ${styles.navbarNav}`}>
            <li className="nav-item">
              <Link 
                href="/" 
                className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/postres" 
                className={`nav-link ${router.pathname === '/postres' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/postres' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Postres
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/ensaladas" 
                className={`nav-link ${router.pathname === '/ensaladas' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/ensaladas' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Ensaladas
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/pastas" 
                className={`nav-link ${router.pathname === '/pastas' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/pastas' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Pastas
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/desayunos" 
                className={`nav-link ${router.pathname === '/desayunos' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/desayunos' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Desayunos
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/ninos" 
                className={`nav-link ${router.pathname === '/ninos' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/ninos' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Niños
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/dylan" 
                className={`nav-link ${router.pathname === '/dylan' ? 'active' : ''}`} 
                style={{ color: router.pathname === '/dylan' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                Dylan
              </Link>
            </li>
            {!token ? (
              <>
                <li className="nav-item">
                  <Link 
                    href="/register" 
                    className={`nav-link ${router.pathname === '/register' ? 'active' : ''}`} 
                    style={{ color: router.pathname === '/register' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                    Registrarme
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    href="/login" 
                    className={`nav-link ${router.pathname === '/login' ? 'active' : ''}`} 
                    style={{ color: router.pathname === '/login' ? '#f0c040' : 'white', fontSize: '24px', marginRight: '20px' }}> 
                    Iniciar Sesion
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout} style={{ color: 'white', fontSize: '24px', marginRight: '20px' }}>
                  Cerrar sesión
                </button>
              </li>
              
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
