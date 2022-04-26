import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPages from './pages/ServiciosPages';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/nosotros' exact element={<NosotrosPage/>} />
          <Route path='/servicios' exact element={<ServiciosPages/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
