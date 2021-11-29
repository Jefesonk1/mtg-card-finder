import Inicial from './inicial';
import Card from './Card';
import { Routes, Route } from 'react-router-dom';
//Link;
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/card/:invoiceId" element={<Card />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
