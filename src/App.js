import './App.css';
import Carrousel from './components/Carrousel';
import ValoresContenedor from './components/ValoresContenedor';
import ServiciosContenedor from './components/ServiciosContenedor';

function App() {
  return (
    <div className="App">
      <Carrousel />
      <ValoresContenedor />
      <ServiciosContenedor />
    </div>
  );
}

export default App;
