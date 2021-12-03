import Inicial from './Pages/Home/index';
import Formats from './Pages/GameFormats/index';
import Card from './Pages/Card/index';
import { Routes, Route } from 'react-router-dom';
import './global.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/formats" element={<Formats />} />
        <Route path="/card/:invoiceId" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
