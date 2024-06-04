import './App.css';
import './styles/fonts.css'

import Home from './pages/Home';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import ReceipeListofCategory from './pages/ReceipeListofCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/category/:categoryId" element={<ReceipeListofCategory/>} />
      </Routes>
    </Router>
  );
}

export default App;
 