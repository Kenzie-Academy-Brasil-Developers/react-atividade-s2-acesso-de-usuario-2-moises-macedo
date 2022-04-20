import './App.css';
import Home from './Componentes/Home'
import {Routes, Route} from 'react-router-dom';
import Company from './pages/company';
import Customer from './pages/customer';
import members from './Componentes/Api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/customer/:id" element={<Customer/>}/>
          <Route path="/company/:id" element={<Company/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
