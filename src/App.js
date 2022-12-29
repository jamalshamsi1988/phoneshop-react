import React, { Component } from 'react';
import { Navigate, Route , Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Footer from "./Components/Footer";
import Products from './Components/Products';
import AboutUs from './Components/AboutUs';
import DetailsPage from './Components/DetailsPage';
import NotFound from './Components/NotFound';
import  SignUp from './Components/SignUp';

 class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
       
        <Routes>
          <Route path="/products" element={<Products />} />

          {/* Nested Route */}

          <Route path="/products/aboutus/*" element={<AboutUs />}>
          <Route path='programmers' element={<h1>Programmers</h1>}/>
            <Route path='drivers' element={<h1>Drivers</h1>}/>
            </Route>
            
          <Route path='/products/:id' element={<DetailsPage/>}/>
          <Route path="/" element={<Landing />}  />
          <Route path='/notfound' element={<NotFound/>} />
          <Route path='/*' element={ <Navigate to="/notfound"/>} />
          <Route path='/signup' element={ <SignUp />} />
        </Routes>
        <Footer />
       
      </div>
    )
  }
}
export default App;