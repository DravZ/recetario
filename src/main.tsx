import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import App from './App.tsx'
import NavbarComponent from './components/navbarComponent/NavbarComponent.tsx'
import HomeComponent from './components/home/homeComponent/HomeComponent.tsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
      </Routes>
  </Router>
  
)
