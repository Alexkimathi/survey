
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
   <div>
     <Router>
    <Routes>
        <Route path="/" element={<Home />} />  
    </Routes>
</Router>
   </div>
  );
}

export default App;
