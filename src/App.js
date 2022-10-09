import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import './styles.css';
import Contact from './components/Contact';
import Category from './components/Category';
import Offers from './components/Offers';
import BuyingGuides from './components/BuyingGuides';

class App extends Component {
  
 render() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
          <Route path='/contactus' element={<Contact />} />
          <Route path="/category" element={<Category />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/buying-guides" element={<BuyingGuides />}></Route>
          <Route path="/product" ></Route>
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
    
  );
} 
  
}

export default App;
