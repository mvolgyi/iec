import './App.css';
import Carrousel from './components/Carrousel';
import ValoresContenedor from './components/ValoresContenedor';
import ServiciosContenedor from './components/ServiciosContenedor';
import ProyectosContenedor from './components/ProyectosContenedor';

function App() {
  return (
    <div className="App">
      <Carrousel />
      <ValoresContenedor />
      <ServiciosContenedor />
      <ProyectosContenedor />
    </div>
  );
}

export default App;
