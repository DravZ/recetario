import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import App from './App.tsx'
import NavbarComponent from './components/navbarComponent/NavbarComponent.tsx'
import HomeComponent from './components/home/homeComponent/HomeComponent.tsx'
import PostresComponent from './components/Pages/postres/PostresComponent.tsx';
import RecetaComponent from './components/Pages/receta/RecetaComponent.tsx';
import FooterComponent from './components/footerComponent/FooterComponent.tsx';
import EnsaladasComponent from './components/Pages/ensaladas/EnsaladasComponent.tsx';
import PastasComponent from './components/Pages/pastas/PastasComponent.tsx';
import DesayunosComponent from './components/Pages/desayunos/DesayunosComponent.tsx';
import NinosComponent from './components/Pages/ninos/NinosComponent.tsx';
import DylanComponent from './components/Pages/dylan/DylanComponent.tsx';
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/postres" element={<PostresComponent/>} />
        <Route path="/ensaladas" element={<EnsaladasComponent/>} />
        <Route path="/pastas" element={<PastasComponent/>} />
        <Route path="/desayunos" element={<DesayunosComponent/>} />
        <Route path="/ninos" element={<NinosComponent/>} />
        <Route path="/dylan" element={<DylanComponent/>} />
        <Route path="/receta/:id" element={<RecetaComponent/>} />
      </Routes>
      <FooterComponent/>
  </Router>
  </>
)
