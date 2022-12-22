import React, { Component } from 'react';
import { Navigate, Route , Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Footer from "./Components/Footer";
import Products from './Components/Products';
import AboutUs from './Components/AboutUs';
import DetailsPage from './Components/DetailsPage';
import NotFound from './Components/NotFound';

 class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/aboutus" element={<AboutUs />} />
          <Route path='/products/:id' element={<DetailsPage/>}/>
          <Route path="/" element={<Landing />}  />
          <Route path='/notfound' element={<NotFound/>} />
          <Route path='/*' element={ <Navigate to="/notfound"/>} />

        </Routes>
        <Footer />
       
      </div>
    )
  }
}
export default App;