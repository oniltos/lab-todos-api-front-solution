import './App.css';
import { Routes, Route } from 'react-router-dom'
import TodosPage from './pages/TodosPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
