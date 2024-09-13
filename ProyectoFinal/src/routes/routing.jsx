import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from '../pages/prueba';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Servicios from '../pages/Servicios';
import AboutUs from '../pages/AbouUs';
import Reseñas from '../pages/Reseñas';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={ "" } />
       <Route path='/Login' element={<Login />} />
       <Route path='/Home' element={<Home />} />
       <Route path="/Servicios" element={<Servicios />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/Reseñas" element={<Reseñas />} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/Prueba' element={<Prueba />} />
     </Routes>
    </Router>
   );
};
export default Routing;