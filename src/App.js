import Home from './home.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={(<Home/>)} />
        <Route path='/login' element={(<Login/>)} />
      </Routes>
    </div>
  );
}

export default App;
