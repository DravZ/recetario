import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import NavbarComponent from './components/home/navbarComponent/NavbarComponent.tsx'
import BannerComponent from './components/home/bannerComponent/BannerComponent.tsx'
import IndexContentComponent from './components/home/indexContentComponent/IndexContentComponent.tsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavbarComponent/>
    <BannerComponent/>
    <IndexContentComponent/>
  </React.StrictMode>,
)
