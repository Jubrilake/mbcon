import React,{Fragment, useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Membership from './components/pages/Membership';
import Updates from './components/pages/Updates';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AdminPage from './components/pages/AdminPage';

import {  Routes,
  Route } from 'react-router-dom';
// import A
const App = () => {
  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <Fragment>
        <Navbar />
        <Login />
        <Register />
      <Routes>
    
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/membership" element={<Membership />} />
      <Route  path="/updates" element={<Updates />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/admin" element={<AdminPage />} />
   
        
      </Routes>
  
   <Footer />
    </Fragment>
  );
}

export default App;
