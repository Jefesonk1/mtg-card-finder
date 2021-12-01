import Inicial from './Pages/Home/home';
import Card from './Pages/Card/Card';
import { Routes, Route } from 'react-router-dom';
import './global.css';
//Link;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/card/:invoiceId" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
