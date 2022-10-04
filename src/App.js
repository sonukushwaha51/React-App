import React, {Component} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import './styles.css';
import Contact from './components/Contact';
import Category from './components/Category';

function App() {

 
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
          <Route path='/contactus' element={<Contact />} />
          <Route path="/category" element={<Category />}></Route>
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
    
  );
  
  
}

export default App;
