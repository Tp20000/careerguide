import Home from "./Components/Home"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";

function App() {
  

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          
          
          
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              
                <Dashboard />
              
            }
          />
          
        </Routes>
      </Router>
    
    


    </>
  )
}

export default App
