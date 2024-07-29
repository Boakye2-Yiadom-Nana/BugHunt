import 'bootstrap-icons/font/bootstrap-icons.css';
import { AiFillHome } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import { Header } from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReportSubmission from './components/ReportSubmission';




function App() {
  


  return (
    <>
     
     <div className='hello'>
     <Header/>
     <SideBar/>
    
     <Main/>
     
     </div>
     <ReportSubmission/>
    


  
    
    </>
  );
}

export default App;
