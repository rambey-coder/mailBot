import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar';
import AddRecipent from './pages/AddRecipent/AddRecipent';
import RecipentList from './pages/AddRecipent/RecipentList';


function App() {
  return (
    <div className='mailbot-container'>
      <Sidebar />
      <div className='mailbot-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-recipent" element={<AddRecipent />} />
          <Route path='/recipent-list' element={<RecipentList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
