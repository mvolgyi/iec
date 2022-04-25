import './App.css';
import Carrousel from './components/Carrousel';
import ValoresContenedor from './components/ValoresContenedor';
import ServiciosContenedor from './components/ServiciosContenedor';
import ProyectosContenedor from './components/ProyectosContenedor';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <ValoresContenedor />
      <Nosotros />
      <ServiciosContenedor />
      <ProyectosContenedor />
      <Footer />
    </div>
  );
}

export default App;
