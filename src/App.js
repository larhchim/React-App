import './App.css';
import Appbar from './components/AppBar';
import Star from './components/StarWars';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import StarDetails from './components/StarDetail';
import Bonus from './components/Bonus';


function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
          <Route path="/" element={<Star/>}></Route>
          <Route path="/Detail" element={<StarDetails/>}></Route>
          <Route path="/Bonus" element={<Bonus/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
