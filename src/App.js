import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camera from './component/Camera'
import PhotoSelect from './component/PhotoSelect';
import Frame from './component/Frame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/camera' element={<Camera />} />
        <Route path='/select' element={<PhotoSelect />} />
        <Route path='/frame' element={<Frame />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
