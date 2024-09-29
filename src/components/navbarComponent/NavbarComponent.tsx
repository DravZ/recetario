import React from 'react';
import { Link } from 'react-router-dom';
function NavbarComponent(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to="/" className='navbar-brand'>Flavor Fusion</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/postres" className='nav-link active'>Postres</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )

}

export default NavbarComponent