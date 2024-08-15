// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { AiFillHome } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
// import DashboardPage from './components/DashboardPage';
import UserPage from './components/UserPage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<UserPage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
  
}

export default App;
