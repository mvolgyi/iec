import { useCallback } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// paginas
import Home from './pages/Home.jsx';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPages from './pages/ServiciosPages';
// fondo
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./assets/particles.json";
import AOS from 'aos';


function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
    }, [])
    AOS.init()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/nosotros' exact element={<NosotrosPage/>} />
          <Route path='/servicios' exact element={<ServiciosPages/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Particles options={particlesOptions} init={particlesInit}/>
    </div>
  );
}

export default App;
