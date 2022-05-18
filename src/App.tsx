import { Route, Routes } from 'react-router-dom';
import './App.css';
import Functionality from './Pages/Functionality/Functionality';
import { Home } from './Pages/Home/Home';
import MaterialUI from './Pages/MaterialUI/MaterialUI';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/materialui" element={<MaterialUI/>}/>
        <Route path="/functionality" element={<Functionality/>}/>
      </Routes>
    </div>
  )
}

export default App;
