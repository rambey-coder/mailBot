import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='mailbot-container'>
      <Sidebar />
      <div className='mailbot-content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
