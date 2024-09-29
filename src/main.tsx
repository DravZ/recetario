import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import App from './App.tsx'
import NavbarComponent from './components/navbarComponent/NavbarComponent.tsx'
import HomeComponent from './components/home/homeComponent/HomeComponent.tsx'
import PostresComponent from './components/Pages/postres/PostresComponent.tsx';
import RecetaComponent from './components/Pages/receta/RecetaComponent.tsx';
import FooterComponent from './components/footerComponent/footerComponent.tsx';
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/postres" element={<PostresComponent/>} />
        <Route path="/receta/:id" element={<RecetaComponent/>} />
      </Routes>
      <FooterComponent/>
  </Router>
  </>
)
