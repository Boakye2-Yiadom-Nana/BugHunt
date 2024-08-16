import 'bootstrap-icons/font/bootstrap-icons.css';
import { AiFillHome } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DashboardPage from './components/DashboardPage';
import Login from './components/login';
import Register from './components/register';
import UserPage from './components/UserPage';
import BugPage from './components/bug';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/BugPage" element={<BugPage />} />
      </Routes>
    </Router>

  );

}

export default App;
