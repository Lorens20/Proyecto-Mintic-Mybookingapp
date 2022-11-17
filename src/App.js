import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Cabana from './pages/Caban/Cabana';
import Cabanas from './pages/cabanas/Cabanas';
import Home from './pages/home/Home';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cabanas' element={<Cabanas />} />
          <Route path='/cabanas/:id' element={<Cabana />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
