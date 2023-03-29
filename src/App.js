import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing/'
import Formulario from './Formulario/'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/formulario/" element={<Formulario />} />
        <Route path="/" element={<Landing />}/>
      </Routes>
    </div>
  );
}

export default App;
