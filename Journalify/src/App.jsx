/*import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; 
import './App.css'
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import SignUp from './pages/Auth/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>)
}

export default App*/



/*import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css'
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import SignUp from './pages/Auth/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root (/) to login *}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;*/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

