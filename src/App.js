import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camera from './component/Camera'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/camera' element={<Camera />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
