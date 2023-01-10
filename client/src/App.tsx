import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Puppy from './components/Puppy';
import Add from './components/Add';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/puppies/:id' element={<Puppy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
