import './App.css';
import './styles/fonts.css'

import Home from './pages/Home';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import ReceipeListofCategory from './components/recipeContentComponent/ReceipeListofCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/category/:categoryName" element={<ReceipeListofCategory/>} />
        <Route path = "/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
 